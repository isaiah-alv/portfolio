import { useState, useEffect, useRef } from 'react';

// custom hook to detect when an element enters or leaves the viewport
export function useInView(threshold = 0) {
  const ref = useRef(null); // ref to DOM
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, inView];
}
