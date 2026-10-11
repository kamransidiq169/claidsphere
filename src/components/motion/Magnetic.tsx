"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** magneticCTA — a small pointer pull, fine pointers only. Transform-only, rAF-throttled. */
export function Magnetic({ children, strength = 0.22 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let raf = 0;
    const set = (x: number, y: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.transform = `translate3d(${x}px, ${y}px, 0)`; });
    };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      set((e.clientX - (r.left + r.width / 2)) * strength, (e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => set(0, 0);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); cancelAnimationFrame(raf); };
  }, [strength]);

  return <div ref={ref} className="magnetic">{children}</div>;
}
