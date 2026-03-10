'use client';

import { useEffect, useState } from 'react';

export default function MouseFollower() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only on desktop
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden mix-blend-multiply opacity-30">
      <div
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.8s cubic-bezier(0.16, 1, 0.3, 1), top 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-[100px]"
      />
    </div>
  );
}
