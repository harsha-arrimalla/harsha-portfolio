'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

const showcaseItems = [
  { title: 'Hita AI', category: 'Travel Agent', slug: 'hita', color: '#3B82F6' },
  { title: 'Miraee', category: 'AI Companion', slug: 'miraee', color: '#F97316' },
  { title: 'Aarna', category: 'AI Assistant', slug: 'aarna', color: '#22C55E' },
  { title: 'Pranik', category: 'Healthcare AI', slug: 'pranik', color: '#A855F7' },
  { title: 'Mondee', category: 'Enterprise', slug: 'mondee', color: '#EF4444' },
  { title: 'Qualifyze', category: 'Supplier UX', slug: 'qualifyze', color: '#06B6D4' },
];

export default function HorizontalShowcase() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={scrollRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div ref={ref} className="relative">
        {/* Section label */}
        <div className="px-6 md:px-12 lg:px-24 mb-12">
          <div className="flex items-center gap-4 max-w-7xl mx-auto">
            <div className="h-[1px] bg-black w-12" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">
              Quick Access
            </span>
          </div>
        </div>

        {/* Scrolling ribbon — moves based on scroll position */}
        <div className="relative">
          <div
            className="flex gap-6 md:gap-8 whitespace-nowrap transition-transform duration-100"
            style={{
              transform: `translateX(${-scrollProgress * 300 + 50}px)`,
            }}
          >
            {[...showcaseItems, ...showcaseItems].map((item, index) => (
              <Link
                key={index}
                href={`/projects/${item.slug}`}
                data-cursor="View"
                className={`group flex-shrink-0 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index % showcaseItems.length) * 0.08}s` }}
              >
                <div className="flex items-center gap-4 md:gap-6 px-8 py-6 md:py-8 bg-gray-50 hover:bg-gray-100 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Color dot */}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 transition-transform duration-500 group-hover:scale-150"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Text */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-4xl font-black tracking-tight text-black group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 text-lg ml-2">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
