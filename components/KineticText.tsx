'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface KineticTextProps {
  children: string;
  className?: string;
  as?: React.ElementType;
  type?: 'word' | 'char';
  delay?: number;
  duration?: number;
}

export default function KineticText({
  children,
  className,
  as: Component = 'h2',
  type = 'word',
  delay = 0,
  duration = 0.8,
}: KineticTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });

  const text = children;
  // Split by specific delimiter based on type
  const items = type === 'word' ? text.split(' ') : text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <Component
      ref={ref}
      className={cn('inline-block tracking-tight leading-tight', className)} // default styling
      aria-label={text}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="inline-block" // Ensure container handles inline-block correctly
      >
        {items.map((item, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block whitespace-pre"
          >
            {item}
            {/* If char mode, we might want to handle spaces explicitly if the split removed them, 
                but text.split('') preserves spaces as separate items usually. 
                Wait, 'word' split removes spaces. 'char' split preserves them.
                Special handling for spaces in 'char' mode not needed as they are chars.
                For 'word' mode, we need to re-add space logic or just use gaps.
             */}
            {type === 'word' && '\u00A0'}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
