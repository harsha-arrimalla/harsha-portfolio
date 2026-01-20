'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navItems = [
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${scrolled
        ? 'bg-white/95 border-black/10 py-3 shadow-sm'
        : 'bg-white/80 border-black/5 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent hover:scale-105 active:scale-95 transition-transform"
        >
          Harsha Virat
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div
              key={item.href}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <Link
                href={item.href}
                className="relative text-sm text-gray-600 hover:text-black transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="hidden md:block px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Say Hi! 👋
            </a>
          </MagneticButton>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50 active:scale-90 transition-transform"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-40 md:hidden transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-8 pt-24">
          <nav className="space-y-6">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`block mt-12 px-8 py-3 bg-black text-white text-center rounded-full hover:bg-gray-800 active:scale-95 transition-all transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            Say Hi! 👋
          </a>

          <div
            className={`mt-12 pt-8 border-t border-gray-200 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <p className="text-sm text-gray-500 mb-4">Connect with me</p>
            <div className="flex gap-4">
              {['LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
