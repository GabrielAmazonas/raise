import React from 'react';
import { render, screen } from '@testing-library/react';
import CommunityReferenceCard from '@/components/CommunityReferenceCard';
import { CommunityReference } from '@/types';

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({
    src,
    alt,
    fill,
    className,
    ...props
  }: {
    src: string;
    alt: string;
    fill?: boolean;
    className?: string;
    [key: string]: unknown;
  }) {
    return (
      <img
        src={src}
        alt={alt}
        data-fill={fill}
        className={className}
        {...props}
      />
    );
  };
});

const mockReference: CommunityReference = {
  id: '1',
  name: 'Test Person',
  twitterUrl: 'https://twitter.com/testperson',
  postImageUrl: '/test-image.webp',
  description: 'Test description for the person',
  idea: 'Test idea that is implemented in this project',
};

describe('CommunityReferenceCard', () => {
  it('renders the community reference card with all required elements', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    // Check if the name is displayed
    expect(screen.getByText('Test Person')).toBeInTheDocument();

    // Check if the description is displayed
    expect(
      screen.getByText('Test description for the person')
    ).toBeInTheDocument();

    // Check if the idea is displayed
    expect(
      screen.getByText('Test idea that is implemented in this project')
    ).toBeInTheDocument();

    // Check if the "Implemented Idea:" label is displayed
    expect(screen.getByText('Implemented Idea:')).toBeInTheDocument();
  });

  it('renders the post image with correct attributes', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    const image = screen.getByAltText('Test Person post');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.webp');
  });

  it('renders the Twitter link with correct attributes', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    const twitterLink = screen.getByLabelText('Follow Test Person on Twitter');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/testperson'
    );
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('displays the Twitter icon SVG', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    const twitterIcon = screen.getByLabelText('Follow Test Person on Twitter');
    const svgElement = twitterIcon.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('applies correct CSS classes for styling', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    // Check main container classes
    const cardElement = screen
      .getByText('Test Person')
      .closest('.bg-white.rounded-lg.shadow-md');
    expect(cardElement).toBeInTheDocument();

    // Check name styling
    const nameElement = screen.getByText('Test Person');
    expect(nameElement).toHaveClass(
      'text-xl',
      'font-semibold',
      'text-gray-900'
    );

    // Check description styling
    const descriptionElement = screen.getByText(
      'Test description for the person'
    );
    expect(descriptionElement).toHaveClass('text-gray-600', 'mb-4', 'text-sm');
  });

  it('applies aspect-video and overflow to image container', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    const imageContainer =
      screen.getByAltText('Test Person post').parentElement;
    expect(imageContainer).toHaveClass(
      'relative',
      'aspect-video',
      'bg-gray-100',
      'overflow-hidden'
    );
  });

  it('applies object-contain to image', () => {
    render(<CommunityReferenceCard reference={mockReference} />);

    const image = screen.getByAltText('Test Person post');
    expect(image).toHaveClass('object-contain');
  });
});
