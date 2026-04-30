import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
}

export function useCountUp({ end, duration = 2500, decimals = 0, start = 0 }: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const [triggered, setTriggered] = useState(false);
  const frameRef = useRef<number | null>(null);

  const trigger = () => setTriggered(true);

  useEffect(() => {
    if (!triggered) return;

    const startTime = performance.now();
    const range = end - start;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = start + range * easedProgress;

      setValue(parseFloat(currentValue.toFixed(decimals)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [triggered, end, start, duration, decimals]);

  return { value, trigger };
}

export function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
