'use client';

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  image: string;
  href: string;
  featured?: boolean;
  className?: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  metrics,
  href,
  featured = false,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] ${featured ? 'col-span-2' : ''
        } ${className || ''}`}
    >
      <Link href={href}>
        {/* Image */}
        <div className="relative h-[360px] overflow-hidden">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform duration-500 group-hover:scale-105"
          >
            {/* Placeholder for project image */}
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              {title} Image
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category & Title */}
          <div className="mb-3">
            <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-3">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
              <div className="flex gap-6">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
