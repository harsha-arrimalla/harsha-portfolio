'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';
import { getPlate } from '@/lib/logos';
import { BUILD, BUILT_END_TO_END } from '@/lib/build';
import { CASE_STUDIES } from '@/lib/caseStudiesData';
import type { RepoCard } from '@/lib/openSource';
import { SITE } from '@/lib/site';

const MARQUEE = [
  'Agentic AI',
  'Design systems',
  '0 → 1 product',
  'Enterprise UX',
  'Fintech',
  'Healthcare',
  'Prototyping in code',
];

const CAPABILITIES = [
  {
    num: '01',
    title: 'Agentic & conversational AI',
    description:
      'AI interfaces built for complete decision clarity and human control—pairing natural conversation with price benchmarks, inline policy rationale, and explicit recovery states.',
    evidence: 'Miraee — shipped to 6 corporate clients',
    stack: ['Agent UX', 'Decision clarity', 'Recovery states'],
  },
  {
    num: '02',
    title: 'Marketplaces & discovery',
    description:
      'Marketplace architecture designed around both supply creators and everyday consumers, turning unstructured brochures and moods into bookable itineraries.',
    evidence: 'Aarna — 3× monthly published listings',
    stack: ['Supply tooling', 'Discovery', 'Trust'],
  },
  {
    num: '03',
    title: 'Enterprise & fintech density',
    description:
      'Motion and hierarchy have a purpose. I design risk-proportional interfaces that guide users, protect irreversible actions, and make dense B2B or Web3 workflows effortless to scan.',
    evidence: 'Equora & Mondee — self-custody and B2B ops',
    stack: ['Design systems', 'Risk-proportional UX', 'Data density'],
  },
  {
    num: '04',
    title: 'Shipping it, not just speccing it',
    description:
      'Static design tools stop where the hard part starts. On my own products I write the production code too — web and native clients, the backend behind them, and the agent runtime that makes them work.',
    evidence: 'Hita — designed and engineered solo, MVP in ~6 days',
    stack: ['Next.js', 'React Native', 'Fastify', 'Claude API'],
  },
];

const EXPERIENCE = [
  {
    period: 'Jul 2023 — Present',
    role: 'Senior Product Designer',
    company: 'Mondee',
    detail:
      'Sole designer across Aarna AI and Miraee. Rebuilt a dense multi-step supplier flow as a conversation-first experience — listing volume tripled, drop-off fell 40%, and the product scaled past 10K active users. Own the design system behind both: tokens, component library and interaction patterns across 50+ screens and two platforms.',
  },
  {
    period: '2026 · Self-initiated',
    role: 'Designer & Builder — Hita',
    company: 'Independent',
    detail:
      'Sole designer on a live consumer AI product, then implemented and shipped it myself in Next.js, React Native, Supabase and the Claude API. Evidence I can take an ambiguous problem all the way to deployed, validated software.',
  },
  {
    period: 'Nov 2022 — Jul 2023',
    role: 'UI/UX Designer',
    company: 'Virtusa',
    detail:
      'Owned 3–4 end-to-end regulated banking workflows — requirements through wireframes, high-fidelity UI, prototypes and annotated specs for an offshore engineering team, where accuracy, hierarchy and error prevention were critical.',
  },
  {
    period: 'Feb 2022 — Nov 2022',
    role: 'UI Designer',
    company: 'GlobalLogic',
    detail:
      'Delivered 30+ UI screens and interactive prototypes for an enterprise product across 6+ Agile sprints, contributing reusable patterns back to the shared design library.',
  },
  {
    period: 'Jan 2019 — Dec 2021',
    role: 'Graphic & Motion Designer',
    company: 'Prime Pixel',
    detail:
      'Motion graphics and visual design in After Effects, Illustrator and Blender — the typography, hierarchy and visual-communication foundation behind the interface work that followed.',
  },
];

const STATEMENT =
  'I design the decision, not just the screen. States, failure paths and the rules behind them come first — then the surface that makes all of it obvious.';

function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span className="w" key={`${w}-${i}`}>
          {w}
          {' '}
        </span>
      ))}
    </>
  );
}

