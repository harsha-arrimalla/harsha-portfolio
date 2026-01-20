'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show cursor on desktop
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a, button') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) scale(${isPointer ? 0.5 : 1})`,
        }}
      />

      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-black/30 rounded-full pointer-events-none z-[9998] mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px) scale(${isPointer ? 1.8 : 1})`,
        }}
      />

      {/* Outer glow ring */}
      <div
        className="fixed top-0 left-0 w-20 h-20 border border-blue-500/20 rounded-full pointer-events-none z-[9997] blur-sm transition-all duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 40}px, ${mousePosition.y - 40}px) scale(${isPointer ? 2 : 1})`,
          opacity: isPointer ? 0.6 : 0.3,
        }}
      />
    </>
  );
}

