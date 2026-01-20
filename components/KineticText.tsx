'use client';

import { useInView as useIntersection } from '@/hooks/useInView';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export default function KineticText({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h2'
}: KineticTextProps) {
  const [ref, isInView] = useIntersection({ threshold: 0.1, once: true });
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className}>
      <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${delay + index * 80}ms`,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              opacity: isInView ? 1 : 0
            }}
            className="hover:-translate-y-1 hover:text-blue-500 transition-colors duration-200 cursor-default"
          >
            {word}
          </span>
        ))}
      </span>
    </Tag>
  );
}

// Utility component for letter-by-letter animation
export function KineticLetters({
  text,
  className = '',
  delay = 0
}: { text: string; className?: string; delay?: number }) {
  const [ref, isInView] = useIntersection({ threshold: 0.1, once: true });

  return (
    <span ref={ref} className={className}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: `${delay + index * 30}ms`,
            transform: isInView ? 'translateY(0)' : 'translateY(50px)',
            opacity: isInView ? 1 : 0
          }}
          className="hover:-translate-y-2 hover:scale-125 hover:text-blue-500 transition-all duration-200 cursor-default"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
}
