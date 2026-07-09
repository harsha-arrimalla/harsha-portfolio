'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export interface IterationItem {
    src: string;
    label: string;
    verdict: string;
    status?: 'explored' | 'evolved' | 'killed' | 'shipped';
}

const STATUS_STYLES: Record<NonNullable<IterationItem['status']>, string> = {
    explored: 'bg-gray-500/10 text-gray-500 border-gray-500/30',
    evolved: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    killed: 'bg-red-500/10 text-red-500 border-red-500/30',
    shipped: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/40',
};

const STATUS_LABELS: Record<NonNullable<IterationItem['status']>, string> = {
    explored: 'Explored',
    evolved: 'Evolved',
    killed: 'Killed',
    shipped: 'Shipped',
};

/**
 * "Messy middle" presenter — a row of working iterations/directions with an
 * explicit verdict on each (explored / evolved / killed / shipped), so process
 * reads as decisions rather than a gallery of variants.
 */
export default function IterationStrip({
    heading,
    intro,
    items,
    dark = false,
}: {
    heading?: string;
    intro?: string;
    items: IterationItem[];
    dark?: boolean;
}) {
    const [ref, inView] = useInView({ threshold: 0.05 });

    const textMain = dark ? 'text-white' : 'text-black';
    const textMuted = dark ? 'text-white/60' : 'text-gray-500';
    const cardBg = dark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200';

    const cols =
        items.length >= 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3';

    return (
        <div ref={ref as any}>
            {heading && <h4 className={`text-xl md:text-2xl font-bold mb-3 ${textMain}`}>{heading}</h4>}
            {intro && <p className={`text-sm md:text-base leading-relaxed max-w-3xl mb-8 ${textMuted}`}>{intro}</p>}

            <div className={`grid ${cols} gap-6 md:gap-8`}>
                {items.map((item, i) => (
                    <figure
                        key={item.src}
                        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: `${i * 90}ms` }}
                    >
                        <div className="flex items-center justify-between mb-3 h-6">
                            <span className={`text-xs font-bold uppercase tracking-wider ${textMuted}`}>{item.label}</span>
                            {item.status && (
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${STATUS_STYLES[item.status]}`}>
                                    {STATUS_LABELS[item.status]}
                                </span>
                            )}
                        </div>
                        <div className={`relative aspect-[9/19.5] rounded-[20px] overflow-hidden border shadow-sm ${cardBg}`}>
                            <Image
                                src={item.src}
                                alt={`${item.label} — ${item.verdict}`}
                                fill
                                sizes="(max-width: 768px) 45vw, 280px"
                                className="object-cover object-top"
                            />
                        </div>
                        <figcaption className={`mt-3 text-xs md:text-sm leading-relaxed ${textMuted}`}>{item.verdict}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}
