'use client';

/**
 * The single heading system for every case study section.
 *
 * kicker — small uppercase taxonomy label with a leading line. Shared
 *   vocabulary across all pages: "The Context", "The Problem",
 *   "The Solution", "The Process", "Complete End-to-End Flow",
 *   "Decisions & Tradeoffs", "The Outcome", "Reflection".
 * title — one big descriptive heading, always text-3xl md:text-5xl.
 * description — optional lede paragraph.
 *
 * Colors inherit from the page via currentColor + opacity, so the same
 * component works on white, tinted, and dark section backgrounds.
 */
interface SectionHeadingProps {
    kicker: string;
    title?: string;
    description?: string;
    align?: 'left' | 'center';
    className?: string;
}

export default function SectionHeading({
    kicker,
    title,
    description,
    align = 'left',
    className = '',
}: SectionHeadingProps) {
    const centered = align === 'center';

    return (
        <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
            <div className={`flex items-center gap-4 ${title ? 'mb-5' : ''} ${centered ? 'justify-center' : ''}`}>
                <span className="h-px w-12 bg-current opacity-30" aria-hidden="true" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">{kicker}</h2>
                {centered && <span className="h-px w-12 bg-current opacity-30" aria-hidden="true" />}
            </div>
            {title && (
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{title}</h3>
            )}
            {description && (
                <p className={`mt-5 text-lg md:text-xl font-light leading-relaxed opacity-70 max-w-3xl ${centered ? 'mx-auto' : ''}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
