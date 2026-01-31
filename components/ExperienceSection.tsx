'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import KineticText from '@/components/KineticText';

export default function ExperienceSection() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });
  const containerRef = useRef<HTMLElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lineHeight = Math.min(100, scrollYProgress * 200) + '%';
  const overlayOpacity = Math.min(0.5, scrollYProgress);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        style={{ opacity: overlayOpacity, transition: 'opacity 0.3s ease' }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div
              className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
              style={{ width: isInView ? '60px' : '0px' }}
            />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500">Experience</span>
          </div>

          <div className="overflow-hidden">
            <KineticText
              className="text-5xl md:text-7xl lg:text-8xl font-black"
              type="char"
              duration={0.6}
            >
              My Journey
            </KineticText>
            <p className="text-xl text-gray-500 mt-6 font-light max-w-2xl leading-relaxed">
              Designing AI-driven, enterprise-scale travel systems and conversational experiences.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block">
            <div
              style={{ height: lineHeight, transition: 'height 0.1s linear' }}
              className="w-full bg-black origin-top"
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-12 md:space-y-24">
            {[
              {
                company: 'Mondee',
                period: '2023 – Present',
                role: 'Senior Product Designer',
                description: 'Designed and shipped scalable, enterprise-grade travel systems managing global operational complexity.',
                tags: ['Enterprise UX', 'Scalable Systems', 'Travel Tech'],
                highlight: true,
              },
              {
                company: 'Aarna',
                period: '2023 – 2023',
                role: 'AI Product Designer',
                description: 'Designed and shipped an AI-assisted platform transforming unstructured content into publish-ready experiences.',
                tags: ['AI Interaction', 'Conversational UX', 'Platform Design'],
                highlight: false,
              },
              {
                company: 'Hita & Pranik',
                period: '2022 – 2023',
                role: 'AI Product Builder',
                description: 'Designed and branded autonomous AI companions for specialized healthcare and travel verticals.',
                tags: ['Agentic AI', 'Healthcare UX', 'Concept Strategy'],
                highlight: false,
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  } ${index % 2 === 0 ? '' : 'md:direction-rtl'}`}
                style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-black rounded-full -translate-x-1/2 hidden md:block z-10 transition-transform duration-500 ${isInView ? 'scale-100' : 'scale-0'}`}
                  style={{ transitionDelay: `${0.5 + index * 0.2}s` }}
                />

                {/* Content */}
                <div
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all group relative ${index % 2 === 0 ? 'md:mr-12 hover:translate-x-2' : 'md:ml-12 md:col-start-2 hover:-translate-x-2'
                    } ${exp.highlight ? 'ring-2 ring-blue-500/20' : ''}`}
                >
                  {/* Period badge */}
                  <div
                    className={`inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-mono mb-4 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                    style={{ transitionDelay: `${0.6 + index * 0.2}s` }}
                  >
                    {exp.period}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-gray-500 mb-4 font-medium">{exp.company}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-4 py-1.5 bg-gray-100 text-sm rounded-full font-medium cursor-default transition-all hover:scale-110 hover:bg-black hover:text-white ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                        style={{ transitionDelay: `${0.7 + index * 0.2 + i * 0.05}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="absolute top-8 right-8 text-2xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume download */}
        <div
          className={`mt-20 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '1.5s' }}
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 group"
          >
            <span>Download Resume</span>
            <span className="inline-block animate-bounce group-hover:translate-y-1 transition-transform">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
