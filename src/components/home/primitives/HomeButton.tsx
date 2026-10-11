import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** Premium CTA: sharp edge, border illumination tracks the pointer (CSS vars), arrow advances. */
export function HomeButton({ href, children, variant = "solid", className }: { href: string; children: ReactNode; variant?: "solid" | "line"; className?: string }) {
  return (
    <Link href={href} className={cn("hx-btn", `hx-btn--${variant}`, className)}>
      <span className="hx-btn__t">{children}</span>
      <span className="hx-btn__arrow" aria-hidden="true"><ArrowRight size={18} strokeWidth={1.5} /></span>
    </Link>
  );
}
