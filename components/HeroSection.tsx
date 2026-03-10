import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import LiquidButton from './LiquidButton';

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      delay: 1.6, // Wait for LoadingScreen to finish
    });

    // Initial states — everything hidden
    gsap.set(containerRef.current, { opacity: 1 });
    gsap.set(".hero-line", { y: 120, opacity: 0, rotateX: -40 });
    gsap.set(".hero-subtitle", { y: 30, opacity: 0, filter: "blur(10px)" });
    gsap.set(".hero-cta", { y: 40, opacity: 0, filter: "blur(8px)" });
    gsap.set(".hero-badge", { y: 20, opacity: 0, scale: 0.9 });
    gsap.set(imageRef.current, { scale: 1.1, opacity: 0, y: 60, filter: "blur(15px)" });
    gsap.set(".hero-mesh-blob", { scale: 0, opacity: 0 });
    gsap.set(".hero-side-text", { opacity: 0, x: 20 });
    gsap.set(scrollIndicatorRef.current, { opacity: 0, y: -20 });

    // The cinematic sequence
    tl
      // 1. Mesh background fades in
      .to(".hero-mesh-blob", {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        stagger: 0.2,
        ease: "power2.out",
      })
      // 2. Heading lines stagger in with 3D rotate
      .to(".hero-line", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "expo.out",
      }, "-=1.2")
      // 3. Badge pops in
      .to(".hero-badge", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
      }, "-=0.8")
      // 4. Subtitle reveals
      .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
      }, "-=0.6")
      // 5. CTAs slide up
      .to(".hero-cta", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.5")
      // 6. Image enters
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "expo.out",
      }, "-=1.0")
      // 7. Side text
      .to(".hero-side-text", {
        opacity: 1,
        x: 0,
        duration: 0.8,
      }, "-=0.6")
      // 8. Scroll indicator
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, "-=0.3");

    // Parallax on mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5);
      const yPos = (clientY / innerHeight - 0.5);

      setMousePos({ x: xPos, y: yPos });

      gsap.to(imageRef.current, {
        x: xPos * 25,
        y: yPos * 25,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".hero-mesh-blob", {
        x: (i: number) => -xPos * (20 + i * 15),
        y: (i: number) => -yPos * (20 + i * 15),
        duration: 1.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white flex items-center px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 lg:pb-8 relative overflow-hidden"
      style={{ opacity: 0 }}
    >
      {/* ===== GRADIENT MESH BACKGROUND ===== */}
      <div ref={meshRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-mesh-blob absolute w-[700px] h-[700px] rounded-full opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 70%)',
            top: '-10%',
            right: '-5%',
          }}
        />
        <div
          className="hero-mesh-blob absolute w-[500px] h-[500px] rounded-full opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.06) 0%, rgba(244,114,182,0) 70%)',
            bottom: '10%',
            left: '-5%',
          }}
        />
        <div
          className="hero-mesh-blob absolute w-[400px] h-[400px] rounded-full opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, rgba(34,197,94,0) 70%)',
            top: '40%',
            left: '30%',
          }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* ===== GRID LINES (subtle) ===== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ===== LEFT: TEXT CONTENT ===== */}
        <div ref={textRef} className="lg:col-span-7 xl:col-span-7 relative z-30 pointer-events-none *:pointer-events-auto order-1">

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-gray-500">
              Available for Projects
            </span>
          </div>

          {/* Main heading — each line animates independently */}
          <h1 className="mb-8 relative z-20" style={{ perspective: '600px' }}>
            <span className="hero-line block text-[3.2rem] md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.04em] text-black">
              Designing
            </span>
            <span className="hero-line block text-[3.2rem] md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.04em] text-gray-300">
              Intelligent
            </span>
            <span className="hero-line block text-[3.2rem] md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.04em] text-black">
              Products
            </span>
            <span className="hero-line block text-[3.2rem] md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.04em] text-black">
              People{' '}
              <span className="relative inline-block">
                Trust
                <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
              </span>
              <span className="text-gray-300">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base md:text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-medium pl-1 border-l-2 border-gray-200 ml-1">
            AI-first UX for enterprise, travel, and healthcare platforms—focused on clarity, decision-making, and scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 w-full md:w-auto items-start">
            <div className="hero-cta">
              <LiquidButton href="#projects" variant="primary" icon="→" className="!w-full md:!w-auto justify-center shadow-2xl">
                View Work
              </LiquidButton>
            </div>

            <div className="hero-cta">
              <LiquidButton
                onClick={() => window.dispatchEvent(new CustomEvent('open-luffy-chat'))}
                variant="outline"
                className="!w-full md:!w-auto justify-center"
              >
                Ask AI Assistant
              </LiquidButton>
            </div>
          </div>

          {/* Trust line */}
          <p className="hero-cta mt-10 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] opacity-60">
            Trusted by Enterprise Leaders
          </p>
        </div>

        {/* ===== RIGHT: IMAGE + BACKDROP ===== */}
        <div className="relative lg:absolute right-0 bottom-0 top-0 w-full lg:w-[55%] flex items-center justify-center lg:justify-end pointer-events-none overflow-visible order-2 h-[400px] md:h-[600px] lg:h-full">

          {/* Orbiting ring */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full border border-gray-100 opacity-40"
            style={{
              right: '5%',
              top: '50%',
              transform: `translateY(-50%) rotate(${mousePos.x * 10}deg)`,
              transition: 'transform 1.5s ease-out',
            }}
          />

          {/* Image container */}
          <div
            ref={imageRef}
            className="relative z-10 w-full h-[95%] flex items-end justify-center lg:justify-end pr-0 lg:pr-24"
          >
            <div className="relative h-full flex items-end justify-center">
              <img
                src="/images/hero/harsha-cutout-final.png"
                alt="Harsha - Product Designer"
                className="h-full w-auto object-contain select-none scale-110 lg:scale-100"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.12))' }}
                loading="eager"
              />
            </div>
          </div>

          {/* Vertical label */}
          <div className="hero-side-text absolute right-[2%] top-[50%] lg:top-[70%] -translate-y-1/2 z-0 hidden lg:block">
            <span className="text-gray-300 text-xs font-bold tracking-[0.8em] uppercase vertical-text select-none">
              HARSHA
            </span>
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-gray-400">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-scroll-line" />
        </div>
      </div>

      {/* ===== CORNER DECORATION ===== */}
      <div className="absolute top-28 right-8 z-20 opacity-10 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="black" />
        </svg>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
}
