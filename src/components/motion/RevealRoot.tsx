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

    // A fully clipped element (clip-path: inset(100%)) has no visible area, so it can never intersect.
    // Clip/wipe reveals are therefore observed through their parent and measured against their own box.
    const clipped = (el: HTMLElement) => el.dataset.reveal === "clip" || el.dataset.reveal === "wipe";
    const proxies = new Map<Element, HTMLElement[]>();
    const reveal = (el: HTMLElement) => el.classList.add("is-in");
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      return r.top < vh * 0.94 && r.bottom > 0;
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const group = proxies.get(e.target);
          if (group) {
            const rest = group.filter((el) => (inView(el) ? (reveal(el), false) : true));
            if (rest.length) proxies.set(e.target, rest);
            else { proxies.delete(e.target); io.unobserve(e.target); }
          } else if (e.isIntersecting && e.intersectionRatio >= 0.12) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: [0, 0.12, 0.25, 0.5, 0.75, 1], rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => {
      const host = clipped(el) ? el.parentElement : null;
      if (host) proxies.set(host, [...(proxies.get(host) ?? []), el]);
      else io.observe(el);
    });
    proxies.forEach((_, host) => io.observe(host));

    const failsafe = window.setTimeout(() => els.forEach((el) => el.classList.add("is-in")), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
