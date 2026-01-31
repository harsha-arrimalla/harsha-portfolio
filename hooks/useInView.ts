'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
    once?: boolean;
}

export function useInView(
    options: UseInViewOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
    const { once = true, ...observerOptions } = options;
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            const inView = entry.isIntersecting;
            setIsInView(inView);

            if (inView && once) {
                observer.unobserve(element);
            }
        }, observerOptions);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [once, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

    return [ref, isInView];
}
