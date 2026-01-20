'use client';

import { useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Progress bar at top */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100] pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scrollProgress / 100})`, transformOrigin: 'left' }}
      />

      {children}
    </>
  );
}
