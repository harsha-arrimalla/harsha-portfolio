import { useEffect, useRef } from 'react';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.offsetWidth * dpr;
        canvas.height = parent.offsetHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.offsetWidth}px`;
        canvas.style.height = `${parent.offsetHeight}px`;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const drawWave = (offset: number, color: string, speed: number, amplitude: number, frequency: number) => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.beginPath();
      ctx.fillStyle = color;

      // Use screen blending for depth
      ctx.globalCompositeOperation = 'screen';

      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 3) {
        // High-frequency primary wave with low-frequency secondary drift
        const y =
          Math.sin(x * frequency + time * speed + offset) * amplitude +
          Math.cos(x * 0.001 - time * 0.2) * (amplitude * 0.5) +
          h * 0.6;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Layered waves with different speeds and heights
      drawWave(0, 'rgba(255, 250, 240, 0.04)', 1.5, 30, 0.005);
      drawWave(Math.PI / 2, 'rgba(215, 190, 160, 0.03)', 1.2, 45, 0.003);
      drawWave(Math.PI, 'rgba(160, 130, 100, 0.02)', 1.8, 25, 0.008);
      drawWave(Math.PI * 1.5, 'rgba(255, 255, 255, 0.02)', 1.0, 50, 0.004);

      time += 0.006;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const links = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/harshavardhan-arrimalla-a557141a2/', label: 'LinkedIn', icon: 'in' },
    { href: 'https://github.com/harsha-arrimalla', label: 'GitHub', icon: 'gh' },
    { href: 'https://dribbble.com/harshavirat', label: 'Dribbble', icon: 'dr' },
  ];

  return (
    <footer className="bg-[#050505] text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden group">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[1]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Subtle Wave Canvas with Blur - Damped for readability */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.3] mix-blend-screen"
        style={{
          filter: 'blur(35px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)'
        }}
      />

      {/* Background decoration - dimmed for subtlety */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-gradient-to-tr from-blue-600/5 to-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0 transition-opacity duration-1000 group-hover:opacity-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Harsha</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Product Designer · AI & Systems UX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest text-gray-500">Quick Links</h4>
            <div className="space-y-3">
              {links.map((link) => (
                <div key={link.href} className="transition-transform hover:translate-x-1 duration-300">
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Resume */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest text-gray-500">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all text-[10px] font-bold tracking-tight uppercase"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          <p className="text-xs text-gray-600 font-medium">
            © {new Date().getFullYear()} Harsha. Built with deep thought.
          </p>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Direct Communication</p>
            <a
              href="mailto:arrimallaharshavardhan@gmail.com"
              className="text-sm md:text-lg font-bold hover:text-blue-400 transition-colors duration-300 break-all md:break-normal text-center md:text-right"
            >
              arrimallaharshavardhan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
