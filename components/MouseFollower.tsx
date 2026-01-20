'use client';

import { useEffect, useState } from 'react';

export default function MouseFollower() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating orbs that follow mouse */}
      <div
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(0.05)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      <div
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(-0.03)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
      />
      <div
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(0.04)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
    </div>
  );
}
