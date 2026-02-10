import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://raise-engineering.com'),
  title: 'IMPACTE: An AI-First Software Engineering Framework',
  description:
    'Intelligent Multi-Agent Product-Centric Architecture with Cost-Efficiency and Trade-offs Engineering. A product-oriented, AI-first framework for healthcare and financial technology. Created by Gabriel Amazonas.',
  keywords: [
    'AI',
    'Software Engineering',
    'Product Engineering',
    'Gabriel Amazonas',
    'IMPACTE',
    'Machine Learning',
    'FinTech',
    'HealthTech',
    'Compliance',
  ],
  authors: [{ name: 'Gabriel Amazonas' }],
  creator: 'Gabriel Amazonas',

  // Open Graph tags for social media sharing
  openGraph: {
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
  },

  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: 'IMPACTE: An AI-First Software Engineering Framework',
    description:
      'A framework for integrating high-performance AI agents into regulated healthcare and financial environments. Product-oriented, AI-first software engineering.',
    images: ['/raise-logo.webp'],
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: 'https://raise-engineering.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
