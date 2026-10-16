'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Inertial scrolling, driven off the GSAP ticker so ScrollTrigger and Lenis
 * stay on the same clock. Disabled entirely for reduced-motion users.
 */
export default function Smooth() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Anchor links need to go through Lenis or they jump out of sync.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"], a[href^="/#"]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const id = href.slice(href.indexOf('#'));
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -70 });
    };

    document.addEventListener('click', onClick);

    // A pinned section changes the document height, so a hash that arrives
    // with the page has to be resolved again once layout has settled.
    const settle = window.setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.location.hash.length > 1) {
        const target = document.querySelector(window.location.hash);
        if (target) lenis.scrollTo(target as HTMLElement, { offset: -70, immediate: true });
      }
    }, 450);

    return () => {
      window.clearTimeout(settle);
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
