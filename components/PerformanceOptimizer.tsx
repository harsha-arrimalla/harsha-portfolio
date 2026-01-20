'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Add performance hints
    const style = document.createElement('style');
    style.textContent = `
      /* GPU acceleration for animated elements */
      [data-animate] {
        will-change: transform, opacity;
        transform: translateZ(0);
      }
      
      /* Optimize 3D canvas */
      canvas {
        will-change: transform;
        transform: translateZ(0);
      }
      
      /* Optimize scroll containers */
      section {
        will-change: scroll-position;
      }
    `;
    document.head.appendChild(style);

    // Force GPU acceleration for critical elements
    const criticalElements = document.querySelectorAll('section, [data-animate]');
    criticalElements.forEach((el) => {
      (el as HTMLElement).style.transform = 'translateZ(0)';
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
