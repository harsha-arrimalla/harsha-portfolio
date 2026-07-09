'use client';

import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/projects';

/**
 * Shared previous/next navigation footer for every case study page.
 * Order comes from CASE_STUDIES and wraps around, so both buttons are
 * always present and every page uses the identical dark treatment.
 */
export default function CaseStudyNav({ current }: { current: string }) {
    const idx = CASE_STUDIES.findIndex((p) => p.slug === current);
    if (idx === -1) return null;

    const prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
    const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

    return (
        <section aria-label="Case study navigation" className="bg-black text-white">
            <div className="grid md:grid-cols-2">
                <Link
                    href={prev.href}
                    className="group p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.04] transition-colors"
                >
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                        Previous Project
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2">{prev.title}</h3>
                    <p className="text-sm text-white/50">{prev.tagline}</p>
                </Link>

                <Link
                    href={next.href}
                    className="group p-10 md:p-16 hover:bg-white/[0.04] transition-colors md:text-right"
                >
                    <p className="flex items-center gap-2 md:justify-end text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
                        Next Project
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2">{next.title}</h3>
                    <p className="text-sm text-white/50">{next.tagline}</p>
                </Link>
            </div>

            <div className="border-t border-white/10 py-5 text-center">
                <Link
                    href="/#projects"
                    className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
                >
                    All Projects
                </Link>
            </div>
        </section>
    );
}
