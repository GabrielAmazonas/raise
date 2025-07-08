'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="logo text-sm sm:text-base md:text-lg lg:text-xl font-bold logo-text"
            >
              RAISE
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="nav hidden lg:flex space-x-4 xl:space-x-6">
            <Link
              href="#about"
              className="text-accent px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-accent px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-accent px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-accent px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-accent px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Tablet Navigation - Compact */}
          <nav className="hidden md:flex lg:hidden space-x-2">
            <Link
              href="#about"
              className="text-gray-700 hover:text-gray-900 px-1 py-1 rounded-md text-xs font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-gray-900 px-1 py-1 rounded-md text-xs font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-gray-900 px-1 py-1 rounded-md text-xs font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-1"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="#about"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
