'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SITE } from '@/lib/site';

/**
 * Opening sequence: a count to 100 behind three rising panels. Runs once per
 * browser session, and not at all for reduced-motion visitors.
 */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try {
      if (sessionStorage.getItem('hx-intro') === 'done') return;
    } catch {
      /* no session storage — play it anyway */
    }
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const el = root.current;
    if (!el) return;

    document.body.dataset.locked = 'true';

    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem('hx-intro', 'done');
        } catch {
          /* ignore */
        }
        delete document.body.dataset.locked;
        setShow(false);
        window.dispatchEvent(new Event('hx:intro-done'));
      },
    });

    tl.to(counter, {
      v: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (count.current) {
          count.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
        }
      },
    })
      .to('.hx-pre-line', { scaleX: 1, duration: 0.9, ease: 'power3.inOut' }, 0.1)
      .to('.hx-pre-meta', { yPercent: -120, opacity: 0, duration: 0.5, ease: 'power3.in' }, '-=0.1')
      .to(
        '.hx-pre-panel',
        {
          yPercent: -100,
          duration: 0.85,
          ease: 'expo.inOut',
          stagger: 0.07,
        },
        '-=0.2'
      );

    return () => {
      tl.kill();
      delete document.body.dataset.locked;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="hx-pre" ref={root} aria-hidden="true">
      <div className="hx-pre-panels">
        <div className="hx-pre-panel" />
        <div className="hx-pre-panel" />
        <div className="hx-pre-panel" />
      </div>
      <div className="hx-pre-content">
        <div className="hx-pre-meta">
          <span>{SITE.name}</span>
          <span>{SITE.role}</span>
        </div>
        <div className="hx-pre-line" />
        <div className="hx-pre-meta hx-pre-meta-end">
          <span>Loading portfolio</span>
          <span ref={count} className="hx-num">
            000
          </span>
        </div>
      </div>
    </div>
  );
}
