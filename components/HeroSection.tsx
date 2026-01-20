import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const maxRotation = 8;
      const xRot = (e.clientX - centerX) / 60;
      const yRot = (e.clientY - centerY) / 60;

      setMousePos({
        x: Math.max(-maxRotation, Math.min(maxRotation, xRot)),
        y: Math.max(-maxRotation, Math.min(maxRotation, yRot)),
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax calculations
  const textY = scrollY * 0.2;
  const imageY = scrollY * 0.05;
  const opacity = Math.max(1 - scrollY / 600, 0);

  // Rotate based on mouse
  const rotateX = -mousePos.y;
  const rotateY = mousePos.x;

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white flex items-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden"
    >
      {/* Animated gradient orbs using CSS animations */}
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-slow"
      />
      <div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-float-slower"
      />

      <div
        style={{
          transform: `translateY(${textY}px)`,
          opacity,
          transition: 'transform 0.1s linear' // Smooth scroll link
        }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
      >
        {/* Left side - Text */}
        <div className="reveal active"> {/* Always active for Hero entrance */}
          {/* Animated line */}
          <div
            className="h-[2px] bg-black mb-8 animate-grow-horizontal origin-left"
            style={{ width: '60px' }}
          />

          <div className="text-sm text-gray-500 mb-6 tracking-[0.3em] uppercase animate-fade-in-right">
            UI/UX Designer & AI Developer
          </div>

          {/* Main heading */}
          <div className="overflow-hidden mb-2">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight text-black mb-4 animate-slide-up">
              Designing
              <br />
              intelligent products
              <br />
              people trust.
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light animate-slide-up">
            AI-first UX for travel, healthcare, and enterprise systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <a
              href="#projects"
              className="group px-8 py-4 bg-black text-white rounded-full font-medium relative overflow-hidden transition-transform hover:-translate-y-1 active:scale-95"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-black rounded-full font-medium transition-all hover:bg-black hover:text-white hover:-translate-y-1 active:scale-95"
            >
              Ask AI about me
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-6 md:left-12 lg:left-24 hidden lg:flex flex-col items-center gap-2 opacity-50">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
            </div>
            <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
          </div>
        </div>

        <div
          ref={ref}
          className="relative perspective-1000 animate-scale-up"
          style={{
            transform: `translateY(${imageY}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.4s ease-out'
            }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl relative hover:scale-[1.01] transition-transform duration-500">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-animate opacity-20" />

              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-2xl animate-pulse-gentle">
                    <span className="text-6xl">👤</span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Harsha Virat</p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div
              style={{ transform: 'translateZ(60px)' }}
              className="absolute top-10 -left-8 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-xl border border-gray-100/50 hover:scale-105 hover:-rotate-3 transition-transform duration-500"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Happy Clients</div>
            </div>

            <div
              className="absolute bottom-10 -right-8 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-xl border border-gray-100/50 hover:scale-105 hover:rotate-3 transition-transform duration-500"
              style={{ transform: 'translateZ(60px)' }}
            >
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
