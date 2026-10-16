'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import ProjectLogo from './ProjectLogo';
import {
  CASE_STUDIES,
  getAdjacentCaseStudies,
  type CaseStudyData,
} from '@/lib/caseStudiesData';

function Plate({
  num,
  label,
  children,
  id,
  sunk,
}: {
  num: string;
  label: string;
  children: React.ReactNode;
  id: string;
  sunk?: boolean;
}) {
  return (
    <section id={id} className={`hx-band${sunk ? ' hx-band-sunk' : ''}`}>
      <div className="hx-shell">
        <div className="hx-head">
          <span className="hx-mono hx-mono-accent">
            [{num}] {label}
          </span>
          <span className="hx-mono">{id}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  const [step, setStep] = useState(0);
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);
  const { prev, next } = getAdjacentCaseStudies(data.slug);
  const current = data.flowSteps[step] ?? data.flowSteps[0];

  const closeZoom = useCallback(() => setZoom(null), []);

  useEffect(() => {
    if (!zoom) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeZoom();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom, closeZoom]);

  return (
    <main
      id="main"
      className="hx-case"
      style={{ ['--accent' as string]: data.accent }}
    >
      {/* ---------- HERO ---------- */}
      <section className="hx-shell hx-case-hero">
        <div className="hx-case-topbar">
          <Link href="/#work" className="hx-link">
            ← All case studies
          </Link>
          <span className="hx-case-counter">
            <strong>{data.index}</strong> / {String(CASE_STUDIES.length).padStart(2, '0')}
          </span>
        </div>

        <div className="hx-case-head">
          <div>
            <div className="hx-case-brand">
              <ProjectLogo slug={data.slug} title={data.title} />
            </div>
            <div className="hx-case-eyebrow">
              <span className="hx-mono">{data.clientOrContext}</span>
              <span className="hx-mono">{data.year}</span>
            </div>
            <h1 className="hx-display hx-case-h1">{data.title}</h1>
          </div>

          <div>
            <p className="hx-case-thesis">{data.thesis}</p>
            <p className="hx-case-tagline">{data.tagline}</p>
            <div className="hx-case-tags">
              {data.tags.map((t) => (
                <span key={t} className="hx-tag">
                  {t}
                </span>
              ))}
            </div>
            {data.downloadPdf && (
              <div className="hx-actions" style={{ marginTop: '22px' }}>
                <a
                  className="hx-btn hx-btn-ghost"
                  href={data.downloadPdf.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.downloadPdf.label}
                </a>
              </div>
            )}
          </div>
        </div>

        <dl className="hx-facts">
          <div className="hx-fact">
            <dt>Role</dt>
            <dd>{data.facts.role}</dd>
          </div>
          <div className="hx-fact">
            <dt>Scope</dt>
            <dd>{data.facts.scope}</dd>
          </div>
          <div className="hx-fact">
            <dt>Timeline</dt>
            <dd>{data.facts.timeline}</dd>
          </div>
          <div className="hx-fact">
            <dt>Team</dt>
            <dd>{data.facts.team}</dd>
          </div>
        </dl>

        <button
          type="button"
          className="hx-frame hx-frame-wide hx-case-hero-frame"
          onClick={() =>
            setZoom({ src: data.heroImage, label: `${data.title} — primary view` })
          }
          aria-label={`Enlarge ${data.title} primary view`}
          style={{ padding: 0, cursor: 'zoom-in' }}
        >
          <Image
            src={data.heroImage}
            alt={`${data.title} — primary system view`}
            fill
            priority
            sizes="(max-width: 1080px) 94vw, 76vw"
           
          />
        </button>

        <div className="hx-kpis">
          {data.headlineMetrics.map((m) => (
            <div key={m.label} className="hx-kpi">
              <span className="hx-kpi-value">{m.value}</span>
              <span className="hx-kpi-label">{m.label}</span>
              <p className="hx-kpi-detail">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 01 CONTEXT ---------- */}
      <Plate id="context" num="01" label="Context">
        <h2 className="hx-display hx-h2">{data.context.headline}</h2>
        <p className="hx-lead" style={{ maxWidth: '58ch', marginTop: '20px' }}>
          {data.summary}
        </p>
        <p className="hx-body" style={{ marginTop: '16px' }}>
          {data.context.narrative}
        </p>

        {data.confidentialityNote && (
          <p className="hx-note">
            <strong>Note — </strong>
            {data.confidentialityNote}
          </p>
        )}

        <div className="hx-compare">
          <div className="hx-compare-col">
            <span className="hx-mono">Before — friction</span>
            <h3 className="hx-h3">{data.context.beforeState.title}</h3>
            <ul>
              {data.context.beforeState.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="hx-compare-col">
            <span className="hx-mono">After — reframe</span>
            <h3 className="hx-h3">{data.context.reframedState.title}</h3>
            <ul>
              {data.context.reframedState.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hx-success">
          <div>
            <span className="hx-mono">Objective</span>
            <p>{data.context.successModel.objective}</p>
          </div>
          <div>
            <span className="hx-mono">User outcome</span>
            <p>{data.context.successModel.userOutcome}</p>
          </div>
          <div>
            <span className="hx-mono">Guardrail</span>
            <p>{data.context.successModel.guardrail}</p>
          </div>
        </div>
      </Plate>

      {/* ---------- 02 DISCOVERY ---------- */}
      <Plate id="discovery" num="02" label="Discovery" sunk>
        <h2 className="hx-display hx-h2">{data.discovery.headline}</h2>
        <p className="hx-body" style={{ marginTop: '18px' }}>
          {data.discovery.intro}
        </p>

        <div className="hx-discovery">
          {data.discovery.metrics.map((m) => (
            <div key={m.label} className="hx-discovery-cell">
              <span className="hx-discovery-num">{m.number}</span>
              <span className="hx-mono">{m.label}</span>
              <p className="hx-kpi-detail">{m.detail}</p>
            </div>
          ))}
        </div>

        <div className="hx-insight">
          <span className="hx-mono">Core insight</span>
          <p>{data.discovery.keyInsight}</p>
        </div>
      </Plate>

      {/* ---------- 03 ARCHITECTURE ---------- */}
      <Plate id="architecture" num="03" label="Architecture">
        <h2 className="hx-display hx-h2">{data.architecture.headline}</h2>
        <p className="hx-body" style={{ marginTop: '18px' }}>
          {data.architecture.description}
        </p>

        <div className="hx-arch">
          <div className="hx-arch-node">
            <span className="hx-mono">Entry</span>
            <strong>{data.architecture.entryNode.title}</strong>
            <p>{data.architecture.entryNode.subtitle}</p>
          </div>

          <div className="hx-arch-lanes">
            {data.architecture.lanes.map((lane) => (
              <div key={lane.lane} className="hx-arch-lane">
                <span className="hx-mono">{lane.lane}</span>
                <h4>{lane.subtitle}</h4>
                <div className="hx-arch-items">
                  {lane.nodes.map((n) => (
                    <div key={n.title} className="hx-arch-item">
                      {n.badge && <span className="hx-arch-badge">{n.badge}</span>}
                      <strong>{n.title}</strong>
                      <span>{n.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hx-arch-node">
            <span className="hx-mono">Output</span>
            <strong>{data.architecture.outputNode.title}</strong>
            <p>{data.architecture.outputNode.subtitle}</p>
          </div>

          <div className="hx-arch-flow">
            {data.architecture.systemFlow.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
      </Plate>

      {/* ---------- 04 WALKTHROUGH ---------- */}
      <Plate id="walkthrough" num="04" label="Walkthrough" sunk>
        <h2 className="hx-display hx-h2">
          {data.flowSteps.length} screens, in the order a user meets them.
        </h2>

        <div className="hx-walk">
          <div className="hx-steps" role="tablist" aria-label="Walkthrough steps">
            {data.flowSteps.map((s, i) => (
              <button
                key={s.step}
                type="button"
                role="tab"
                aria-selected={i === step}
                className="hx-step"
                onClick={() => setStep(i)}
              >
                <span className="hx-step-num">{s.step}</span>
                <span>
                  <span className="hx-step-title">{s.title}</span>
                  <span className="hx-step-phase">{s.phase}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="hx-walk-stage">
            <button
              type="button"
              className="hx-frame hx-frame-wide"
              onClick={() => setZoom({ src: current.image, label: current.title })}
              aria-label={`Enlarge ${current.title}`}
              style={{ padding: 0, cursor: 'zoom-in' }}
            >
              <Image
                key={current.image}
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1080px) 94vw, 50vw"
               
              />
            </button>

            <div className="hx-walk-copy">
              <span className="hx-mono">
                {current.step} — {current.phase}
              </span>
              <h3 className="hx-h3">{current.title}</h3>
              <p>{current.caption}</p>
              <p className="hx-annotation">{current.annotation}</p>
            </div>
          </div>
        </div>
      </Plate>

      {/* ---------- 05 DECISIONS ---------- */}
      <Plate id="decisions" num="05" label="Decisions">
        <h2 className="hx-display hx-h2">
          The arguments, and what each one cost.
        </h2>

        <div className="hx-decisions">
          {data.decisions.map((d) => (
            <article key={d.number} className="hx-decision">
              <div>
                <div className="hx-decision-head">
                  <span className="hx-decision-num">{d.number}</span>
                  <span className="hx-tag">{d.tag}</span>
                </div>
                <h3 className="hx-h3">{d.title}</h3>

                <dl className="hx-decision-grid">
                  <div className="hx-decision-line">
                    <dt>Evidence</dt>
                    <dd>{d.evidence}</dd>
                  </div>
                  <div className="hx-decision-line">
                    <dt>Decision</dt>
                    <dd>{d.decision}</dd>
                  </div>
                  <div className="hx-decision-line">
                    <dt>Trade-off</dt>
                    <dd>{d.tradeoff}</dd>
                  </div>
                  <div className="hx-decision-line is-impact">
                    <dt>Impact</dt>
                    <dd>{d.impact}</dd>
                  </div>
                </dl>
              </div>

              <div className="hx-decision-visual">
                <button
                  type="button"
                  className="hx-frame hx-frame-wide"
                  onClick={() => setZoom({ src: d.image, label: d.title })}
                  aria-label={`Enlarge ${d.alt}`}
                  style={{ padding: 0, cursor: 'zoom-in' }}
                >
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 1080px) 94vw, 36vw"
                   
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Plate>

      {/* ---------- 06 EXPLORATIONS ---------- */}
      {data.explorations && (
        <Plate id="explorations" num="06" label="Explorations" sunk>
          <h2 className="hx-display hx-h2">{data.explorations.headline}</h2>
          <p className="hx-body" style={{ marginTop: '18px' }}>
            {data.explorations.subtitle}
          </p>

          <div className="hx-explorations">
            {data.explorations.items.map((item) => (
              <article key={item.version} className="hx-exploration">
                <div className="hx-exploration-top">
                  <span className="hx-mono">{item.version}</span>
                  <span className="hx-status" data-status={item.status}>
                    {item.status}
                  </span>
                </div>
                <button
                  type="button"
                  className="hx-frame"
                  onClick={() => setZoom({ src: item.image, label: item.label })}
                  aria-label={`Enlarge ${item.label}`}
                  style={{ padding: 0, cursor: 'zoom-in' }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 1080px) 90vw, 28vw"
                   
                  />
                </button>
                <h3 className="hx-h3">{item.label}</h3>
                <p>{item.summary}</p>
                <p className="hx-exploration-why">{item.whyItMatters}</p>
              </article>
            ))}
          </div>
        </Plate>
      )}

      {/* ---------- VALIDATION ---------- */}
      <Plate
        id="validation"
        num={data.explorations ? '07' : '06'}
        label="Validation"
        sunk={!data.explorations}
      >
        <h2 className="hx-display hx-h2">{data.validation.headline}</h2>
        <div className="hx-validation">
          {data.validation.steps.map((s) => (
            <div key={s.number} className="hx-validation-step">
              <span className="hx-mono">{s.number}</span>
              <h3 className="hx-h3">{s.title}</h3>
              <p>{s.detail}</p>
            </div>
          ))}
        </div>
      </Plate>

      {/* ---------- OUTCOMES ---------- */}
      <Plate
        id="outcomes"
        num={data.explorations ? '08' : '07'}
        label="Outcomes"
        sunk={!!data.explorations}
      >
        <h2 className="hx-display hx-h2">{data.outcomes.headline}</h2>
        <p className="hx-body" style={{ marginTop: '18px' }}>
          {data.outcomes.caption}
        </p>
        <div className="hx-outcomes">
          {data.outcomes.cards.map((c) => (
            <div key={c.title} className="hx-outcome">
              <span className="hx-outcome-metric">{c.metric}</span>
              <h3 className="hx-h3">{c.title}</h3>
              <p>{c.detail}</p>
            </div>
          ))}
        </div>
      </Plate>

      {/* ---------- REFLECTION ---------- */}
      <Plate
        id="reflection"
        num={data.explorations ? '09' : '08'}
        label="Reflection"
      >
        <div className="hx-reflection">
          <blockquote className="hx-quote">“{data.reflection.quote}”</blockquote>
          <p className="hx-body">{data.reflection.takeaway}</p>
        </div>
      </Plate>

      {/* ---------- PAGER ---------- */}
      <nav className="hx-pager" aria-label="Case study navigation">
        <Link href={`/projects/${prev.slug}`}>
          <span className="hx-mono">← Previous — {prev.index}</span>
          <span className="hx-pager-title">{prev.title}</span>
          <span className="hx-mono">{prev.clientOrContext}</span>
        </Link>
        <Link href={`/projects/${next.slug}`}>
          <span className="hx-mono">Next — {next.index} →</span>
          <span className="hx-pager-title">{next.title}</span>
          <span className="hx-mono">{next.clientOrContext}</span>
        </Link>
      </nav>

      <Footer />

      {zoom && (
        <div
          className="hx-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoom.label}
        >
          <div className="hx-lightbox-bar">
            <span className="hx-mono">{zoom.label}</span>
            <button type="button" className="hx-btn" onClick={closeZoom}>
              Close (Esc)
            </button>
          </div>
          <div className="hx-lightbox-stage">
            <Image src={zoom.src} alt={zoom.label} fill sizes="96vw" />
          </div>
        </div>
      )}
    </main>
  );
}
