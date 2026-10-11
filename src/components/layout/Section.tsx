import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  theme?: "dark" | "light" | "graphite";
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ theme = "dark", id, labelledBy, className, children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} data-theme={theme} className={cn("section", className)}>
      <div className="container">{children}</div>
    </section>
  );
}
