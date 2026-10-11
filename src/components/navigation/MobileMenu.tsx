import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Ref } from "react";
import { primaryNav } from "@/data/navigation";
import { contact } from "@/data/company";

type Props = {
  open: boolean;
  isActive: (href: string) => boolean;
  ref?: Ref<HTMLDivElement>;
};

const idx = (n: number) => String(n + 1).padStart(2, "0");
const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function MobileMenu({ open, isActive, ref }: Props) {
  return (
    <div id="mobile-menu" ref={ref} className="mobile-menu" data-open={open} aria-hidden={!open} inert={!open}>
      <div className="container mobile-menu__inner">
        <nav aria-label="Mobile">
          <ol className="mobile-menu__list">
            {primaryNav.map((item, i) => (
              <li key={item.href} style={step(i)}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  <span className="label mobile-menu__idx" aria-hidden="true">{idx(i)}</span>
                  <span className="mobile-menu__text">{item.label}</span>
                  <ArrowUpRight className="mobile-menu__arrow" size={20} strokeWidth={1.25} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu__foot" style={step(primaryNav.length)}>
          <Link href="/contact" className="mobile-menu__cta">
            <span>Talk to an Expert</span>
            <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <dl className="mobile-menu__meta">
            <div>
              <dt className="label">Email</dt>
              <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
            </div>
            <div>
              <dt className="label">Phone</dt>
              <dd><a href={contact.phoneHref}>{contact.phone}</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
