import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/caseStudiesData';
import { BUILD, BUILT_END_TO_END } from '@/lib/build';
import {
    ABOUT_BODY,
    CAPABILITIES,
    EXPERIENCE,
    HERO,
    MARQUEE,
    STATEMENT,
} from '@/lib/content';
import { getPlate } from '@/lib/logos';
import type { RepoCard } from '@/lib/openSource';
import { SITE } from '@/lib/site';

/**
 * The canvas portfolio.
 *
 * The page is presented as an open design file: every section is a named
 * frame, the gutter carries its index, and the swarm draws the contents back
 * as you scroll. All of it is ordinary server-rendered markup — the `data-sw`
 * attributes are the only thing the animation needs, and with the animation
 * off they do nothing at all.
 *
 * Annotation rules, so this stays consistent as sections are added:
 *   data-sw="rect"   a surface that gets dragged out with the crosshair
 *   data-sw="text"   copy that gets typed
 *   data-sw="image"  artwork that wipes in top to bottom
 *   data-sw="line"   a rule drawn with the pen
 *   data-sw="chip"   a small token that just gets clicked into place
 *   data-sw-group    repeated siblings: the first is built, the rest are
 *                    ⌥-dragged copies of it, so their children stay plain
 */

function Frame({
    id,
    index,
    label,
    note,
    children,
}: {
    id: string;
    index: string;
    label: string;
    note?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="cv-frame">
            <div className="cv-frame-head">
                <span className="cv-frame-name" data-sw="chip" data-sw-label={label}>
                    <i aria-hidden="true" />
                    {index} — {label}
                </span>
                {note && (
                    <span className="cv-frame-note" data-sw="text">
                        {note}
                    </span>
                )}
            </div>
            <div className="cv-frame-body">{children}</div>
        </section>
    );
}

