"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_PRODUCT_LINKS, LEGAL_LINKS } from "@/app/shared/links";
import GrainOverlay from "@/app/shared/grain";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "#", icon: "github" },
  { label: "X (Twitter)", href: "#", icon: "x" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
] as const;

export default function Footer() {
  return (
    <footer
      className="footer-section relative border-t border-neutral-200 bg-white font-[var(--font-inter),system-ui,sans-serif text-neutral-900"
      role="contentinfo"
    >
      <GrainOverlay position="absolute" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 [&_img]:invert">
              <Image
                src="/images/logo.png"
                alt="Spairally"
                width={130}
                height={32}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-neutral-600">
              The AI-powered security platform that detects concealed weapons in real
              time and delivers instant alerts — keeping communities safe.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-none border-none bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
                >
                  {label === "GitHub" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {label === "X (Twitter)" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {label === "LinkedIn" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:gap-12">
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_PRODUCT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[14px] text-neutral-600 transition-colors hover:text-neutral-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {LEGAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[14px] text-neutral-600 transition-colors hover:text-neutral-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-12 border-t border-neutral-200 pt-8 lg:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[13px] text-neutral-500">
              © {new Date().getFullYear()} Spairally. All rights reserved.
            </p>
            <div className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:flex">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
