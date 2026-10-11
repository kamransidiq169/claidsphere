import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  href?: string;
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

const Arrow = () => (
  <svg className="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export function Button({ href, variant = "primary", children, className, type = "button", disabled, external, onClick, ...rest }: Props) {
  const cls = cn("btn", `btn--${variant}`, className);
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <Arrow />
    </>
  );
  if (href) {
    return external ? (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer" {...rest}>{inner}</a>
    ) : (
      <Link className={cls} href={href} {...rest}>{inner}</Link>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
