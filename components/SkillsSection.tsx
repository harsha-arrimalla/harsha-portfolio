'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Design & 3D',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-400',
    skills: ['Figma', 'Framer', 'Adobe XD', 'Photoshop', 'Blender', 'Spline', 'Three.js'],
  },
  {
    title: 'Development',
    icon: '⚡',
    color: 'from-purple-500 to-pink-400',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Framer Motion', 'Git'],
  },
  {
    title: 'AI & UX Strategy',
    icon: '🤖',
    color: 'from-orange-500 to-red-400',
    skills: ['Conversational UX', 'AI Interaction Design', 'AI agents', 'Prompt design', 'UX Flow Mapping'],
  },
  {
    title: 'Tools & Systems',
    icon: '🛠️',
    color: 'from-green-500 to-teal-400',
    skills: ['Cursor', 'Vercel', 'Render', 'Design Systems', 'Prototype', 'Wireframe'],
  },
];

export default function SkillsSection() {
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

  return (
    <section ref={containerRef} className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div
        style={{ transform: `translateY(${y}px)`, transition: 'transform 0.1s linear' }}
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-4 mb-8 reveal ${isInView ? 'active' : ''}`}>
            <div
              className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
              style={{ width: isInView ? '60px' : '0px' }}
            />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500">Expertise</span>
            <div
              className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-15' : 'w-0'}`}
              style={{ width: isInView ? '60px' : '0px' }}
            />
          </div>

          <h2 className={`text-5xl md:text-7xl font-black mb-6 reveal ${isInView ? 'active delay-100' : ''}`}>
            Skills & Tools
          </h2>
          <p className={`text-xl text-gray-500 max-w-2xl mx-auto reveal ${isInView ? 'active delay-200' : ''}`}>
            Technologies and methodologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-gray-50 rounded-3xl p-8 transition-all hover:shadow-xl hover:-translate-y-2 group reveal ${isInView ? 'active' : ''}`}
              style={{ transitionDelay: `${0.1 + categoryIndex * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`px-5 py-2.5 bg-white rounded-full text-sm font-medium shadow-sm cursor-default transition-all border border-gray-100 hover:scale-110 hover:bg-black hover:text-white reveal ${isInView ? 'active' : ''}`}
                    style={{ transitionDelay: `${0.2 + categoryIndex * 0.05 + skillIndex * 0.02}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated marquee of skills */}
        <div className={`mt-20 overflow-hidden reveal ${isInView ? 'active delay-300' : ''}`}>
          <div className="animate-marquee">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
              <span key={i} className="text-6xl md:text-8xl font-black text-gray-100 mx-4">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
