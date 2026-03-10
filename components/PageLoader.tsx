'use client';

import { useLoading } from './LoadingContext';

// PageLoader no longer has its own loading overlay — LoadingScreen in layout handles that.
// This component simply reveals children with a cinematic entrance once loading completes.
export default function PageLoader({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <div
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        !isLoading
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-8 blur-sm pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}
