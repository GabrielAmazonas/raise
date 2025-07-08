import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders all navigation links (desktop)', () => {
    render(<Header />);
    ['About', 'Experience', 'Projects', 'Skills', 'Contact'].forEach(text => {
      expect(screen.getAllByText(text)[0]).toBeInTheDocument();
    });
  });

  it('renders mobile menu toggle button', () => {
    render(<Header />);
    const button = screen.getByLabelText('Toggle menu');
    expect(button).toBeInTheDocument();
  });
});
