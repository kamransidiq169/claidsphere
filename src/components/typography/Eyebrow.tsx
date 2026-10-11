import type { ReactNode } from "react";

export function Eyebrow({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <p className="label eyebrow">
      {index && <span className="eyebrow__idx">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
