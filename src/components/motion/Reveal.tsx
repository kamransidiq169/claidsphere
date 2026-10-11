import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  /** seconds */
  delay?: number;
  className?: string;
  id?: string;
  /** Above-the-fold: CSS-only entrance on load. "rise" is transform-only so the text is painted (and counted for LCP) from the first frame. */
  immediate?: boolean | "rise";
};

/** fadeReveal — opacity + small vertical displacement. */
export function Reveal({ as: Tag = "div", children, delay = 0, className, id, immediate }: Props) {
  return (
    <Tag {...(immediate ? { "data-enter": immediate === "rise" ? "rise" : "fade" } : { "data-reveal": "fade" })} id={id} className={className} style={{ "--d": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
