"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    el.style.opacity = "0";
    el.style.transition = `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`;

    if (direction === "up") el.style.transform = "translateY(40px)";
    else if (direction === "left") el.style.transform = "translateX(-40px)";
    else if (direction === "right") el.style.transform = "translateX(40px)";
    else el.style.transform = "none";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "none";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
