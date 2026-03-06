"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const marqueeItems = [
  "Next.js", "TailwindCSS", "React", "TypeScript",
  "Responsive Design", "SEO", "Performance", "Clean Code",
  "Next.js", "TailwindCSS", "React", "TypeScript",
  "Responsive Design", "SEO", "Performance", "Clean Code",
];

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      pos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Smooth lerp loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.06);
      current.current.y = lerp(current.current.y, pos.current.y, 0.06);

      if (glow) {
        glow.style.transform = `translate(${current.current.x - 350}px, ${current.current.y - 350}px)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    // Start centered
    const rect = section.getBoundingClientRect();
    pos.current = { x: rect.width / 2, y: rect.height / 2 };
    current.current = { x: rect.width / 2, y: rect.height / 2 };

    section.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh flex flex-col dot-grid overflow-hidden"
    >
      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.13) 0%, rgba(139,92,246,0.07) 40%, transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform",
          top: 0,
          left: 0,
        }}
      />

      {/* Static ambient — fades dot grid in center so text reads clearly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 42%, rgba(8,8,16,0.65) 0%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pt-24 pb-12 text-center">
        {/* Eyebrow */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/35 mb-8">
          Freelance Web Developer
        </p>

        {/* Headline */}
        <h1
          className="font-bold text-white leading-[1.06] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", maxWidth: "820px" }}
        >
          Modern websites built to make{" "}
          <span className="text-gradient">businesses look better</span>{" "}
          online
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/40 leading-relaxed mb-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "480px" }}
        >
          I design and build clean, fast, premium websites for businesses
          that want a stronger online presence and a more professional brand.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/20"
          >
            View My Work
            <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 text-white/60 hover:text-white hover:border-white/25 font-semibold text-sm transition-all duration-200"
          >
            Start a Project
          </a>
        </div>

        <div className="divider w-full max-w-xs mx-auto mt-16" />
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 w-full overflow-hidden border-t border-white/6 py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 pr-10 text-xs font-medium tracking-widest uppercase text-white/20"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-white/15 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
