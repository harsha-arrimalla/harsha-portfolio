'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [{ href: '/#work', label: 'Work' }, { href: '/#about', label: 'Profile' }, { href: '/#contact', label: 'Contact' }];
const resumeHref = '/Harshavardhan-Arrimalla-Product-Designer-Resume.pdf';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="folio-nav">
      <Link href="/" className="folio-wordmark" aria-label="Harsha Arrimalla home">HA<span>®</span></Link>
      <div className="folio-nav-links">{links.map((link, index) => <Link key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}</Link>)}<a href={resumeHref} download><span>04</span>Résumé ↓</a></div>
      <button className="folio-menu" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen}><i /><i /></button>
      {isOpen && <nav className="folio-mobile-menu">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>)}<a href={resumeHref} download onClick={() => setIsOpen(false)}>Download résumé ↓</a></nav>}
    </header>
  );
}
