'use client';

import { useInView } from '@/hooks/useInView';

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
        <div className="overflow-hidden mb-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1]">
            {["Let's create", "something", "amazing."].map((word, wordIndex) => (
              <span key={wordIndex} className="block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-1000 ease-out ${isInView ? 'translate-y-0' : 'translate-y-full'} ${wordIndex === 2 ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`}
                  style={{ transitionDelay: `${wordIndex * 0.15}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
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
          <a
            href="#contact"
            className="group px-10 py-5 bg-white text-black rounded-full font-bold text-lg relative overflow-hidden transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
              Start a Project
              <span className="inline-block animate-bounce-horizontal">
                →
              </span>
            </span>
          </a>

          <a
            href="mailto:hello@harsha.dev"
            className="px-10 py-5 border-2 border-white/30 rounded-full font-bold text-lg transition-all hover:scale-105 hover:-translate-y-1 hover:border-white active:scale-95"
          >
            Send Email
          </a>
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
