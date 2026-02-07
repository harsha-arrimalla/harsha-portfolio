'use client';

import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import Image from 'next/image';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';

export default function LatestWorksSection() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });

  const works = [
    {
      title: 'Hita AI',
      category: 'AI Travel Agent',
      image: '/images/projects/hita_logo.png',
      bg: 'bg-white',
      textColor: 'text-black',
      subTextColor: 'text-gray-500',
      hoverOverlay: 'bg-black/5',
      emoji: '✨',
      slug: 'hita'
    },
    {
      title: 'Miraee',
      category: 'AI Travel Companion',
      image: '/images/projects/miraee_logo.png',
      bg: 'bg-white',
      textColor: 'text-black',
      subTextColor: 'text-gray-500',
      hoverOverlay: 'bg-black/5',
      emoji: '🌏',
      slug: 'miraee'
    },
    {
      title: 'Aarna Assistant',
      category: 'AI UX Design',
      image: '/images/projects/aarna_logo.png',
      bg: 'bg-black',
      textColor: 'text-white',
      subTextColor: 'text-white/60',
      hoverOverlay: 'bg-white/10',
      emoji: '🎨',
      slug: 'aarna'
    },
  ];

  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none animate-spin-slow"
        style={{ animationDuration: '60s' }}
      >
        <div className="w-full h-full border border-black rounded-full" />
        <div className="absolute inset-10 border border-black rounded-full" />
        <div className="absolute inset-20 border border-black rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-[1px] bg-black w-12 md:w-20" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold text-gray-400">Portfolio</span>
          </div>

          <KineticText
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-black"
            type="char"
            duration={0.8}
          >
            Latest Works
          </KineticText>
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {works.map((work, index) => (
            <Link
              key={index}
              href={`/projects/${work.slug}`}
              className={`group cursor-pointer transition-opacity duration-1000 reveal ${isInView ? 'active' : ''}`}
              style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
              <div
                className={`aspect-[3/4] ${work.bg} border border-black/5 rounded-3xl mb-6 relative overflow-hidden shadow-lg group-hover:shadow-2xl hover:scale-[1.02] transition-transform duration-500`}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 flex items-center justify-center p-12 group-hover:scale-110 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-contain"
                      priority={true}
                    />
                  </div>
                </div>

                {/* Subtle Overlays omitted for a cleaner look */}

                <div className={`absolute inset-0 flex items-end justify-center pb-12 opacity-0 group-hover:opacity-100 transition-all duration-500 ${work.hoverOverlay} backdrop-blur-[2px]`}>
                  <div className={`text-center ${work.textColor} transition-all duration-500 translate-y-4 group-hover:translate-y-0`}>
                    <p className="text-lg font-bold">View Case Study</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black mb-2 group-hover:text-blue-600 transition-colors duration-300 text-black">
                {work.title}
              </h3>
              <p className="text-gray-500 flex items-center gap-2 text-sm font-medium">
                <span className="inline-block animate-bounce-horizontal">
                  →
                </span>
                {work.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
