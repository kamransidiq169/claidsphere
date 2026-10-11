import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** "royal" = the Hero / Trust / Intro scenes (each styles itself); "flow" = every section after, one deep-blue family. */
export type Tone = "royal" | "flow";

type Props = {
  tone: Tone;
  id?: string;
  labelledBy?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** Render children without the width-capped wrapper (for full-bleed compositions). */
  bare?: boolean;
  /** Full-section decoration (orbit fragments), rendered behind the wrapper. */
  backdrop?: ReactNode;
  children: ReactNode;
};

export function Band({ tone, id, labelledBy, label, className, style, bare, backdrop, children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : label} data-theme="dark" data-tone={tone} className={cn("hx-sec", className)} style={style}>
      {backdrop}
      {bare ? children : <div className="hx-wrap">{children}</div>}
    </section>
  );
}
