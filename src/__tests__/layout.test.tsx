import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { metadata } from '../app/layout';
import RootLayout from '../app/layout';

// Mock the CSS import
jest.mock('../app/globals.css', () => ({}));

// Mock the Google Fonts
jest.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
  }),
}));

// Mock Vercel Analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}));

// Helper function to validate and extract image URL from Open Graph images
const validateImageUrl = (images: unknown): string | null => {
  if (Array.isArray(images) && images.length > 0) {
    const firstImage = images[0];
    if (
      typeof firstImage === 'object' &&
      firstImage !== null &&
      'url' in firstImage
    ) {
      return firstImage.url as string;
    }
  }
  return null;
};

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const testContent = 'Test Content';
    render(
      <RootLayout>
        <div>{testContent}</div>
      </RootLayout>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const testContent = 'Test Content';
    expect(() => {
      render(
        <RootLayout>
          <div>{testContent}</div>
        </RootLayout>
      );
    }).not.toThrow();
  });

  it('passes children as React nodes', () => {
    const testContent = <div data-testid="test-child">Test Child</div>;
    render(<RootLayout>{testContent}</RootLayout>);

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });
});

describe('Metadata', () => {
  it('has correct basic metadata', () => {
    expect(metadata.title).toBe(
      'IMPACTE: An AI-First Software Engineering Framework'
    );
    expect(metadata.description).toBe(
      'Intelligent Multi-Agent Product-Centric Architecture with Cost-Efficiency and Trade-offs Engineering. A product-oriented, AI-first framework for healthcare and financial technology. Created by Gabriel Amazonas.'
    );
    expect(metadata.creator).toBe('Gabriel Amazonas');
  });

  it('has correct keywords', () => {
    expect(metadata.keywords).toEqual([
      'AI',
      'Software Engineering',
      'Product Engineering',
      'Gabriel Amazonas',
      'IMPACTE',
      'Machine Learning',
      'FinTech',
      'HealthTech',
      'Compliance',
    ]);
  });

  it('has correct authors', () => {
    expect(metadata.authors).toEqual([{ name: 'Gabriel Amazonas' }]);
  });

  it('has correct metadataBase URL', () => {
    expect(metadata.metadataBase).toEqual(
      new URL('https://raise-engineering.com')
    );
  });

  it('has correct Open Graph metadata', () => {
    expect(metadata.openGraph).toEqual({
      type: 'website',
      locale: 'en_US',
      url: 'https://raise-engineering.com',
      siteName: 'IMPACTE: An AI-First Software Engineering Framework',
      title: 'IMPACTE: An AI-First Software Engineering Framework',
      description:
        'A framework for integrating high-performance AI agents into regulated healthcare and financial environments. Product-oriented, AI-first software engineering. Created by Gabriel Amazonas.',
      images: [
        {
          url: '/raise-logo.webp',
          width: 1200,
          height: 630,
          alt: 'IMPACTE: An AI-First Software Engineering Framework',
        },
      ],
    });
  });

  it('has correct Twitter Card metadata', () => {
    expect(metadata.twitter).toEqual({
      card: 'summary_large_image',
      title: 'IMPACTE: An AI-First Software Engineering Framework',
      description:
        'A framework for integrating high-performance AI agents into regulated healthcare and financial environments. Product-oriented, AI-first software engineering.',
      images: ['/raise-logo.webp'],
    });
  });

  it('has correct robots configuration', () => {
    expect(metadata.robots).toEqual({
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    });
  });

  it('has correct canonical URL', () => {
    expect(metadata.alternates).toEqual({
      canonical: 'https://raise-engineering.com',
    });
  });

  it('has correct social media image configuration', () => {
    // Test that both Open Graph and Twitter use the same image
    const ogImageUrl = validateImageUrl(metadata.openGraph?.images);
    if (ogImageUrl) {
      expect(ogImageUrl).toBe('/raise-logo.webp');
    }
    expect(metadata.twitter?.images).toEqual(['/raise-logo.webp']);
  });

  it('has SEO-friendly configuration', () => {
    // Test important SEO elements
    expect(metadata.metadataBase).toBeDefined();
    expect(metadata.alternates?.canonical).toBe(
      'https://raise-engineering.com'
    );
    // Test robots configuration is an object with correct properties
    expect(typeof metadata.robots).toBe('object');
    if (typeof metadata.robots === 'object' && metadata.robots !== null) {
      expect(metadata.robots.index).toBe(true);
      expect(metadata.robots.follow).toBe(true);
    }
  });
});
