'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const smoothPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    // Smooth lerp for the outer ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      smoothPosition.current.x = lerp(smoothPosition.current.x, mousePosition.x, 0.15);
      smoothPosition.current.y = lerp(smoothPosition.current.y, mousePosition.y, 0.15);

      const ring = document.getElementById('cursor-ring');
      const label = document.getElementById('cursor-label');
      if (ring) {
        ring.style.transform = `translate(${smoothPosition.current.x - 28}px, ${smoothPosition.current.y - 28}px) scale(${isPointer ? 2 : 1})`;
      }
      if (label) {
        label.style.transform = `translate(${smoothPosition.current.x}px, ${smoothPosition.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      smoothPosition.current.x = lerp(smoothPosition.current.x, e.clientX, 0.3);
      smoothPosition.current.y = lerp(smoothPosition.current.y, e.clientY, 0.3);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isLink = window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a, button') !== null;

      setIsPointer(isLink);

      // Check for data-cursor attribute for custom text labels
      const cursorEl = target.closest('[data-cursor]');
      if (cursorEl) {
        setCursorText((cursorEl as HTMLElement).dataset.cursor || '');
      } else if (isLink) {
        setCursorText('');
      } else {
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [mousePosition.x, mousePosition.y, isPointer]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 5}px, ${mousePosition.y - 5}px) scale(${isPressed ? 0.6 : isPointer ? 0.4 : 1})`,
          transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />

      {/* Cursor ring — lerped for smoothness */}
      <div
        id="cursor-ring"
        className={`fixed top-0 left-0 w-14 h-14 border ${cursorText ? 'border-black/60 bg-black/5' : 'border-black/20'} rounded-full pointer-events-none z-[9998] mix-blend-difference`}
        style={{
          transition: `width 0.4s, height 0.4s, border 0.3s, background 0.3s, scale 0.3s`,
          width: cursorText ? '90px' : isPointer ? '56px' : '56px',
          height: cursorText ? '90px' : isPointer ? '56px' : '56px',
        }}
      />

      {/* Cursor text label */}
      {cursorText && (
        <div
          id="cursor-label"
          className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
          style={{
            width: 0,
            height: 0,
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black whitespace-nowrap">
            {cursorText}
          </span>
        </div>
      )}
    </>
  );
}

