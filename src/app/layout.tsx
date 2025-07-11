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
  title: 'RAISE - Research-Driven AI-First Software Engineering',
  description:
    'Supporting the Software Engineering community with research-driven approaches to AI-first software engineering. Created by Gabriel Amazonas.',
  keywords: [
    'AI',
    'Software Engineering',
    'Research',
    'Gabriel Amazonas',
    'RAISE',
    'Machine Learning',
    'Technology',
  ],
  authors: [{ name: 'Gabriel Amazonas' }],
  creator: 'Gabriel Amazonas',

  // Open Graph tags for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raise-engineering.com',
    siteName: 'RAISE - Research-Driven AI-First Software Engineering',
    title: 'RAISE - Research-Driven AI-First Software Engineering',
    description:
      'Supporting the Software Engineering community with research-driven approaches to AI-first software engineering. Created by Gabriel Amazonas.',
    images: [
      {
        url: '/raise-logo.webp', // Using RAISE logo as preview
        width: 1200,
        height: 630,
        alt: 'RAISE - Research-Driven AI-First Software Engineering',
      },
    ],
  },

  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    // site: '@your_twitter_handle', // Add your Twitter handle if you have one
    // creator: '@your_twitter_handle', // Add your Twitter handle if you have one
    title: 'RAISE - Research-Driven AI-First Software Engineering',
    description:
      'Supporting the Software Engineering community with research-driven approaches to AI-first software engineering.',
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
