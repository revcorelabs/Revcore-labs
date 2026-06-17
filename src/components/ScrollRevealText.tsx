"use client";
import { useEffect, useRef } from "react";

interface Segment {
  text: string;
  amber?: boolean;
}

interface Props {
  segments: Segment[];
  className?: string;
}

export default function ScrollRevealText({ segments, className }: Props) {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const totalWords = segments.reduce((acc, s) => acc + s.text.trim().split(/\s+/).length, 0);

  useEffect(() => {
    const PX_PER_WORD = 22;
    const TRANSITION_PX = 90;

    const update = () => {
      const scrollY = window.scrollY;
      wordsRef.current.forEach((word, i) => {
        if (!word) return;
        const progress = Math.min(1, Math.max(0, (scrollY - i * PX_PER_WORD) / TRANSITION_PX));
        const isAmber = word.dataset.amber === "true";
        if (isAmber) {
          const r = Math.round(217 + (217 - 217) * progress);
          const g = Math.round(119 + (119 - 119) * progress);
          const b = Math.round(6 + (6 - 6) * progress);
          const alpha = 0.25 + progress * 0.75;
          word.style.color = `rgba(217,119,6,${alpha})`;
        } else {
          const alpha = 0.18 + progress * 0.82;
          word.style.color = `rgba(250,250,249,${alpha})`;
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  let wordCount = 0;

  return (
    <h1 className={className}>
      {segments.map((seg, si) => {
        const words = seg.text.trim().split(/\s+/);
        return (
          <span key={si} className={seg.amber ? undefined : "h1-plain"} style={seg.amber ? { display: "block" } : undefined}>
            {words.map((word, wi) => {
              const idx = wordCount++;
              const isLast = si === segments.length - 1 && wi === words.length - 1;
              return (
                <span
                  key={wi}
                  ref={(el) => { wordsRef.current[idx] = el; }}
                  data-amber={seg.amber ? "true" : "false"}
                  style={{
                    color: seg.amber ? "rgba(217,119,6,0.25)" : "rgba(250,250,249,0.18)",
                    transition: "color 0.15s ease",
                    display: "inline",
                  }}
                >
                  {word}{!isLast ? " " : ""}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
