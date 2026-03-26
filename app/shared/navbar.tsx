"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuCloseIcon, MenuHamburgerIcon } from "@/app/svg/menu-icons";
import { NAV_LINKS } from "@/data/navigation";
import { NoiseTexture } from "@/app/shared/grain";

/** Desktop nav bar height — mobile uses `var(--nav-height)` from `.hero-section` in globals.css */
export const NAV_HEIGHT = 72;

export default function Navbar() {
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
      className="site-header box-border absolute top-0 right-0 left-0 z-30 flex h-[var(--nav-slab-height)] items-start pt-[var(--safe-top)] px-4 sm:px-6 lg:px-12"
    >
      <NoiseTexture className="opacity-30" />

      {/* Mobile: simple flex row; Desktop: 3-column grid */}
      <div className="relative z-10 flex h-[var(--nav-height)] w-full items-center justify-between lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        {/* Logo */}
        <div className="flex h-full min-w-0 items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Spairally"
              width={150}
              height={36}
              className="block h-7 w-auto sm:h-8 lg:h-7 xl:h-8"
              priority
            />
          </Link>
        </div>

        {/* Desktop nav links */}
        <nav
          className="hidden min-w-0 h-full items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <div className="flex h-full items-center justify-center">
            {NAV_LINKS.map(({ label, href }, idx) => (
              <div key={label} className="flex items-center">
                <Link
                  href={href}
                  className="nav-link px-1 text-[13px] leading-none font-medium whitespace-nowrap text-white/50 no-underline xl:text-[14px]"
                >
                  {label}
                </Link>
                {idx < NAV_LINKS.length - 1 ? (
                  <span
                    className="mx-3 h-4 w-px bg-white/20 xl:mx-4"
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>
        </nav>

        {/* Right side: desktop CTA + mobile hamburger */}
        <div className="flex h-full min-w-0 items-center justify-end gap-3">
          <a
            href="#"
            className="cta-btn hidden h-8 items-center justify-center rounded-none border-none bg-white px-5 py-0 text-[13px] leading-none font-semibold tracking-[0.01em] text-[#080808] no-underline lg:inline-flex xl:h-9"
          >
            Preorder Now
          </a>

          <button
            type="button"
            className="nav-menu-toggle inline-flex items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-nav-mobile"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <MenuCloseIcon /> : <MenuHamburgerIcon />}
          </button>
        </div>
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
          <NoiseTexture className="opacity-30" />
          <nav className="relative z-10 flex min-h-0 flex-1 flex-col" aria-label="Primary">
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
