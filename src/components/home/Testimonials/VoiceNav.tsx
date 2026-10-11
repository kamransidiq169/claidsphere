import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Voice } from "./Stage";

const pad = (n: number) => String(n).padStart(2, "0");

/** Manual controls: a numbered index whose active entry extends into a rule, plus Previous / Next. */
export function VoiceNav({ items, active, onSelect }: { items: Voice[]; active: number; onSelect: (k: number) => void }) {
  const n = items.length;
  if (n < 2) return null;
  return (
    <nav className="hx-vnav" aria-label="Testimonial navigation">
      <ol className="hx-vnav__index">
        {items.map((t, k) => (
          <li key={t.name + k} className="hx-vnav__item" data-active={k === active ? "" : undefined}>
            <button type="button" className="hx-vnav__num" aria-current={k === active ? "true" : undefined} aria-label={`Testimonial ${k + 1} of ${n}: ${t.name}${t.organisation ? `, ${t.organisation}` : ""}`} onClick={() => onSelect(k)}>
              <span className="hx-label" aria-hidden="true">{pad(k + 1)}</span>
              <span className="hx-vnav__bar" aria-hidden="true" />
            </button>
          </li>
        ))}
        <li className="hx-vnav__count hx-label" aria-hidden="true">{pad(active + 1)} <i>/</i> {pad(n)}</li>
      </ol>

      <div className="hx-vnav__step">
        <button type="button" className="hx-vnav__btn hx-vnav__btn--prev" aria-label="Previous testimonial" aria-disabled={active === 0 ? "true" : undefined} onClick={() => onSelect(active - 1)}>
          <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
          <span className="hx-label">Previous</span>
        </button>
        <button type="button" className="hx-vnav__btn hx-vnav__btn--next" aria-label="Next testimonial" aria-disabled={active === n - 1 ? "true" : undefined} onClick={() => onSelect(active + 1)}>
          <span className="hx-label">Next</span>
          <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