export default function SwarmHome({ repos }: { repos: RepoCard[] }) {
    const featured = CASE_STUDIES;

    return (
        <main id="main" className="cv">
            {/* ===================================================== COVER */}
            <section id="cover" className="cv-cover">
                <div className="cv-cover-head">
                    <span className="cv-frame-name" data-sw="chip" data-sw-label="Cover">
                        <i aria-hidden="true" />
                        00 — Cover
                    </span>
                    <span className="cv-frame-note" data-sw="text">
                        {SITE.location} · working globally
                    </span>
                </div>

                <h1 className="cv-display">
                    {HERO.lines.map((line, i) => (
                        <span className="cv-display-line" key={i} data-sw="text">
                            {line.map((part, j) => (
                                <span key={j} className={part.style ? `cv-${part.style}` : undefined}>
                                    {part.t}
                                    {j < line.length - 1 ? ' ' : ''}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>

                <div className="cv-cover-grid">
                    <div className="cv-cover-copy">
                        <span className="cv-status" data-sw="chip">
                            <i aria-hidden="true" />
                            Available for work
                        </span>
                        <p className="cv-lead" data-sw="text">
                            {HERO.lead}
                        </p>
                        <div className="cv-actions">
                            <Link href="#work" className="cv-btn cv-btn-fill" data-sw="rect" data-cursor="Scroll">
                                Selected work
                            </Link>
                            <a href={`mailto:${SITE.email}`} className="cv-btn" data-sw="rect">
                                Start a project
                            </a>
                        </div>
                    </div>

                    <div className="cv-cover-plates">
                        {featured.slice(0, 3).map((cs, i) => (
                            <figure className={`cv-plate cv-plate-${i + 1}`} key={cs.slug}>
                                <Image
                                    src={cs.heroImage}
                                    alt={`${cs.title} — product screen`}
                                    width={640}
                                    height={420}
                                    sizes="(max-width: 1200px) 30vw, 320px"
                                    priority={i === 0}
                                    data-sw="image"
                                    data-sw-label={cs.title}
                                />
                                <figcaption data-sw="text">{cs.title}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>

                <div className="cv-rule" data-sw="line" />
            </section>

            {/* =================================================== MARQUEE */}
            <div className="cv-marquee" aria-hidden="true">
                {[0, 1].map((dup) => (
                    <div className="cv-marquee-track" key={dup}>
                        {MARQUEE.map((m) => (
                            <span key={m + dup}>{m}</span>
                        ))}
                    </div>
                ))}
            </div>

            {/* ===================================================== ABOUT */}
            <Frame id="about" index="01" label="About" note="What I actually do">
                <div className="cv-about">
                    <p className="cv-statement" data-sw="text">
                        {STATEMENT}
                    </p>
                    <div className="cv-about-side">
                        <p className="cv-body" data-sw="text">
                            {ABOUT_BODY}
                        </p>
                        <div className="cv-actions">
                            <a href={SITE.resume} download className="cv-btn" data-sw="rect">
                                Résumé
                            </a>
                            <a
                                href={SITE.links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="cv-btn"
                                data-sw="rect"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </div>
            </Frame>

            {/* ============================================== CAPABILITIES */}
            <Frame id="capabilities" index="02" label="Capabilities" note="What I’m hired to do">
                <div className="cv-caps">
                    {CAPABILITIES.map((cap, i) => (
                        <article
                            className="cv-cap"
                            key={cap.num}
                            data-sw="rect"
                            data-sw-group="cap"
                            data-sw-label={`Capability ${cap.num}`}
                        >
                            <span className="cv-cap-num" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {cap.num}
                            </span>
                            <h3 className="cv-cap-title" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {cap.title}
                            </h3>
                            <p className="cv-body" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {cap.description}
                            </p>
                            <div className="cv-tags">
                                {cap.stack.map((s) => (
                                    <span className="cv-tag" key={s}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <span className="cv-evidence" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {cap.evidence}
                            </span>
                        </article>
                    ))}
                </div>
            </Frame>

            {/* ====================================================== WORK */}
            <Frame
                id="work"
                index="03"
                label="Selected work"
                note={`${String(featured.length).padStart(2, '0')} end-to-end case studies`}
            >
                <div className="cv-work">
                    {featured.map((cs, i) => {
                        const plate = getPlate(cs.slug);
                        const first = i === 0;
                        const mark = (kind: string) => (first ? { 'data-sw': kind } : {});
                        return (
                            <article
                                className="cv-case"
                                key={cs.slug}
                                data-sw="rect"
                                data-sw-group="case"
                                data-sw-label={cs.title}
                                style={{ ['--accent' as string]: cs.accent }}
                            >
                                <Link
                                    href={`/projects/${cs.slug}`}
                                    className="cv-case-plate"
                                    data-tone={plate.tone}
                                    style={plate.color ? ({ ['--plate' as string]: plate.color } as React.CSSProperties) : undefined}
                                    data-cursor={`View ${cs.title}`}
                                >
                                    <span className="cv-case-index">{cs.index}</span>
                                    {BUILT_END_TO_END.has(cs.slug) && (
                                        <span className="cv-case-badge">Designed + built</span>
                                    )}
                                    {plate.logo ? (
                                        <Image
                                            className="cv-case-logo"
                                            src={plate.logo.src}
                                            alt={`${cs.title} logo`}
                                            width={900}
                                            height={300}
                                            sizes="(max-width: 900px) 70vw, 32vw"
                                            unoptimized={plate.logo.opaque}
                                            style={plate.logo.cap ? { maxWidth: `${plate.logo.cap}px` } : undefined}
                                            {...mark('image')}
                                        />
                                    ) : (
                                        <span className="cv-case-wordmark" {...mark('text')}>
                                            {cs.title}
                                        </span>
                                    )}
                                </Link>

                                <div className="cv-case-head">
                                    <h3 className="cv-case-title" {...mark('text')}>
                                        <Link href={`/projects/${cs.slug}`}>{cs.title}</Link>
                                    </h3>
                                    <span className="cv-case-year" {...mark('text')}>
                                        {cs.year}
                                    </span>
                                </div>

                                <span className="cv-case-context" {...mark('text')}>
                                    {cs.clientOrContext}
                                </span>

                                <p className="cv-case-tagline" {...mark('text')}>
                                    {cs.tagline}
                                </p>

                                <div className="cv-case-metrics">
                                    {cs.headlineMetrics.slice(0, 3).map((m) => (
                                        <span key={m.label}>
                                            <strong>{m.value}</strong>
                                            {m.label}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`/projects/${cs.slug}`} className="cv-case-cta">
                                    Read the case study →
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </Frame>

            {/* ===================================================== BUILD */}
            <Frame id="build" index="04" label="Built end to end" note="Design → code → shipped">
                <h2 className="cv-h2" data-sw="text">
                    I designed it. Then I <em>built</em> it.
                </h2>

                <div className="cv-build">
                    <div className="cv-build-copy">
                        <span className="cv-kicker" data-sw="text">
                            {BUILD.kicker}
                        </span>
                        <p className="cv-body" data-sw="text">
                            {BUILD.narrative}
                        </p>
                        <div className="cv-tags" data-sw="chip" data-sw-label="Stack">
                            {BUILD.stack.map((t) => (
                                <span className="cv-tag" key={t}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="cv-actions">
                            <Link href={`/projects/${BUILD.slug}`} className="cv-btn cv-btn-fill" data-sw="rect">
                                Read the case study
                            </Link>
                            <a href={BUILD.live} target="_blank" rel="noreferrer" className="cv-btn" data-sw="rect">
                                Live product ↗
                            </a>
                            <a href={BUILD.repo} target="_blank" rel="noreferrer" className="cv-btn" data-sw="rect">
                                Source ↗
                            </a>
                        </div>
                    </div>

                    <div className="cv-build-split">
                        <div className="cv-build-col" data-sw="rect" data-sw-group="buildcol" data-sw-label="Designed">
                            <span className="cv-kicker" data-sw="text">
                                What I designed
                            </span>
                            <ul>
                                {BUILD.design.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="cv-build-col" data-sw="rect" data-sw-group="buildcol" data-sw-label="Engineered">
                            <span className="cv-kicker">What I engineered</span>
                            <ul>
                                {BUILD.engineering.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="cv-counters">
                    {BUILD.counters.map((c, i) => (
                        <div
                            className="cv-counter"
                            key={c.label}
                            data-sw="rect"
                            data-sw-group="counter"
                            data-sw-label={c.label}
                        >
                            <span className="cv-counter-value" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {c.value}
                            </span>
                            <span className="cv-counter-label" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {c.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Frame>

            {/* =============================================== OPEN SOURCE */}
            <Frame id="open-source" index="05" label="Open source" note="Live from the GitHub API">
                <div className="cv-repos">
                    {repos.map((repo, i) => (
                        <a
                            className="cv-repo"
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="Open repo"
                            data-sw="rect"
                            data-sw-group="repo"
                            data-sw-label={repo.name}
                        >
                            <span className="cv-repo-name" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {repo.name}
                            </span>
                            <p className="cv-repo-blurb" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {repo.blurb}
                            </p>
                            <span className="cv-repo-foot">
                                {repo.language && <i>{repo.language}</i>}
                                {repo.stars !== null && <i>{repo.stars} stars</i>}
                                <i>{repo.role}</i>
                            </span>
                        </a>
                    ))}
                </div>
            </Frame>

            {/* ================================================ EXPERIENCE */}
            <Frame id="experience" index="06" label="Experience" note="2019 — present">
                <div className="cv-exp">
                    {EXPERIENCE.map((role, i) => (
                        <div
                            className="cv-exp-row"
                            key={role.company + role.period}
                            data-sw="rect"
                            data-sw-group="exp"
                            data-sw-label={role.company}
                        >
                            <span className="cv-exp-period" {...(i === 0 ? { 'data-sw': 'text' } : {})}>
                                {role.period}
                            </span>
                            <div className="cv-exp-who">
                                <h3 {...(i === 0 ? { 'data-sw': 'text' } : {})}>{role.role}</h3>
                                <span {...(i === 0 ? { 'data-sw': 'text' } : {})}>{role.company}</span>
                            </div>
                            <p {...(i === 0 ? { 'data-sw': 'text' } : {})}>{role.detail}</p>
                        </div>
                    ))}
                </div>
            </Frame>

            {/* =================================================== CONTACT */}
            <footer id="contact" className="cv-frame cv-contact">
                <div className="cv-frame-head">
                    <span className="cv-frame-name" data-sw="chip" data-sw-label="Contact">
                        <i aria-hidden="true" />
                        07 — Contact
                    </span>
                    <span className="cv-frame-note" data-sw="text">
                        {SITE.availability}
                    </span>
                </div>

                <div className="cv-frame-body">
                    <h2 className="cv-display cv-display-sm" data-sw="text">
                        Let’s build something real
                    </h2>

                    <div className="cv-contact-grid">
                        <a className="cv-contact-card" href={`mailto:${SITE.email}`} data-sw="rect" data-sw-label="Email">
                            <span className="cv-kicker" data-sw="text">
                                Email
                            </span>
                            <span className="cv-contact-value">{SITE.email}</span>
                        </a>
                        <a
                            className="cv-contact-card"
                            href={SITE.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            data-sw="rect"
                            data-sw-label="LinkedIn"
                        >
                            <span className="cv-kicker">LinkedIn</span>
                            <span className="cv-contact-value">in/harshavardhan-arrimalla ↗</span>
                        </a>
                        <a
                            className="cv-contact-card"
                            href={SITE.links.github}
                            target="_blank"
                            rel="noreferrer"
                            data-sw="rect"
                            data-sw-label="GitHub"
                        >
                            <span className="cv-kicker">GitHub</span>
                            <span className="cv-contact-value">@{SITE.github} ↗</span>
                        </a>
                    </div>

                    <div className="cv-rule" data-sw="line" />

                    <div className="cv-colophon">
                        <span>
                            © {new Date().getFullYear()} {SITE.name}
                        </span>
                        <span>
                            Built in Next.js. The build-it-back animation is an original implementation,
                            inspired by{' '}
                            <a href="https://califa.github.io/swarm-site/" target="_blank" rel="noreferrer">
                                Swarm
                            </a>{' '}
                            by Joel Califa and{' '}
                            <a href="https://github.com/DhvanilPatel/swarm-cursors" target="_blank" rel="noreferrer">
                                Swarm Rebuild
                            </a>{' '}
                            by Dhvanil Patel.
                        </span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
