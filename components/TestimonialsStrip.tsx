'use client';

import { useInView } from '@/hooks/useInView';

const QUOTES = [
    {
        quote: 'Harsha designs like an engineer and ships like one too.',
        who: 'Product Manager, Mondee',
    },
    {
        quote: 'Rare designer who prototypes in production code.',
        who: 'Engineering Lead, Mondee',
    },
];

export default function TestimonialsStrip() {
    const [ref, inView] = useInView({ threshold: 0.15 });

    return (
        <section ref={ref as any} className="py-20 md:py-28 px-4 md:px-12 lg:px-24 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <div className="h-[1px] bg-white/30 w-12 md:w-20" />
                    <span className="text-xs tracking-[0.3em] uppercase font-bold text-white/40">From People I Ship With</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {QUOTES.map((q, i) => (
                        <figure
                            key={q.who}
                            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <blockquote className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
                                &ldquo;{q.quote}&rdquo;
                            </blockquote>
                            <figcaption className="text-sm text-white/50">{q.who}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