export default function HomePage({ repos }: { repos: RepoCard[] }) {
  const root = useRef<HTMLElement>(null);
  const reel = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduced) return;

      /* ---- hero ---- */
      const intro = gsap.timeline({ paused: true });
      intro
        .from('.hx-hero-type .hx-line > span', {
          yPercent: 115,
          duration: 1.15,
          ease: 'expo.out',
          stagger: 0.09,
        })
        .from(
          '.hx-float',
          { opacity: 0, scale: 0.92, duration: 1, ease: 'expo.out', stagger: 0.1 },
          '-=0.85'
        )
        .from(
          '.hx-hero-bottom > *',
          { y: 26, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
          '-=0.7'
        );

      const hasIntro = (() => {
        try {
          return sessionStorage.getItem('hx-intro') !== 'done';
        } catch {
          return true;
        }
      })();

      if (hasIntro) {
        window.addEventListener('hx:intro-done', () => intro.play(), { once: true });
        // Safety net: never leave the hero waiting on an event that didn't fire.
        gsap.delayedCall(3.4, () => intro.play());
      } else {
        intro.play();
      }

      /* ---- hero media: scroll parallax + pointer drift ---- */
      gsap.utils.toArray<HTMLElement>('.hx-float').forEach((el, i) => {
        gsap.to(el, {
          yPercent: -18 - i * 12,
          ease: 'none',
          scrollTrigger: { trigger: '.hx-hero', start: 'top top', end: 'bottom top', scrub: true },
        });
      });

      const driftX = gsap.utils.toArray<HTMLElement>('.hx-float').map((el) =>
        gsap.quickTo(el, 'x', { duration: 1.1, ease: 'power3' })
      );
      const driftY = gsap.utils.toArray<HTMLElement>('.hx-float').map((el) =>
        gsap.quickTo(el, 'y', { duration: 1.1, ease: 'power3' })
      );
      const onPointer = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        driftX.forEach((fn, i) => fn(nx * (24 + i * 14)));
        driftY.forEach((fn, i) => fn(ny * (18 + i * 10)));
      };
      window.addEventListener('pointermove', onPointer, { passive: true });

      /* ---- section headings: masked reveal ---- */
      gsap.utils.toArray<HTMLElement>('[data-reveal] .hx-line > span').forEach((el) => {
        gsap.from(el, {
          yPercent: 112,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      /* ---- statement: words light up on scrub ---- */
      gsap.to('.hx-statement .w', {
        opacity: 1,
        ease: 'none',
        stagger: 0.4,
        scrollTrigger: {
          trigger: '.hx-statement',
          start: 'top 78%',
          end: 'bottom 55%',
          scrub: true,
        },
      });

      /* ---- rows ---- */
      gsap.utils.toArray<HTMLElement>('.hx-cap, .hx-exp-row, .hx-repo').forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      /* ---- work reel: pinned horizontal scroll ---- */
      const reelEl = reel.current;
      const trackEl = track.current;
      const canPin =
        reelEl && trackEl && window.innerWidth > 900 && window.matchMedia('(pointer: fine)').matches;

      if (canPin) {
        const distance = () => trackEl.scrollWidth - window.innerWidth;
        gsap.to(trackEl, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: reelEl,
            start: 'top top',
            end: () => '+=' + distance(),
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (bar.current) {
                bar.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

      } else {
        reelEl?.classList.add('is-native');
      }

      return () => window.removeEventListener('pointermove', onPointer);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main id="main" ref={root}>
      {/* ================= HERO ================= */}
      <section className="hx-hero hx-shell">
        <div className="hx-hero-media">
          <div className="hx-float hx-float-1">
            <Image src={CASE_STUDIES[0].heroImage} alt="" fill sizes="270px" priority />
          </div>
          <div className="hx-float hx-float-2">
            <Image src={CASE_STUDIES[1].heroImage} alt="" fill sizes="210px" />
          </div>
          <div className="hx-float hx-float-3">
            <Image src={CASE_STUDIES[2].heroImage} alt="" fill sizes="190px" />
          </div>
        </div>

        <h1 className="hx-display hx-hero-type">
          <span className="hx-line">
            <span>
              Design <span className="hx-outline">systems</span>
            </span>
          </span>
          <span className="hx-line">
            <span>
              that <span className="hx-accent">decide</span>
            </span>
          </span>
          <span className="hx-line">
            <span>with people</span>
          </span>
        </h1>

        <div className="hx-hero-bottom">
          <div className="hx-hero-intro">
            <span className="hx-status">
              <i className="hx-dot" aria-hidden="true" /> Available for work — {SITE.location}
            </span>
            <p className="hx-lead">
              I’m Harsha. I design AI, enterprise and fintech products — and
              for my own, I build and ship the whole thing: web, native and
              the agent runtime behind it.
            </p>
            <div className="hx-actions">
              <Link href="#work" className="hx-btn hx-btn-fill" data-cursor="Scroll">
                Selected work
              </Link>
              <a href={`mailto:${SITE.email}`} className="hx-btn">
                Start a project
              </a>
            </div>
          </div>

          <div className="hx-scroll-cue">
            <i aria-hidden="true" />
            Scroll
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="hx-marquee" aria-hidden="true">
        {[0, 1].map((dup) => (
          <div className="hx-marquee-track" key={dup}>
            {MARQUEE.map((m) => (
              <span key={m + dup}>{m}</span>
            ))}
          </div>
        ))}
      </div>

      {/* ================= ABOUT ================= */}
      <section id="about" className="hx-band hx-shell" data-reveal>
        <div className="hx-head">
          <span className="hx-mono hx-mono-accent">[01] About</span>
          <span className="hx-mono">Hyderabad — working globally</span>
        </div>

        <div className="hx-about-grid">
          <p className="hx-statement">
            <Words text={STATEMENT} />
          </p>

          <div className="hx-about-side">
            <p className="hx-body">
              Four years designing products that ship: an enterprise AI platform
              at Mondee, a two-sided marketplace, a 12-agent consumer product
              built solo. Nothing here is a template — each system is built from
              the ground up, and I prototype in production code whenever a static
              mock would hide the thing that actually matters.
            </p>
            <div className="hx-actions">
              <a href={SITE.resume} download className="hx-btn">
                Résumé
              </a>
              <a href={SITE.links.linkedin} target="_blank" rel="noreferrer" className="hx-btn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section id="capabilities" className="hx-band hx-band-sunk" data-reveal>
        <div className="hx-shell">
          <div className="hx-head">
            <span className="hx-mono hx-mono-accent">[02] Capabilities</span>
            <span className="hx-mono">What I’m hired to do</span>
          </div>

          <div className="hx-caps">
            {CAPABILITIES.map((cap) => (
              <article className="hx-cap" key={cap.num}>
                <span className="hx-cap-num">{cap.num}</span>
                <h3 className="hx-cap-title">{cap.title}</h3>
                <div className="hx-cap-right">
                  <p className="hx-body">{cap.description}</p>
                  <div className="hx-cap-stack">
                    {cap.stack.map((s) => (
                      <span className="hx-tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="hx-mono">{cap.evidence}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK REEL ================= */}
      <section id="work" className="hx-reel" ref={reel}>
        <div className="hx-reel-head hx-shell">
          <span className="hx-mono hx-mono-accent">[03] Selected work</span>
          <span className="hx-mono">
            {String(CASE_STUDIES.length).padStart(2, '0')} case studies — drag or scroll
          </span>
        </div>

        <div className="hx-reel-viewport">
          <div className="hx-reel-track" ref={track}>
            {CASE_STUDIES.map((cs) => {
              const plate = getPlate(cs.slug);
              return (
              <article className="hx-panel" key={cs.slug}>
                <Link
                  href={`/projects/${cs.slug}`}
                  className="hx-panel-media"
                  data-tone={plate.tone}
                  style={
                    plate.color
                      ? ({ ['--plate' as string]: plate.color } as React.CSSProperties)
                      : undefined
                  }
                  data-cursor={`View ${cs.title}`}
                >
                  <span className="hx-panel-index">{cs.index}</span>
                  {BUILT_END_TO_END.has(cs.slug) && (
                    <span className="hx-panel-badge">Designed + built</span>
                  )}
                  {plate.logo ? (
                    <Image
                      className="hx-panel-logo"
                      src={plate.logo.src}
                      alt={`${cs.title} logo`}
                      width={900}
                      height={300}
                      sizes="(max-width: 900px) 70vw, 40vw"
                      // Files with a baked-in background are served
                      // untouched so re-encoding can't shift the colour
                      // away from the plate behind them.
                      unoptimized={plate.logo.opaque}
                      style={
                        plate.logo.cap ? { maxWidth: `${plate.logo.cap}px` } : undefined
                      }
                    />
                  ) : (
                    <span className="hx-panel-wordmark">{cs.title}</span>
                  )}
                </Link>

                <div>
                  <h3 className="hx-panel-title">
                    <Link href={`/projects/${cs.slug}`}>{cs.title}</Link>
                  </h3>
                  <div className="hx-panel-meta">
                    <span className="hx-mono">{cs.clientOrContext}</span>
                    <span className="hx-mono hx-num">{cs.year}</span>
                  </div>
                </div>

                <p className="hx-panel-tagline">{cs.tagline}</p>

                <div className="hx-panel-stats">
                  {cs.headlineMetrics.slice(0, 3).map((m) => (
                    <span key={m.label}>
                      <strong>{m.value}</strong> {m.label}
                    </span>
                  ))}
                </div>
              </article>
              );
            })}
          </div>
        </div>

        <div className="hx-reel-progress" aria-hidden="true">
          <i ref={bar} />
        </div>
      </section>

      {/* ================= BUILD ================= */}
      <section id="build" className="hx-band hx-shell" data-reveal>
        <div className="hx-head">
          <span className="hx-mono hx-mono-accent">[04] Built end to end</span>
          <span className="hx-mono">Design → code → shipped</span>
        </div>

        <h2 className="hx-h2">
          <span className="hx-line">
            <span>I designed it.</span>
          </span>
          <span className="hx-line">
            <span>
              Then I <span className="hx-accent-text">built</span> it.
            </span>
          </span>
        </h2>

        <div className="hx-build">
          <div className="hx-build-copy">
            <span className="hx-mono">{BUILD.kicker}</span>
            <p className="hx-body">{BUILD.narrative}</p>

            <div className="hx-build-stack">
              {BUILD.stack.map((t) => (
                <span className="hx-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="hx-actions">
              <Link href={`/projects/${BUILD.slug}`} className="hx-btn hx-btn-fill">
                Read the case study
              </Link>
              <a href={BUILD.live} target="_blank" rel="noreferrer" className="hx-btn">
                Live product ↗
              </a>
              <a href={BUILD.repo} target="_blank" rel="noreferrer" className="hx-btn">
                Source ↗
              </a>
            </div>
          </div>

          <div className="hx-build-split">
            <div className="hx-build-col">
              <span className="hx-mono hx-mono-accent">What I designed</span>
              <ul>
                {BUILD.design.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="hx-build-col">
              <span className="hx-mono hx-mono-accent">What I engineered</span>
              <ul>
                {BUILD.engineering.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hx-build-counters">
          {BUILD.counters.map((c) => (
            <div className="hx-build-counter" key={c.label}>
              <span className="hx-build-value hx-num">{c.value}</span>
              <span className="hx-mono">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPEN SOURCE ================= */}
      <section id="open-source" className="hx-band hx-shell" data-reveal>
        <div className="hx-head">
          <span className="hx-mono hx-mono-accent">[05] Open source</span>
          <span className="hx-mono">Live from the GitHub API</span>
        </div>

        <h2 className="hx-h2" style={{ marginBottom: 'clamp(28px, 4vw, 48px)' }}>
          <span className="hx-line">
            <span>Things I’ve put in public</span>
          </span>
        </h2>

        <div className="hx-repos">
          {repos.map((repo) => (
            <a
              className="hx-repo"
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="Open repo"
            >
              <div className="hx-repo-top">
                <span className="hx-repo-name">{repo.name}</span>
                <span className="hx-mono">{repo.role}</span>
              </div>
              <p className="hx-repo-desc">{repo.blurb}</p>
              <div className="hx-repo-foot">
                {repo.language && (
                  <span>
                    <i className="hx-lang-dot" aria-hidden="true" />
                    {repo.language}
                  </span>
                )}
                {repo.stars !== null && <span className="hx-num">{repo.stars} stars</span>}
                {repo.homepage && <span>Live site ↗</span>}
              </div>
            </a>
          ))}
        </div>

        <div className="hx-actions" style={{ marginTop: '28px' }}>
          <a className="hx-btn" href={SITE.links.github} target="_blank" rel="noreferrer">
            All repositories ↗
          </a>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="hx-band hx-band-sunk" data-reveal>
        <div className="hx-shell">
          <div className="hx-head">
            <span className="hx-mono hx-mono-accent">[06] Experience</span>
            <span className="hx-mono">2019 — present</span>
          </div>

          <div className="hx-exp">
            {EXPERIENCE.map((exp) => (
              <div className="hx-exp-row" key={exp.company + exp.period}>
                <span className="hx-exp-period">{exp.period}</span>
                <div>
                  <h3 className="hx-exp-role">{exp.role}</h3>
                  <span className="hx-exp-company">{exp.company}</span>
                </div>
                <p>{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
