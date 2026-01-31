'use client';

import { useState, useEffect } from 'react';
import { useLoading } from './LoadingContext';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Faster loading - complete in ~0.6 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setIsLoading(false), 300); // Shorter exit
          }, 200); // Shorter wait at 100%
          return 100;
        }
        return prev + 25 + Math.random() * 15; // Increased step size
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Animated logo/name */}
          <div className="mb-12 overflow-hidden">
            <h1 className={`text-4xl md:text-6xl font-black flex`}>
              {'Harsha'.split('').map((letter, i) => (
                <span
                  key={i}
                  className={`inline-block animate-slide-up`}
                  style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Progress text */}
          <p
            className={`mt-4 text-sm text-gray-400 font-mono transition-opacity duration-500 ${progress > 20 ? 'opacity-100' : 'opacity-0'}`}
          >
            {Math.min(Math.round(progress), 100)}%
          </p>

          {/* Animated dots */}
          <div className="absolute bottom-20 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-black rounded-full animate-pulse-gentle"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main content with staggered entrance */}
      <div
        className={`transition-all duration-700 ease-out ${!isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {children}
      </div>
    </>
  );
}
