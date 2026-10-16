'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/lib/site';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('hx-theme');
      if (stored === 'dark' || stored === 'light') {
        setTheme(stored);
        return;
      }
    } catch {
      /* storage unavailable — fall back to the OS setting */
    }
    setTheme(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('hx-theme', next);
    } catch {
      /* nothing to persist to */
    }
  }

  return (
    <button
      type="button"
      className="hx-theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M20 14.2A8.4 8.4 0 1 1 9.8 4a6.9 6.9 0 0 0 10.2 10.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 90);
      setHidden(y > 320 && y > last && !open);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.dataset.locked = open ? 'true' : '';
    if (!open) delete document.body.dataset.locked;
  }, [open]);

  return (
    <>
      <header
        className={`hx-header${solid ? ' is-solid' : ''}${
          hidden ? ' is-hidden' : ''
        }`}
      >
        <div className="hx-shell hx-header-inner">
          <Link href="/" className="hx-wordmark" data-cursor="Home">
            {SITE.shortName} Arrimalla
            <span>{SITE.role}</span>
          </Link>

          <nav className="hx-nav" aria-label="Sections">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hx-header-right">
            <ThemeToggle />
            <button
              type="button"
              className="hx-menu-btn"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="hx-drawer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
