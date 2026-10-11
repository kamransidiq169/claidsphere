import type { CSSProperties, ElementType } from "react";

type Props = {
  lines: string[];
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
  /** Above-the-fold: CSS-only entrance on load. */
  immediate?: boolean;
};

/** textReveal / lineReveal — each line slides up from behind a mask. */
export function Lines({ lines, as: Tag = "h2", className, delay = 0, id, immediate }: Props) {
  return (
    <Tag id={id} className={className} {...(immediate ? { "data-enter": "lines" } : { "data-reveal": "lines" })} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span className="line" aria-hidden="true" key={i}>
          <span className="line__in" style={{ "--d": `${delay + i * 0.09}s` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
