"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, LEGAL_LINKS } from "@/app/shared/links";

/** Desktop nav bar height — mobile uses `var(--nav-height)` from `.hero-section` in globals.css */
export const NAV_HEIGHT = 72;

type NavbarProps = {
  loaded: boolean;
};

export default function Navbar({ loaded }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeIfOutside = (e: MouseEvent | TouchEvent) => {
      const el = headerRef.current;
      if (el && !el.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", closeIfOutside);
    document.addEventListener("touchstart", closeIfOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", closeIfOutside);
      document.removeEventListener("touchstart", closeIfOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header box-border absolute top-0 right-0 left-0 z-30 flex h-[var(--nav-slab-height)] items-center pt-[var(--safe-top)] px-4 sm:px-6 lg:px-12 ${loaded ? "anim-nav" : "opacity-0"}`}
    >
      <div className="flex h-full min-w-0 flex-1 items-center gap-4 sm:gap-6 lg:gap-10">
        <div className="flex h-full shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Spairally"
            width={150}
            height={36}
            className="block h-7 w-auto align-middle sm:h-8"
            priority
          />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 xl:gap-x-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="nav-link text-[14px] leading-none font-medium whitespace-nowrap text-white/45 no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="flex h-full shrink-0 items-center gap-3">
        <a
          href="#"
          className="cta-btn hidden items-center justify-center rounded-none border-none bg-white px-5 py-[9px] text-[13px] leading-none font-semibold tracking-[0.01em] text-[#080808] no-underline lg:inline-flex"
        >
          Preorder Now
        </a>

        <button
          type="button"
          className="nav-menu-toggle inline-flex lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-nav-mobile"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="site-nav-mobile"
          className="fixed inset-x-0 bottom-0 z-[60] flex flex-col border-t border-white/10 bg-[#080808]/98 px-4 pt-3 backdrop-blur-md lg:hidden"
          style={{
            top: "var(--nav-slab-height)",
            paddingBottom: "max(2rem, env(safe-area-inset-bottom, 0px))",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="flex min-h-0 flex-1 flex-col" aria-label="Primary">
            <ul className="nav-mobile-list m-0 list-none p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="nav-mobile-link"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 py-4">
              <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-white/45">
                Legal
              </p>
              <ul className="m-0 list-none p-0">
                {LEGAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="nav-mobile-link"
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-white/10 pt-5">
              <a
                href="#"
                className="nav-mobile-cta cta-btn flex w-full items-center justify-center rounded-none border-none bg-white py-3.5 text-[15px] font-semibold text-[#080808] no-underline"
                onClick={closeMenu}
              >
                Preorder Now
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
