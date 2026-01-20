'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Link from 'next/link';

interface ProjectDetailProps {
  title: string;
  category: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string[];
}

export default function ProjectDetail({
  title,
  category,
  role,
  duration,
  overview,
  problem,
  solution,
  impact,
}: ProjectDetailProps) {
  const [ref, isInView] = useIntersection({ threshold: 0.1, once: true });

  return (
    <div ref={ref} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors mb-8"
          >
            ← Back to Projects
          </Link>

          <div
            className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              {category}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {overview}
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-8 mt-12 pt-12 border-t border-gray-200 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div>
              <p className="text-sm text-gray-500 mb-2">Role</p>
              <p className="font-medium">{role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Duration</p>
              <p className="font-medium">{duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Problem */}
          <div
            className={`transition-all duration-1000 reveal ${isInView ? 'active' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{problem}</p>
          </div>

          {/* Solution */}
          <div
            className={`transition-all duration-1000 reveal ${isInView ? 'active delay-200' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{solution}</p>
          </div>

          {/* Impact */}
          <div
            className={`transition-all duration-1000 reveal ${isInView ? 'active delay-400' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impact.map((item, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                  className={`bg-gray-50 rounded-2xl p-6 transition-all duration-700 reveal ${isInView ? 'active' : ''}`}
                >
                  <p className="text-4xl font-bold mb-2">{item.split(':')[0]}</p>
                  <p className="text-gray-600">{item.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in working together?
          </h2>
          <Link
            href="/#contact"
            className="inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
