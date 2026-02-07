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
      image: '/images/projects/hita_logo.png',
      color: 'from-blue-600 to-indigo-500',
      bg: 'bg-white',
      textColor: 'text-black',
      subTextColor: 'text-gray-600',
      badgeBg: 'bg-black/5',
      badgeText: 'text-gray-500',
      number: '01',
      link: '/projects/hita'
    },
    {
      title: 'Miraee',
      subtitle: 'AI-powered travel companion',
      image: '/images/projects/miraee_logo.png',
      color: 'from-orange-500 to-amber-400',
      bg: 'bg-white',
      textColor: 'text-black',
      subTextColor: 'text-gray-600',
      badgeBg: 'bg-black/5',
      badgeText: 'text-gray-500',
      number: '02',
      link: '/projects/miraee'
    },
    {
      title: 'Aarna',
      subtitle: 'AI Assistant for creating travel experiences',
      image: '/images/projects/aarna_logo.png',
      color: 'from-lime-500 to-green-400',
      bg: 'bg-black',
      textColor: 'text-white',
      subTextColor: 'text-white/60',
      badgeBg: 'bg-white/10',
      badgeText: 'text-white/70',
      number: '03',
      link: '/projects/aarna'
    },
    {
      title: 'Pranik',
      subtitle: 'AI healthcare companion focused on trust',
      image: '/images/projects/pranik_logo.png',
      color: 'from-orange-500 to-brown-400',
      bg: 'bg-[#F9F6F2]',
      textColor: 'text-black',
      subTextColor: 'text-gray-600',
      badgeBg: 'bg-black/5',
      badgeText: 'text-gray-500',
      number: '04',
      link: '/projects/pranik'
    },
    {
      title: 'Mondee',
      subtitle: 'Enterprise travel & hospitality platforms',
      image: '/images/projects/mondee_logo_v2.png',
      color: 'from-orange-500 to-red-400',
      bg: 'bg-[#0F172A]',
      textColor: 'text-white',
      subTextColor: 'text-white/60',
      badgeBg: 'bg-white/10',
      badgeText: 'text-white/70',
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
          transition: isHovered
            ? 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), translate 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
            : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), translate 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
          opacity: isInView ? 1 : 0,
          translate: isInView ? '0 0' : '0 50px',
        }}
        className="group cursor-pointer perspective-1000 block h-full mb-8 md:mb-0"
      >
        {/* Mobile: Editorial Layout (Image Top, Text Bottom) */}
        <div className="md:hidden flex flex-col gap-4">
          <div className={`relative aspect-[4/3] w-full rounded-[20px] overflow-hidden shadow-sm border border-black/5 ${project.bg}`}>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={true}
                />
              </div>
            </div>

            {/* Mobile Badge */}
            <div className="absolute top-3 left-3">
              <div className={`px-2.5 py-1 rounded-full ${project.badgeBg} backdrop-blur-md border border-black/5 text-[10px] font-bold ${project.badgeText}`}>
                {project.number}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start px-1">
            <h3 className="text-2xl font-black text-black mb-1 leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed mb-3">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider">
              Explore Project <span className="text-lg">→</span>
            </div>
          </div>
        </div>


        {/* Desktop: Immersive Overlay Card (Unchanged for Desktop) */}
        <div
          className={`hidden md:block relative aspect-[4/5] w-full rounded-[32px] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 ${project.bg} border border-black/5`}
          style={{
            transform: 'translateZ(0)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700 ease-out group-hover:scale-110">
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-all duration-500 group-hover:scale-105"
                priority={true}
              />
            </div>
          </div>

          {/* Liquid Gradient Overlay */}


          {/* Subtle Gradient Overlay for Content Legibility */}
          <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${project.bg === 'bg-black' || project.bg === 'bg-slate-900' ? 'from-black/60' : 'from-black/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Content Container */}
          <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full z-10">

            {/* Top Badge: Project Number */}
            <div className="absolute top-6 left-6">
              <div className={`px-4 py-1.5 rounded-full ${project.badgeBg} backdrop-blur-md border border-black/5 text-xs font-bold ${project.badgeText}`}>
                {project.number}
              </div>
            </div>

            {/* Main Text Content */}
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className={`text-3xl font-black ${project.textColor} mb-2 tracking-tight`}>
                {project.title}
              </h3>
              <p className={`${project.subTextColor} text-base font-medium line-clamp-2 mb-4 group-hover:${project.textColor} transition-colors`}>
                {project.subtitle}
              </p>

              {/* Action Button */}
              <div className="overflow-hidden h-0 group-hover:h-12 transition-[height] duration-300 ease-out">
                <div className={`flex items-center gap-2 ${project.textColor} font-bold border-b ${project.bg === 'bg-black' || project.bg === 'bg-slate-900' ? 'border-white/40' : 'border-black/40'} pb-1 w-fit group-hover:${project.bg === 'bg-black' || project.bg === 'bg-slate-900' ? 'border-white' : 'border-black'} transition-colors cursor-pointer text-base`}>
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

