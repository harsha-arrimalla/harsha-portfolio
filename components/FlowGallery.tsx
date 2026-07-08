'use client';

import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export interface FlowStep {
    src: string;
    title: string;
    desc: string;
    phase?: string;
    /** Natural pixel size — required for the desktop variant */
    w?: number;
    h?: number;
}

interface FlowGalleryProps {
    eyebrow?: string;
    title: string;
    description?: string;
    steps: FlowStep[];
    /** 'mobile' renders a horizontal phone-frame strip, 'desktop' a stacked full-width gallery */
    variant?: 'mobile' | 'desktop';
    /** Accent color hex, used for step numbers and phase chips */
    accent?: string;
    dark?: boolean;
    className?: string;
}

export default function FlowGallery({
    eyebrow = 'Complete End-to-End Flow',
    title,
    description,
    steps,
    variant = 'mobile',
    accent = '#4338CA',
    dark = false,
    className = '',
}: FlowGalleryProps) {
    const [ref, inView] = useInView({ threshold: 0.05 });
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState({ left: false, right: true });

    const updateScrollState = useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        setCanScroll({
            left: el.scrollLeft > 8,
            right: el.scrollLeft < el.scrollWidth - el.clientWidth - 8,
        });
    }, []);

    useEffect(() => {
        updateScrollState();
        window.addEventListener('resize', updateScrollState);
        return () => window.removeEventListener('resize', updateScrollState);
    }, [updateScrollState]);

    const scrollBy = (dir: 1 | -1) => {
        scrollerRef.current?.scrollBy({ left: dir * 640, behavior: 'smooth' });
    };

    const textMain = dark ? 'text-white' : 'text-black';
    const textMuted = dark ? 'text-white/60' : 'text-gray-500';
    const cardBg = dark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200';

    return (
        <div ref={ref as any} className={className}>
            {/* Header */}
            <div className={`max-w-3xl mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>
                    {eyebrow}
                </span>
                <h3 className={`text-3xl md:text-5xl font-bold mb-4 ${textMain}`}>{title}</h3>
                {description && <p className={`text-lg leading-relaxed ${textMuted}`}>{description}</p>}
            </div>

            {variant === 'mobile' ? (
                <div className="relative">
                    {/* Edge scroll buttons (desktop only) */}
                    <div className="hidden lg:flex absolute -top-16 right-0 gap-2">
                        <button
                            onClick={() => scrollBy(-1)}
                            disabled={!canScroll.left}
                            aria-label="Scroll flow left"
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScroll.left ? `${textMain} ${dark ? 'border-white/30 hover:bg-white/10' : 'border-gray-300 hover:bg-gray-100'}` : 'opacity-25 cursor-default border-gray-300'}`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollBy(1)}
                            disabled={!canScroll.right}
                            aria-label="Scroll flow right"
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScroll.right ? `${textMain} ${dark ? 'border-white/30 hover:bg-white/10' : 'border-gray-300 hover:bg-gray-100'}` : 'opacity-25 cursor-default border-gray-300'}`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div
                        ref={scrollerRef}
                        onScroll={updateScrollState}
                        className="flex gap-6 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {steps.map((step, i) => (
                            <figure
                                key={step.src}
                                className={`snap-start shrink-0 w-[240px] md:w-[280px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${Math.min(i, 6) * 80}ms` }}
                            >
                                {/* Step header */}
                                <div className="flex items-center gap-3 mb-4 h-6">
                                    <span className="text-sm font-black tabular-nums" style={{ color: accent }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className={`h-px flex-1 ${dark ? 'bg-white/15' : 'bg-gray-200'}`} />
                                    {step.phase && (
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                                            style={{ color: accent, background: `${accent}14`, border: `1px solid ${accent}30` }}
                                        >
                                            {step.phase}
                                        </span>
                                    )}
                                </div>

                                {/* Screen */}
                                <div className={`relative aspect-[9/19.5] rounded-[22px] overflow-hidden border shadow-sm hover:shadow-xl transition-shadow duration-500 ${cardBg}`}>
                                    <Image
                                        src={step.src}
                                        alt={step.title}
                                        fill
                                        sizes="280px"
                                        className="object-cover object-top"
                                    />
                                </div>

                                <figcaption className="mt-4">
                                    <h4 className={`text-sm font-bold mb-1 ${textMain}`}>{step.title}</h4>
                                    <p className={`text-xs leading-relaxed ${textMuted}`}>{step.desc}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="space-y-16">
                    {steps.map((step, i) => (
                        <figure
                            key={step.src}
                            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${Math.min(i, 4) * 100}ms` }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-sm font-black tabular-nums" style={{ color: accent }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h4 className={`text-lg font-bold ${textMain}`}>{step.title}</h4>
                                {step.phase && (
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                                        style={{ color: accent, background: `${accent}14`, border: `1px solid ${accent}30` }}
                                    >
                                        {step.phase}
                                    </span>
                                )}
                            </div>
                            <div className={`rounded-3xl overflow-hidden border shadow-sm ${cardBg}`}>
                                <Image
                                    src={step.src}
                                    alt={step.title}
                                    width={step.w ?? 1860}
                                    height={step.h ?? 1111}
                                    sizes="(max-width: 1280px) 100vw, 1152px"
                                    className="w-full h-auto"
                                />
                            </div>
                            <figcaption className={`mt-4 text-sm leading-relaxed max-w-2xl ${textMuted}`}>{step.desc}</figcaption>
                        </figure>
                    ))}
                </div>
            )}
        </div>
    );
}
