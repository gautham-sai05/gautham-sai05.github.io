'use client';

import { useEffect, useRef, useState } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: React.RefObject<Element | null>,
  options: InViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once in view, unobserve to prevent re-triggering
          if (ref.current) {
            observerRef.current?.unobserve(ref.current);
          }
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isInView;
}
