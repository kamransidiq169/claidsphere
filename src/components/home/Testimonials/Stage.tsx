"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { VoiceNav } from "./VoiceNav";

export type Voice = { quote: string; name: string; role: string; organisation?: string };

const pad = (n: number) => String(n).padStart(2, "0");
/** Matches the longest exit animation in editorial.css. */
const EXIT_MS = 420;

/**
 * Client voices, read one at a time. The active voice is plain React state changed only by the controls
 * (buttons, numbered index, arrow keys) — never by scroll, a timer, or an animation.
 *
 * Every voice is stacked in one grid cell so the stage keeps the height of the longest quote and nothing jumps.
 * The previous voice is kept as `leaving` just long enough to play its exit; the new one plays its entrance.
 */
export function Stage({ items, label }: { items: Voice[]; label: ReactNode }) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [moved, setMoved] = useState(false); // no entrance animation until the visitor has moved once
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const go = useCallback((to: number) => {
    const k = Math.min(n - 1, Math.max(0, to));
    if (k === active) return;
    setDir(k > active ? "next" : "prev");
    setLeaving(active);
    setActive(k);
    setMoved(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLeaving(null), EXIT_MS);
  }, [active, n]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
  };

  return (
    <div className="hx-voice" data-dir={dir} data-moved={moved ? "" : undefined} data-reveal="fade" style={{ "--n": n } as React.CSSProperties} onKeyDown={onKeyDown}>
      <div className="hx-voice__top">
        {label}
      </div>

      <div className="hx-voice__stage" role="group" aria-roledescription="testimonials" aria-label="Client testimonials. Use the left and right arrow keys, or the controls below, to change testimonial." tabIndex={0}>
        <div className="hx-voice__quotes" aria-live="polite" aria-atomic="true">
          {items.map((t, k) => {
            const state = k === active ? "active" : k === leaving ? "leaving" : "idle";
            return (
              <figure key={t.name + k} className="hx-qf" data-state={state} aria-hidden={state === "active" ? undefined : true}>
                <div className="hx-qf__idx" aria-hidden="true">
                  <span className="hx-qf__num">{pad(k + 1)}</span>
                </div>
                <div className="hx-qf__body">
                  <blockquote>
                    <p className="hx-qf__q">&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="hx-qf__cap">
                    <span className="hx-qf__tag">Client</span>
                    <cite className="hx-qf__id">
                      <span className="hx-qf__name">{t.name}</span>
                      <span className="hx-qf__meta">
                        <span className="hx-qf__role">{t.role}</span>
                        {t.organisation && <span className="hx-qf__org">{t.organisation}</span>}
                      </span>
                    </cite>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      <VoiceNav items={items} active={active} onSelect={go} />
    </div>
  );
}
