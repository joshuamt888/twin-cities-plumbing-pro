"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 500, suffix: "+", label: "Jobs Completed", sublabel: "in the Twin Cities" },
  { value: 4.9, suffix: "", label: "Star Rating", sublabel: "127 Google reviews", isDecimal: true },
  { value: 24, suffix: "/7", label: "Emergency Line", sublabel: "always someone live" },
  { value: 15, suffix: "+", label: "Years Experience", sublabel: "licensed master plumbers" },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(
    stat.isDecimal ? Math.floor(stat.value * 10) : stat.value,
    1.8,
    started
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue = stat.isDecimal ? (count / 10).toFixed(1) : count.toString();

  return (
    <ScrollReveal delay={index * 100} dir="scale" className="text-center">
      <div ref={ref}>
        <div className="text-5xl md:text-6xl font-black text-white mb-2 tabular-nums">
          {displayValue}
          <span className="text-[#4d8eff]">{stat.suffix}</span>
        </div>
        <div className="text-white font-bold text-lg mb-1">{stat.label}</div>
        <div className="text-white/50 text-sm">{stat.sublabel}</div>
      </div>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1e6bff]/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-center text-[#4d8eff] font-semibold text-sm uppercase tracking-widest mb-12">
            By the Numbers
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
