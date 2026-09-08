'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const links = [{ href: '/#work', label: 'Work' }, { href: '/#about', label: 'Profile' }, { href: '/#contact', label: 'Contact' }];
const resumeHref = '/Harshavardhan-Arrimalla-Product-Designer-Resume.pdf';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setIsOpen(false); toggle.current?.focus(); } };
    const onPointer = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setIsOpen(false); };
    const onResize = () => { if (window.innerWidth > 800) setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onResize);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onPointer); window.removeEventListener('resize', onResize); };
  }, [isOpen]);
  return <header ref={header} className="folio-nav">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Link href="/" className="folio-wordmark" aria-label="Harsha Arrimalla home">HA</Link>
    <nav className="folio-nav-links" aria-label="Main navigation">{links.map((link, index) => <Link key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}</Link>)}<a href={resumeHref} download><span>04</span>Résumé ↓</a></nav>
    <button ref={toggle} className="folio-menu" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-navigation"><i /><i /></button>
    {isOpen && <nav id="mobile-navigation" className="folio-mobile-menu" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>)}<a href={resumeHref} download onClick={() => setIsOpen(false)}>Download résumé ↓</a></nav>}
  </header>;
}
