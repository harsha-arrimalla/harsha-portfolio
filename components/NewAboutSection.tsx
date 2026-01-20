'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

export default function AboutSection() {
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

  const y = 100 - scrollYProgress * 200;
  const rotate = 5 - scrollYProgress * 10;
  const y2 = -50 + scrollYProgress * 100;

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div
        style={{ transform: `translateY(${y}px) rotate(${rotate}deg)`, transition: 'transform 0.1s linear' }}
        className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"
      />
      <div
        style={{ transform: `translateY(${y2}px)`, transition: 'transform 0.1s linear' }}
        className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-pink-100/50 to-orange-100/50 rounded-full blur-3xl"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
            style={{ width: isInView ? '60px' : '0px' }}
          />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-500">About Me</span>
        </div>

        <div className="overflow-hidden mb-16">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] max-w-5xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            I design AI-powered products that balance intelligence with empathy.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Description */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              I enjoy solving complex, real-world problems and turning them into simple human experiences.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              My work spans conversational interfaces, healthcare compliance, and enterprise-scale travel platforms. I believe the best AI tools don't just "calculate"—they communicate, adapt, and build trust with the human on the other side.
            </p>

            {/* Skills tags */}
            <div className={`flex flex-wrap gap-3 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              {['AI Interaction Design', 'Conversational UX', 'Design Systems', 'UX Flow Mapping', 'Figma', 'React.js'].map((skill, i) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-white rounded-full text-sm font-medium shadow-sm cursor-default transition-all hover:scale-110 hover:bg-black hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            {[
              { number: 'AI-first', label: 'Product Designer', color: 'from-blue-600 to-cyan-500' },
              { number: 'Healthcare', label: '& Travel Domain', color: 'from-purple-600 to-pink-500' },
              { number: 'Enterprise', label: '& Startup Exp.', color: 'from-orange-500 to-red-500' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all cursor-default group hover:shadow-2xl hover:translate-x-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-transform duration-500 ${isInView ? 'scale-100' : 'scale-0'}`}>
                    {stat.number}
                  </div>
                </div>
                <p className="text-gray-600 group-hover:text-black transition-colors pl-6 pt-1 text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
