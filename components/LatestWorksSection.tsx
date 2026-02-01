'use client';

import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';

export default function LatestWorksSection() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });

  const works = [
    {
      title: 'Hita AI',
      category: 'AI Travel Agent',
      image: '/images/projects/hita.png',
      color: 'from-indigo-500 to-purple-600',
      emoji: '✨',
      slug: 'hita'
    },
    {
      title: 'Miraee',
      category: 'AI Travel Companion',
      image: '/images/projects/miraee.png',
      color: 'from-blue-400 to-indigo-500',
      emoji: '🌏',
      slug: 'miraee'
    },
    {
      title: 'Aarna Assistant',
      category: 'AI UX Design',
      image: '/images/projects/aarna.png',
      color: 'from-teal-400 to-cyan-500',
      emoji: '🎨',
      slug: 'aarna'
    },
  ];

  return (
    <section ref={ref} className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden">
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
        <div className="mb-20">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
              style={{ width: isInView ? '60px' : '0px' }}
            />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500">Portfolio</span>
          </div>

          <KineticText
            className="text-5xl md:text-7xl font-black mb-6"
            type="char"
            duration={0.6}
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
              className={`group cursor-pointer transition-all duration-1000 reveal ${isInView ? 'active' : ''}`}
              style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
              <div
                className="aspect-[3/4] bg-white rounded-3xl mb-6 relative overflow-hidden shadow-lg group-hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Shine effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 translate-x-[-100%] group-hover:animate-shine pointer-events-none"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white transition-transform duration-500 group-hover:scale-110">
                    <p className="text-lg font-bold">View Case Study</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-gray-500 flex items-center gap-2">
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
