"use client";

import { useRef, useEffect, ReactNode, CSSProperties } from "react";

export type RevealDir = "up" | "left" | "right" | "scale" | "fade";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number; // ms
  dir?: RevealDir;
}

export default function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  dir = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already visible in the viewport, skip animation entirely
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    // Element is off-screen — safe to hide and animate on scroll
    el.setAttribute("data-reveal", "hidden");
    el.setAttribute("data-dir", dir);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              if (el) el.setAttribute("data-reveal", "visible");
            }, delay);
          } else {
            el.setAttribute("data-reveal", "visible");
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, dir]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
