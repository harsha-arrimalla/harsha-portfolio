'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * A difference-blend cursor that grows and takes a label when it passes over
 * anything carrying `data-cursor`. Pointer-coarse devices keep the OS cursor.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setEnabled(true);

    const el = dot.current;
    if (!el) return;

    const x = gsap.quickTo(el, 'x', { duration: 0.42, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.42, ease: 'power3' });

    function onMove(e: PointerEvent) {
      x(e.clientX);
      y(e.clientY);

      const hit = (e.target as HTMLElement)?.closest?.('[data-cursor]');
      const next = hit?.getAttribute('data-cursor') ?? '';
      setLabel((prev) => (prev === next ? prev : next));
      el?.setAttribute('data-state', hit ? 'active' : 'idle');
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div ref={dot} className="hx-cursor" data-state="idle" aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
