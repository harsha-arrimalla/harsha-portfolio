import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import LiquidButton from './LiquidButton';

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Refs for specific elements to animate
  const headingLinesRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbit1Ref = useRef<HTMLDivElement>(null);
  const orbit2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states (set here to avoid FOUC)
    gsap.set([orbit1Ref.current, orbit2Ref.current], { scale: 0, opacity: 0 });
    gsap.set(imageRef.current, { scale: 0.8, opacity: 0, rotationY: 15 });

    tl.to(containerRef.current, { opacity: 1, duration: 0.5 }) // Fade in container
      .from(textRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      })
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)"
      }, "-=0.8")
      .to([orbit1Ref.current, orbit2Ref.current], {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out"
      }, "-=1.0");

    // 2. Mouse Parallax Setup
    const xTo = gsap.quickTo(imageRef.current, "rotationY", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(imageRef.current, "rotationX", { duration: 0.5, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate normalized position (-1 to 1)
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      // Apply rotation (max 10 degrees)
      xTo(xPos * 10);
      yTo(-yPos * 10); // Invert Y for natural feel
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white flex items-center px-4 md:px-12 lg:px-24 pt-24 md:pt-20 relative overflow-hidden opacity-0" // Reduced px for mobile
    >
      {/* Animated gradient orbs */}
      <div
        ref={orbit1Ref}
        className="absolute top-20 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl mix-blend-multiply"
      />
      <div
        ref={orbit2Ref}
        className="absolute bottom-20 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl mix-blend-multiply"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 transition-all duration-500">
        {/* Left side - Text */}
        <div ref={textRef} className="relative z-20 order-2 lg:order-1 text-center lg:text-left">
          {/* Animated line */}
          <div className="h-[2px] bg-black mb-6 md:mb-8 w-[40px] md:w-[60px] mx-auto lg:mx-0" />

          <div className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
            UI/UX Designer & AI – Full Stack Developer
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-[0.95] tracking-tight text-black mb-6 md:mb-8">
            Designing
            <br />
            intelligent products
            <br />
            people trust.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
            AI-first UX for travel, healthcare, and enterprise systems.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <LiquidButton href="#projects" variant="primary" icon="→">
              View Work
            </LiquidButton>

            <LiquidButton href="#contact" variant="outline">
              Ask AI about me
            </LiquidButton>
          </div>
        </div>

        {/* Right side - Image & Cards */}
        <div className="relative perspective-1000 flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
          <div
            ref={imageRef}
            className="relative transform-style-3d will-change-transform"
          >
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/50 mx-auto">

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50" />

              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 duration-500">
                    <span className="text-4xl sm:text-5xl md:text-7xl">👤</span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase">Harsha</p>
                </div>
              </div>
            </div>

            {/* Floating cards - Adjusted for mobile */}
            <div
              className="absolute top-4 -left-2 sm:top-10 sm:-left-4 md:-left-12 bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-3 md:p-6 border border-white/50 animate-float-slow scale-75 md:scale-100 origin-bottom-right"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 mt-1 font-medium">Happy Clients</div>
            </div>

            <div
              className="absolute bottom-4 -right-2 sm:bottom-10 sm:-right-4 md:-right-8 bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl p-3 md:p-6 border border-white/50 animate-float-slower scale-75 md:scale-100 origin-top-left"
              style={{ transform: 'translateZ(60px)' }}
            >
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 mt-1 font-medium">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
