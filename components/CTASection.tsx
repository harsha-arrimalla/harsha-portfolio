'use client';

import { useInView } from '@/hooks/useInView';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';

export default function CTASection() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-black text-white relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20 bg-gradient-animate"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div
        className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* Label */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm transition-all duration-700 reveal ${isInView ? 'active' : ''}`}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm">Available for new projects</span>
        </div>

        {/* Main heading */}
        <div className="overflow-hidden mb-8 px-1 pb-4">
          <KineticText
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1]"
            type="word"
            duration={0.8}
            delay={0.1}
          >
            Let's create something amazing.
          </KineticText>
        </div>

        <p
          className={`text-xl text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 reveal ${isInView ? 'active delay-500' : ''}`}
        >
          Whether you need a complete digital transformation, a stunning website,
          or an AI-powered product — let's make it happen together.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 reveal ${isInView ? 'active delay-700' : ''}`}
        >
          <LiquidButton
            href="#contact"
            variant="white"
            size="lg"
            icon="→"
          >
            Start a Project
          </LiquidButton>

          <LiquidButton
            href="mailto:hello@harsha.dev"
            variant="whiteOutline"
            size="lg"
          >
            Send Email
          </LiquidButton>
        </div>

        {/* Social links */}
        <div
          className={`mt-16 flex justify-center gap-8 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
        >
          {['LinkedIn', 'GitHub', 'Dribbble', 'Twitter'].map((social, i) => (
            <a
              key={social}
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-all hover:-translate-y-1"
            >
              {social}
            </a>
          ))}
        </div>
      </div>

      {/* Large background text */}
      <div
        className={`absolute bottom-0 left-0 right-0 text-[20vw] font-black text-white whitespace-nowrap overflow-hidden pointer-events-none transition-opacity duration-1000 ${isInView ? 'opacity-5' : 'opacity-0'}`}
      >
        <div className="animate-marquee">
          <span className="px-4">LET'S TALK • LET'S TALK • LET'S TALK •</span>
          <span className="px-4">LET'S TALK • LET'S TALK • LET'S TALK •</span>
        </div>
      </div>
    </section>
  );
}
