'use client';

import { useState, useEffect } from 'react';

export default function SponsorModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Only run localStorage logic on the client
    if (typeof window !== 'undefined') {
      try {
        // Check if this is a returning visitor
        const visitCount = localStorage.getItem('raise-visit-count');
        const currentCount = visitCount ? parseInt(visitCount, 10) : 0;
        const newCount = currentCount + 1;

        // Update visit count
        localStorage.setItem('raise-visit-count', newCount.toString());

        // Show modal for returning visitors (2nd visit or more)
        if (newCount >= 2) {
          // Small delay to ensure the page is loaded
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 1000);

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error('Failed to access localStorage:', error);
      }
    }
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) return null;

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSponsorClick = () => {
    window.open('https://buy.stripe.com/aFaeVd6A2aK2gT8dXT1RC03', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-card-bg border-4 border-primary shadow-lg max-w-md w-full mx-4">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-accent hover:text-primary text-2xl font-bold z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Modal content */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Welcome Back! 🎮
          </h2>

          <p className="text-foreground mb-6 text-sm leading-relaxed">
            Thanks for returning to RAISE! If you find this project valuable,
            consider becoming a sponsor to help keep it growing and improving.
          </p>

          <div className="space-y-4">
            <button
              onClick={handleSponsorClick}
              className="w-full bg-primary text-accent font-bold py-3 px-6 border-4 border-accent shadow-lg hover:bg-black hover:text-accent transition-colors"
            >
              Sponsor this project ❤️
            </button>

            <button
              onClick={handleClose}
              className="w-full bg-transparent text-foreground font-bold py-2 px-4 border-2 border-primary hover:bg-primary hover:text-accent transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
