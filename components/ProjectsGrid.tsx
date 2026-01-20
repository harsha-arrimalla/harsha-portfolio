'use client';

import { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

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
    <section id="projects" ref={ref} className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-[0.02] animate-spin-slow"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div
            className={`flex items-center gap-4 mb-8 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className={`h-[2px] bg-black transition-all duration-700 ${isInView ? 'w-[60px]' : 'w-0'}`}
            />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500">Selected Work</span>
          </div>

          <div className="overflow-hidden">
            <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              {'Featured'.split('').map((char, i) => (
                <span
                  key={i}
                  className={`inline-block cursor-default transition-all duration-300 hover:text-blue-600 hover:-translate-y-1 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char}
                </span>
              ))}
              {' '}
              {'Projects'.split('').map((char, i) => (
                <span
                  key={i + 10}
                  className={`inline-block text-gray-400 cursor-default transition-all duration-300 hover:text-purple-600 hover:-translate-y-1 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(i + 8) * 0.05}s` }}
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View all button */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <button
            className="group px-10 py-4 border-2 border-black rounded-full font-medium relative overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span
              className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
            <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
              View All Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 10;
    const y = (e.clientY - centerY) / 10;
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
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          opacity: isInView ? 1 : 0,
          translate: isInView ? '0 0' : '0 50px',
        }}
        className="group cursor-pointer perspective-1000 block h-full transition-all duration-500"
      >
        <div
          className={`aspect-[4/5] bg-gradient-to-br ${project.bg} rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 relative`}
          style={{
            filter: isHovered ? 'brightness(1.05)' : 'brightness(1)',
          }}
        >
          {/* Project number */}
          <div
            className={`absolute top-6 left-6 text-sm font-mono text-gray-400 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
          >
            {project.number}
          </div>

          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          />

          {/* Shine effect */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
            style={{
              transform: isHovered ? 'translateX(100%) rotate(45deg)' : 'translateX(-100%) rotate(45deg)',
            }}
          />

          {/* Content */}
          <div className="w-full h-full flex flex-col items-center justify-center p-8 relative z-10" style={{ transform: 'translateZ(50px)' }}>
            <div
              className={`w-full aspect-video rounded-2xl overflow-hidden mb-6 transition-all duration-700 ${isInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
              style={{
                transitionDelay: `${0.4 + index * 0.1}s`,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-black transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500">{project.subtitle}</p>
            </div>
          </div>

          {/* Arrow indicator */}
          <div
            className={`absolute bottom-6 right-6 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <span className="animate-bounce-horizontal">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

