'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/caseStudiesData';
import { SITE } from '@/lib/site';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the address is visible above */
    }
  }

  return (
    <footer id="contact" className="hx-footer">
      <div className="hx-shell">
        <div className="hx-head">
          <span className="hx-mono hx-mono-accent">[07] Contact</span>
          <span className="hx-mono">{SITE.availability}</span>
        </div>

        <h2 className="hx-footer-type">
          <span className="hx-line">
            <span>Let’s build</span>
          </span>
          <span className="hx-line">
            <span>
              something{' '}
              <a href={`mailto:${SITE.email}`} data-cursor="Email me">
                real
              </a>
            </span>
          </span>
        </h2>

        <div className="hx-actions" style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>
          <a href={`mailto:${SITE.email}`} className="hx-btn hx-btn-fill">
            {SITE.email}
          </a>
          <button type="button" className="hx-btn" onClick={copyEmail}>
            {copied ? 'Copied' : 'Copy address'}
          </button>
          <a href={SITE.resume} download className="hx-btn">
            Résumé
          </a>
        </div>

        <div className="hx-footer-grid">
          <div className="hx-footer-col">
            <span className="hx-mono">Case studies</span>
            {CASE_STUDIES.slice(0, 4).map((cs) => (
              <Link key={cs.slug} href={`/projects/${cs.slug}`}>
                {cs.index} — {cs.title}
              </Link>
            ))}
          </div>

          <div className="hx-footer-col">
            <span className="hx-mono">&nbsp;</span>
            {CASE_STUDIES.slice(4).map((cs) => (
              <Link key={cs.slug} href={`/projects/${cs.slug}`}>
                {cs.index} — {cs.title}
              </Link>
            ))}
          </div>

          <div className="hx-footer-col">
            <span className="hx-mono">Elsewhere</span>
            <a href={SITE.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={SITE.links.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={SITE.resume} download>
              Résumé PDF ↓
            </a>
          </div>

          <div className="hx-footer-col">
            <span className="hx-mono">Direct</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
            <span className="hx-static">{SITE.location}</span>
          </div>
        </div>

        <div className="hx-footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span>Next.js — open source on GitHub</span>
          <a href="#main" className="hx-ghost-btn">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
