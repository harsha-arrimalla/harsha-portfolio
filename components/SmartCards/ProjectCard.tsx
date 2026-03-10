'use client';

import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link: string;
  variant?: 'light' | 'dark';
};

export function ProjectCard({
  title,
  description,
  image,
  tags = [],
  link,
  variant = 'light',
}: ProjectCardProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href={link}
      className={`block min-w-[280px] max-w-[320px] rounded-2xl border p-4 transition-transform hover:-translate-y-1 ${
        isDark ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-slate-100">
        <Image src={image} alt={title} fill className="object-cover" sizes="320px" />
      </div>

      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'} text-sm leading-relaxed mb-3`}>{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded-full ${
                isDark ? 'bg-white/10 text-slate-200' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
