"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; body?: string };

/** Scroll-linked: a rail fills with reading progress; the current stage is emphasised. */
export function ProcessSteps({ steps }: { steps: readonly Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(list.children) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(items.indexOf(e.target as HTMLElement));
      },
      { rootMargin: "-42% 0px -52% 0px" },
    );
    items.forEach((el) => io.observe(el));

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = list.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - r.top) / r.height));
      list.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf && !reduced) raf = requestAnimationFrame(update); };
    if (!reduced) { update(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll); }
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <ol className="process" ref={listRef}>
      {steps.map((s, i) => (
        <li key={s.title} data-state={active === null ? undefined : i < active ? "done" : i === active ? "active" : "todo"}>
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.title}</h3>
          {s.body && <p>{s.body}</p>}
        </li>
      ))}
    </ol>
  );
}
