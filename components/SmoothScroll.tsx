'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Hook to track scroll progress via Lenis
  useLenis(({ scroll, limit }) => {
    const progress = (scroll / limit) * 100;
    setScrollProgress(progress);
  });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15, // Smoothness
        duration: 0.1, // Almost instant (User Request)
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2,
      }}
    >
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-[100] pointer-events-none"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: 'left',
          // No transition on the bar itself, let Lenis handle the smoothness
        }}
      />
      {children}
    </ReactLenis>
  );
}
