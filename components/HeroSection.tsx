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
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    gsap.set(containerRef.current, { opacity: 0 });
    gsap.set(textRef.current?.children || [], { y: 100, opacity: 0 });
    gsap.set(".hero-backdrop", { scale: 0, opacity: 0 });
    gsap.set(imageRef.current, { scale: 0.9, opacity: 0, y: 50 });
    gsap.set(".vertical-label", { opacity: 0, x: 20 });

    tl.to(containerRef.current, { opacity: 1, duration: 0.5 })
      .to(".hero-backdrop", { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" })
      .to(textRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      }, "-=0.8")
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
      }, "-=1")
      .to(".vertical-label", {
        opacity: 1,
        x: 0,
        duration: 0.8
      }, "-=0.5");

    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5);
      const yPos = (clientY / innerHeight - 0.5);

      gsap.to(imageRef.current, {
        x: xPos * 20,
        y: yPos * 20,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(".hero-backdrop", {
        x: -xPos * 30,
        y: -yPos * 30,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white flex items-center px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 lg:pb-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content (Text) */}
        <div ref={textRef} className="lg:col-span-7 xl:col-span-12 relative z-30 pointer-events-none *:pointer-events-auto mt-0 lg:mt-0 order-1">
          <div className="h-[2px] bg-black mb-8 md:mb-12 w-[60px] md:w-[80px]" />

          <div className="text-[11px] md:text-sm text-gray-400 mb-6 md:mb-8 tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold">
            Product Designer · AI & Systems UX
          </div>

          <h1 className="text-[2.75rem] md:text-6xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-[0.95] tracking-tight text-black mb-8">
            Designing
            <br />
            intelligent
            <br />
            products
            <br />
            people trust.
          </h1>

          <p className="text-lg md:text-2xl text-gray-500 mb-12 max-w-xl leading-[1.625] md:leading-relaxed font-medium">
            AI-first UX for enterprise, travel, and healthcare platforms—focused on clarity, decision-making, and scale.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 md:gap-5 mt-4">
            <LiquidButton href="#projects" variant="primary" icon="→" className="!px-8 md:!px-10 !py-3 md:!py-4 rounded-full text-sm font-bold">
              View Work
            </LiquidButton>

            <LiquidButton
              onClick={() => window.dispatchEvent(new CustomEvent('open-luffy-chat'))}
              variant="outline"
              className="!px-8 md:!px-10 !py-3 md:!py-4 rounded-full text-sm font-bold border-2 border-black"
            >
              Ask my AI assistant
            </LiquidButton>
          </div>

          <p className="mt-10 text-[11px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.15em] md:tracking-widest opacity-80">
            Designed AI-powered products for enterprise travel and platform systems.
          </p>
        </div>

        {/* Right Content (Image & Backdrop) */}
        <div className="relative lg:absolute right-0 bottom-0 top-0 w-full lg:w-[65%] flex items-center justify-center lg:justify-end pointer-events-none overflow-visible order-2 lg:order-2 h-[400px] md:h-[500px] lg:h-full">

          {/* Purple Circular Backdrop - Responsive scaling */}
          <div
            className="hero-backdrop absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[580px] lg:h-[580px] rounded-full bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#d946ef] z-0 opacity-80 lg:opacity-90 blur-xl lg:blur-none"
            style={{
              right: 'center',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />

          {/* Main Cutout Container */}
          <div
            ref={imageRef}
            className="relative z-10 w-full h-[95%] md:h-[100%] flex items-end justify-center lg:justify-end pr-0 lg:pr-32"
          >
            <div className="relative h-full flex items-end justify-center">
              <img
                src="/images/hero/harsha-cutout-final.png"
                alt="Harsha - Product Designer"
                className="h-full w-auto object-contain select-none scale-110 lg:scale-100"
                style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.1))' }}
              />
            </div>
          </div>


          {/* Vertical Label */}
          <div className="vertical-label absolute right-[2%] top-[50%] lg:top-[70%] -translate-y-1/2 z-0 hidden lg:block">
            <span className="text-gray-400 text-xs font-bold tracking-[0.8em] uppercase vertical-text select-none">
              HARSHA
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Star Icon */}
      <div className="absolute bottom-10 right-10 z-20 opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="black" />
        </svg>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
