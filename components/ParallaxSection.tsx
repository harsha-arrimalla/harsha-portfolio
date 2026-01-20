'use client';

import { useRef, useEffect, useState } from 'react';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.3,
  className,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate how far the element is through the viewport
      const distance = (scrollY + viewportHeight) - elementTop;
      const totalDistance = viewportHeight + rect.height;
      const percentage = Math.max(0, Math.min(1, distance / totalDistance));

      setOffset((percentage - 0.5) * -200 * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
      className={className}
    >
      {children}
    </div>
  );
}
