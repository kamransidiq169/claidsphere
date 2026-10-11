"use client";

import { useEffect } from "react";

/** Moves --mx/--my on the hero so the ambient light eases toward the pointer. Fine pointers only. */
export function HeroPointerLight({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    };
    el.addEventListener("pointermove", move, { passive: true });
    return () => { el.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, [targetId]);
  return null;
}
