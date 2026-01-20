'use client';

import { useEffect } from 'react';

export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          if (modal instanceof HTMLElement && modal.style.display !== 'none') {
            modal.style.display = 'none';
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      skipLink.remove();
    };
  }, []);

  return null;
}
