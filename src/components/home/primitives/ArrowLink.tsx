import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** Text link with an underline that draws in and an arrow that advances. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("hx-arrowlink", className)}>
      <span className="hx-arrowlink__t">{children}</span>
      <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
    </Link>
  );
}
