import type { ReactNode } from "react";

/** Eyebrow with a section index and an optional technical coordinate on the right. */
export function SectionLabel({ index, children, meta }: { index: string; children: ReactNode; meta?: ReactNode }) {
  return (
    <p className="hx-label hx-slabel" data-reveal="sys">
      <span className="hx-slabel__idx">{index}</span>
      <span className="hx-slabel__rule" aria-hidden="true" />
      <span>{children}</span>
      {meta && <span className="hx-slabel__meta">{meta}</span>}
    </p>
  );
}
