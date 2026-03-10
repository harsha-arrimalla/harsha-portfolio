import { useEffect, useRef } from 'react';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';

export default function Footer() {
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
    <footer className="bg-[#050505] text-white relative overflow-hidden">
      {/* ===== MARQUEE SECTION ===== */}
      <div className="border-b border-white/5 py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[8rem] md:text-[12rem] font-black text-white/[0.03] leading-none tracking-tighter mx-8 select-none">
              Let&apos;s Work Together •
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="py-20 px-6 md:px-12 lg:px-24 relative z-10">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[1]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {/* Background glow */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-gradient-to-tr from-blue-600/5 to-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black mb-3 tracking-tight">Harsha</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Designing AI experiences that users trust—from concept to code.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-bold mb-6 uppercase tracking-[0.3em] text-gray-600">Navigate</h4>
              <div className="space-y-3">
                {links.map((link) => (
                  <div key={link.href} className="group">
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300 text-sm group-hover:translate-x-2"
                    >
                      <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300" />
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[10px] font-bold mb-6 uppercase tracking-[0.3em] text-gray-600">Connect</h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 text-[10px] font-bold tracking-tight uppercase"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <a
                href="mailto:arrimallaharshavardhan@gmail.com"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 break-all"
              >
                arrimallaharshavardhan@gmail.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 font-medium">
              © {new Date().getFullYear()} Harsha. Crafted with intention.
            </p>
            <p className="text-[10px] text-gray-700 uppercase tracking-[0.3em] font-medium">
              Built with Next.js · Designed in Figma
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
