'use client';

import { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';

export default function ProjectsGrid() {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '20% 0px' });

  const projects = [
    {
      title: 'Hita',
      subtitle: 'AI Travel Companion with Autonomous Agency',
      image: '/images/projects/hita.png',
      color: 'from-indigo-600 to-violet-500',
      bg: 'from-indigo-50 to-violet-50',
      number: '01',
      link: '/projects/hita'
    },
    {
      title: 'Miraee',
      subtitle: 'AI-powered travel companion',
      image: '/images/projects/miraee.png',
      color: 'from-blue-500 to-indigo-400',
      bg: 'from-blue-50 to-indigo-50',
      number: '02',
      link: '/projects/miraee'
    },
    {
      title: 'Aarna',
      subtitle: 'AI Assistant for creating travel experiences',
      image: '/images/projects/aarna.png',
      color: 'from-blue-500 to-cyan-400',
      bg: 'from-blue-50 to-cyan-50',
      number: '03',
      link: '/projects/aarna'
    },
    {
      title: 'Pranik',
      subtitle: 'AI healthcare companion focused on trust',
      image: '/images/projects/pranik.png',
      color: 'from-purple-500 to-pink-400',
      bg: 'from-purple-50 to-pink-50',
      number: '04',
      link: '/projects/pranik'
    },
    {
      title: 'Mondee',
      subtitle: 'Enterprise travel & hospitality platforms',
      image: '/images/projects/mondee.png',
      color: 'from-orange-500 to-red-400',
      bg: 'from-orange-50 to-red-50',
      number: '05',
      link: '/projects/mondee'
    },
  ];

  // Consistent smooth easing
  const smoothEase = [0.25, 0.1, 0.25, 1];

  const textReveal = {
    hidden: { y: '100%' },
    visible: (i: number) => ({
      y: '0%',
      transition: {
        duration: 0.4,
        delay: i * 0.01,
        ease: smoothEase,
      },
    }),
  };

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 lg:py-40 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] pointer-events-none opacity-[0.02] animate-spin-slow"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-[1px] bg-black w-12 md:w-20" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold text-gray-400">Selected Works</span>
          </div>

          <KineticText
            className="text-5xl md:text-8xl font-black tracking-tighter text-black"
            type="char"
            duration={0.8}
          >
            Featured Projects
          </KineticText>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Determine if it's a touch device (simple check)
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouch) return; // Disable hover tilt on touch
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 20;
    const y = (e.clientY - centerY) / 20;
    setRotation({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Link href={project.link || '#'}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: !isTouch ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'none',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          opacity: isInView ? 1 : 0,
          translate: isInView ? '0 0' : '0 50px',
        }}
        className="group cursor-pointer perspective-1000 block h-full transition-all duration-700 delay-[100ms]"
      >
        <div
          className="relative aspect-[4/5] w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-gray-900 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10"
          style={{
            transform: 'translateZ(0)',
          }}
        >
          <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              priority={index < 3}
            />
          </div>

          {/* Liquid Gradient Overlay - Stronger on mobile for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 md:opacity-80 transition-opacity duration-500 md:group-hover:opacity-90" />

          {/* Glass Shine (Desktop only) */}
          <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:animate-shine" />
          </div>

          {/* Content Container */}
          <div className="absolute inset-x-0 bottom-0 p-6 pr-20 md:pr-8 md:p-8 flex flex-col justify-end h-full z-10">

            {/* Top Badge: Project Number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-medium text-white/90">
                {project.number}
              </div>
            </div>

            {/* Main Text Content */}
            <div className="transform transition-transform duration-500 ease-out md:group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/80 md:text-white/60 text-sm md:text-base font-medium line-clamp-2 mb-4 md:group-hover:text-white/80 transition-colors">
                {project.subtitle}
              </p>

              {/* Action Button - Always visible on mobile, reveal on hover on desktop */}
              <div className="overflow-hidden h-10 md:h-0 md:group-hover:h-12 transition-[height] duration-300 ease-out">
                <div className="flex items-center gap-2 text-white font-medium border-b border-white/40 pb-1 w-fit group-hover:border-white transition-colors cursor-pointer text-sm md:text-base">
                  View Case Study
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

