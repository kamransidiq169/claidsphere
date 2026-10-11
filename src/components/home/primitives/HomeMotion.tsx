"use client";

import { useEffect } from "react";

/**
 * The homepage's single scroll loop: one passive listener, one rAF, one IntersectionObserver (for what is near the viewport).
 * It only writes CSS variables, so layout never changes:
 *  - #hero        → --hp (0..1): headline lift, stage scale, orbit shift
 *  - [data-parallax] → --py (-1..1): slow image drift while in view
 *  - .hx-intro      → --ip (0..1): corridor image opens from the axis, statement lines part, node travels
 *  - .hx-cta      → --ap (0..1): how far the closing section has risen into view (light and orbit brighten)
 * Entrance reveals are RevealRoot's job (once per element). Under reduced motion nothing is attached.
 */
export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = document.getElementById("hero");
    const cta = document.querySelector<HTMLElement>(".hx-cta");
    const introEl = document.querySelector<HTMLElement>(".hx-intro");
    const watched = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const near = new Set<HTMLElement>();
    let raf = 0;

    const method = document.querySelector<HTMLElement>(".hx-method");
    const mTrack = method?.querySelector<HTMLElement>(".hx-m-track");
    const mList = method?.querySelector<HTMLElement>(".hx-m-stages");
    const mItems = method ? Array.from(method.querySelectorAll<HTMLElement>(".hx-m-panel, .hx-m-step")) : [];
    const mN = method ? method.querySelectorAll(".hx-m-panel").length : 0;
    const pinned = window.matchMedia("(min-width: 1100px) and (min-height: 620px)");
    let mActive = -1;
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    /** Methodology: pinned → --f (stage position 0..n-1) and --e (closing line); list → --mp (rail fill). Class-like state only when the stage changes. */
    const runMethod = (vh: number) => {
      if (!method || !mTrack || !mList) return;
      const t = mTrack.getBoundingClientRect();
      if (t.bottom < -vh || t.top > vh * 2) return;
      let active: number;
      if (pinned.matches) {
        const g = clamp01((-t.top / (t.height - vh) - 0.04) / 0.92) * (mN - 0.5);
        const f = Math.min(g, mN - 1);
        method.style.setProperty("--f", f.toFixed(3));
        method.style.setProperty("--e", clamp01((g - (mN - 1)) * 2).toFixed(3));
        active = Math.round(f);
      } else {
        const l = mList.getBoundingClientRect();
        const line = vh * 0.55;
        method.style.setProperty("--mp", clamp01((line - l.top) / l.height).toFixed(3));
        const tops = Array.from(mList.children, (c) => c.getBoundingClientRect().top);
        active = Math.max(0, tops.filter((y) => y < line).length - 1);
      }
      if (active === mActive) return;
      mActive = active;
      mItems.forEach((el) => { const i = Number(el.dataset.stage); el.dataset.state = i < active ? "past" : i === active ? "on" : "next"; });
    };

    const run = () => {
      raf = 0;
      const vh = window.innerHeight;
      runMethod(vh);
      if (hero) hero.style.setProperty("--hp", Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.9))).toFixed(3));

      if (introEl) {
        const r = introEl.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.95 - r.top) / (vh * 0.75)));
        introEl.style.setProperty("--ip", (1 - Math.pow(1 - p, 3)).toFixed(3));
      }
      if (cta) {
        const r = cta.getBoundingClientRect();
        cta.style.setProperty("--ap", Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9))).toFixed(3));
      }
      near.forEach((el) => {
        const r = (el.parentElement ?? el).getBoundingClientRect();
        el.style.setProperty("--py", Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh)).toFixed(3));
      });
    };
    const tick = () => { if (!raf) raf = requestAnimationFrame(run); };

    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (e.isIntersecting) near.add(e.target as HTMLElement);
        else near.delete(e.target as HTMLElement);
      }
      tick();
    }, { rootMargin: "20% 0px" });
    watched.forEach((el) => io.observe(el));

    run();
    window.addEventListener("scroll", tick, { passive: true });
    const onResize = () => { mActive = -1; tick(); };
    window.addEventListener("resize", onResize);
    return () => { io.disconnect(); window.removeEventListener("scroll", tick); window.removeEventListener("resize", onResize); cancelAnimationFrame(raf); };
  }, []);
  return null;
}
