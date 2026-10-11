"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives every [data-reveal] element in the document. Content is visible by
 * default; the `js` class (set before paint in layout) opts into the hidden
 * initial state, and a timeout guarantees nothing stays hidden.
 */
export function RevealRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (!els.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const failsafe = window.setTimeout(() => els.forEach((el) => el.classList.add("is-in")), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
