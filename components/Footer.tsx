'use client';

import Link from 'next/link';

export default function Footer() {
  const links = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/in/harshavirat', label: 'LinkedIn', icon: 'in' },
    { href: 'https://github.com/harshavirat', label: 'GitHub', icon: 'gh' },
    { href: 'https://dribbble.com/harshavirat', label: 'Dribbble', icon: 'dr' },
    { href: 'https://twitter.com/harshavirat', label: 'Twitter', icon: 'tw' },
  ];

  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse-scale pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Harsha Virat</h3>
            <p className="text-gray-400 text-sm">
              UI/UX Designer & AI Full-Stack Developer creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
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
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Harsha Virat. All rights reserved.
          </p>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Get in touch</p>
            <a
              href="mailto:arrimallaharshavardhan@gmail.com"
              className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 active:scale-95 transition-all"
            >
              arrimallaharshavardhan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
