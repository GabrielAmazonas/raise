import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import SponsorModal from '../components/SponsorModal';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', {
  value: mockOpen,
});

describe('SponsorModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should not show modal for first-time visitors', async () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<SponsorModal />);

    // Wait for component to mount
    await act(async () => {
      await waitFor(() => {
        expect(screen.queryByText('Welcome Back! 🎮')).not.toBeInTheDocument();
      });
    });
  });

  it('should show modal for returning visitors (2nd visit or more)', async () => {
    localStorageMock.getItem.mockReturnValue('1'); // First visit already recorded

    render(<SponsorModal />);

    // Fast-forward timers to trigger the modal
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(screen.getByText('Welcome Back! 🎮')).toBeInTheDocument();
      expect(screen.getByText('Read the research 📄')).toBeInTheDocument();
      expect(screen.getByText('Maybe later')).toBeInTheDocument();
    });
  });

  it('should open research link when research button is clicked', async () => {
    localStorageMock.getItem.mockReturnValue('1');

    render(<SponsorModal />);

    // Fast-forward timers to show modal
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      const researchButton = screen.getByText('Read the research 📄');
      fireEvent.click(researchButton);

      expect(mockOpen).toHaveBeenCalledWith(
        'https://doi.org/10.5281/zenodo.18519189',
        '_blank'
      );
    });
  });

  it('should close modal when close button is clicked', async () => {
    localStorageMock.getItem.mockReturnValue('1');

    render(<SponsorModal />);

    // Fast-forward timers to show modal
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      const closeButton = screen.getByLabelText('Close modal');
      fireEvent.click(closeButton);

      expect(screen.queryByText('Welcome Back! 🎮')).not.toBeInTheDocument();
    });
  });

  it('should close modal when backdrop is clicked', async () => {
    localStorageMock.getItem.mockReturnValue('1');

    render(<SponsorModal />);

    // Fast-forward timers to show modal
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      const modal = screen.getByText('Welcome Back! 🎮').closest('div');
      const backdrop = modal?.parentElement?.firstChild as HTMLElement;

      if (backdrop) {
        fireEvent.click(backdrop);
        expect(screen.queryByText('Welcome Back! 🎮')).not.toBeInTheDocument();
      }
    });
  });

  it('should close modal when "Maybe later" button is clicked', async () => {
    localStorageMock.getItem.mockReturnValue('1');

    render(<SponsorModal />);

    // Fast-forward timers to show modal
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      const maybeLaterButton = screen.getByText('Maybe later');
      fireEvent.click(maybeLaterButton);

      expect(screen.queryByText('Welcome Back! 🎮')).not.toBeInTheDocument();
    });
  });

  it('should increment visit count in localStorage', async () => {
    localStorageMock.getItem.mockReturnValue('3');

    render(<SponsorModal />);

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'raise-visit-count',
        '4'
      );
    });
  });

  it('should handle localStorage errors gracefully', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage not available');
    });

    render(<SponsorModal />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to access localStorage:',
        expect.any(Error)
      );
    });

    consoleErrorSpy.mockRestore();
  });
});
