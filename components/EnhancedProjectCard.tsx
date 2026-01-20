'use client';

import Link from 'next/link';

interface EnhancedProjectCardProps {
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

export default function EnhancedProjectCard({
  title,
  category,
  description,
  metrics,
  href,
  featured = false,
  className,
}: EnhancedProjectCardProps) {

  return (
    <Link href={href}>
      <div
        className={`group relative bg-[#1A1A1A] border border-[#252525] rounded-lg overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#333] ${featured ? 'md:col-span-2' : ''
          } ${className || ''}`}
      >
        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#151515]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-bold text-white/30">{title.charAt(0)}</span>
              </div>
              <p className="text-xs text-gray-600 uppercase tracking-wider">{title}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="mb-4">
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="pt-6 border-t border-[#252525]">
              <div className="flex gap-6 md:gap-8">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
