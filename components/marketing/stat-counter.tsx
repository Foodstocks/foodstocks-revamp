'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  suffix?: string;
  className?: string;
  durationMs?: number;
};

export function StatCounter({ to, suffix = '', className = '', durationMs = 1600 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('id-ID')}{suffix}
    </span>
  );
}
