"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { primaryNav } from "@/data/navigation";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";

/** Pixels scrolled before the bar becomes "defined", and before it may retreat. */
const SCROLLED_AT = 24;
const HIDE_AFTER = 600;
const SCROLL_DELTA = 6;
/** Must match the nav breakpoint in header.css (60rem). */
const DESKTOP_QUERY = "(min-width: 60rem)";

const FOCUSABLE = "a[href], button:not([disabled])";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Menu is open only for the pathname it was opened on, so navigating closes it without an effect
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > SCROLLED_AT);
      if (y > HIDE_AFTER && y - last > SCROLL_DELTA) setHidden(true);
      else if (last - y > SCROLL_DELTA || y < HIDE_AFTER) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock, Escape, focus trap and focus restoration while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const toggle = toggleRef.current;
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAt(null);
      if (e.key !== "Tab" || !headerRef.current) return;
      const f = Array.from(headerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.getClientRects().length > 0);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    // The mobile menu is display:none on desktop; never leave the page scroll-locked behind it
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onMq = () => { if (mq.matches) setOpenAt(null); };
    mq.addEventListener("change", onMq);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      toggle?.focus();
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      ref={headerRef}
      className="header"
      data-scrolled={scrolled}
      data-open={open}
      data-hidden={hidden && !open}
      onFocusCapture={() => setHidden(false)}
    >
      <div className="container header__bar">
        <Logo />
        <nav className="header__nav" aria-label="Primary">
          {primaryNav.map((item, i) => (
            <Link key={item.href} href={item.href} className="navlink" aria-current={isActive(item.href) ? "page" : undefined}>
              <span className="navlink__idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header__actions">
          <Link href="/contact" className="header__cta">
            <span>Talk to an Expert</span>
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <MenuToggle ref={toggleRef} open={open} onToggle={() => setOpenAt(open ? null : pathname)} />
        </div>
      </div>
      <MobileMenu ref={menuRef} open={open} isActive={isActive} />
    </header>
  );
}
