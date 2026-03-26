"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SocialGitHubIcon,
  SocialLinkedInIcon,
  SocialXIcon,
} from "@/app/svg/social-icons";
import GrainOverlay from "@/app/shared/grain";
import { FOOTER_SOCIAL_LINKS, FOOTER_TAGLINE } from "@/data/footer";
import { FOOTER_PRODUCT_LINKS, LEGAL_LINKS } from "@/data/navigation";

function SocialIcon({ icon }: { icon: (typeof FOOTER_SOCIAL_LINKS)[number]["icon"] }) {
  if (icon === "github") return <SocialGitHubIcon />;
  if (icon === "x") return <SocialXIcon />;
  return <SocialLinkedInIcon />;
}

export default function Footer() {
  return (
    <footer
      className="footer-section relative border-t border-neutral-200 bg-white font-[var(--font-inter),system-ui,sans-serif] text-neutral-900"
      role="contentinfo"
    >
      <GrainOverlay position="absolute" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
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
              {FOOTER_TAGLINE}
            </p>
            <div className="mt-6 flex gap-3">
              {FOOTER_SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-none border-none bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

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
