'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import KineticText from '@/components/KineticText';

const expertise = [
  {
    number: '01',
    title: 'Design',
    description: 'End-to-end product design — from research and wireframes to high-fidelity prototypes and design systems.',
    tools: ['Figma', 'Framer', 'Adobe XD', 'Photoshop', 'Spline'],
    accent: '#3B82F6',
  },
  {
    number: '02',
    title: 'Development',
    description: 'Building production-ready interfaces with modern frameworks, animations, and responsive architectures.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Framer Motion'],
    accent: '#A855F7',
  },
  {
    number: '03',
    title: 'AI & Strategy',
    description: 'Designing conversational interfaces, AI agents, and intelligent workflows that humans actually trust.',
    tools: ['Conversational UX', 'AI Agents', 'Prompt Design', 'UX Research', 'Systems Thinking'],
    accent: '#F97316',
  },
];

export default function SkillsSection() {
  const [ref, isInView] = useInView({ threshold: 0.05, rootMargin: '10% 0px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-[1px] bg-black" style={{ width: isInView ? '60px' : '0px', transition: 'width 0.7s ease' }} />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">What I Do</span>
          </div>

          <KineticText
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            type="word"
            duration={0.8}
          >
            Expertise
          </KineticText>
        </div>

        {/* Expertise rows */}
        <div className="space-y-0">
          {expertise.map((item, index) => (
            <div
              key={item.number}
              className={`group border-t border-gray-200 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-10 md:py-14 grid grid-cols-12 gap-4 md:gap-8 items-start cursor-default">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span
                    className="text-sm font-bold transition-colors duration-500"
                    style={{ color: hoveredIndex === index ? item.accent : '#9CA3AF' }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-10 md:col-span-3">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight text-black group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-4 mt-4 md:mt-0">
                  <p className="text-gray-500 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tools */}
                <div className="col-span-12 md:col-span-4 mt-4 md:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, toolIndex) => (
                      <span
                        key={tool}
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all duration-500"
                        style={{
                          borderColor: hoveredIndex === index ? item.accent + '40' : '#E5E7EB',
                          backgroundColor: hoveredIndex === index ? item.accent + '08' : 'white',
                          color: hoveredIndex === index ? item.accent : '#6B7280',
                          transitionDelay: `${toolIndex * 0.03}s`,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accent line on hover */}
              <div
                className="h-[2px] transition-all duration-700 ease-out"
                style={{
                  backgroundColor: item.accent,
                  transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                }}
              />
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
