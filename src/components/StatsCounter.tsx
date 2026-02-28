import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  suffix = '',
  label,
  icon
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1600;
          const stepTime = 20;
          const increment = value / (duration / stepTime);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="bg-white p-10 rounded-2xl text-center shadow-sm border border-slate-100
        hover:-translate-y-2 transition-transform duration-300"
    >
      <span className="material-symbols-outlined text-primary mb-4 block text-3xl">
        {icon}
      </span>

      <div className="text-4xl font-extrabold text-slate-900 mb-2">
        {count}
        {suffix}
      </div>

      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

export default StatsCounter;