/**
 * Orbit fragment: two concentric rings, one lit arc and a node, in the Hero's vocabulary.
 * Coordinates live in a 1364 × 900 plane pinned to a corner of the section and scaled by width,
 * so each section shows a different part of the same system at the same scale. Draw-in is driven by CSS.
 */
type Props = { cx: number; cy: number; r: number; from: number; to: number; align?: "left-top" | "right-top" | "center-top" | "left-bottom" | "right-bottom" | "center-bottom"; className?: string };

const pt = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [+(cx + r * Math.cos(a)).toFixed(1), +(cy + r * Math.sin(a)).toFixed(1)] as const;
};

export function Geo({ cx, cy, r, from, to, align = "right-top", className }: Props) {
  const [x1, y1] = pt(cx, cy, r, from);
  const [x2, y2] = pt(cx, cy, r, to);
  return (
    <div className={`hx-geo${className ? ` ${className}` : ""}`} data-align={align} aria-hidden="true">
      <svg viewBox="0 0 1364 900" fill="none" preserveAspectRatio="xMidYMid meet">
        <circle className="hx-geo__ring" cx={cx} cy={cy} r={r} pathLength="1" />
        <circle className="hx-geo__ring hx-geo__ring--b" cx={cx} cy={cy} r={r * 0.76} pathLength="1" />
        <path className="hx-geo__arc" d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`} pathLength="1" />
        <circle className="hx-geo__node" cx={x2} cy={y2} r="2.5" />
      </svg>
    </div>
  );
}
