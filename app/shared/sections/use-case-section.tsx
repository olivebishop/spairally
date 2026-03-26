"use client";

import Image from "next/image";
import Link from "next/link";
import GrainOverlay, { NoiseTexture } from "@/app/shared/grain";
import { USE_CASE_MOBILE_CARDS, USE_CASE_SECTION } from "@/data/use-case";

export default function UseCaseSection() {
  return (
    <section
      id="use-case"
      className="content-section section-anchor relative isolate w-full overflow-hidden bg-[#080808]"
      aria-labelledby="use-case-heading"
    >
      <GrainOverlay position="absolute" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2
              id="use-case-heading"
              className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl xl:text-[52px]"
            >
              {USE_CASE_SECTION.headingLines[0]}
              <br />
              {USE_CASE_SECTION.headingLines[1]}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-white/55 sm:text-base">
              {USE_CASE_SECTION.subline}
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex shrink-0 items-center self-start rounded-none bg-white px-6 py-3 text-[13px] font-semibold text-[#080808] no-underline transition-all hover:bg-white/90 lg:mt-2"
          >
            {USE_CASE_SECTION.ctaLabel}
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-14">
          {/* Card 1 — show only on sm+; on mobile render text-only version */}
          <div className="group relative hidden flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#111] sm:flex sm:min-h-[400px] lg:min-h-[440px]">
            <div className="absolute inset-x-0 top-0 z-20 p-4 sm:p-5">
              <div className="inline-flex items-center gap-2.5 rounded-none bg-black/70 px-3.5 py-2 backdrop-blur-sm border border-white/[0.06]">
                <span className="text-lg font-bold text-white sm:text-xl">
                  94%
                </span>
                <span className="text-[11px] leading-tight text-white/50">
                  Detection Accuracy
                </span>
              </div>
            </div>

            <div className="relative flex-1">
              <Image
                src="/images/spot.png"
                alt="Spot concealed weapons before anyone else"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 0vw, 33vw"
              />
              <NoiseTexture />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
              <p className="text-[15px] font-bold leading-snug text-white sm:text-base lg:text-lg">
                Spot Concealed Weapons
              </p>
              <p className="text-[15px] leading-snug text-white/50 sm:text-base lg:text-lg">
                Before Anyone Else Does
              </p>
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36"
              style={{ background: "linear-gradient(to top, #111 10%, transparent 100%)" }}
            />
          </div>

          {/* Card 2 — show only on sm+; on mobile render text-only version */}
          <div className="group relative hidden flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#0e0e0e] sm:flex sm:min-h-[400px] lg:min-h-[440px]">
            <div className="absolute inset-x-0 top-0 z-20 p-5 text-center sm:p-6">
              <p className="text-[12px] text-white/40 sm:text-[13px]">
                AI-Powered Real-Time
              </p>
              <p className="text-[15px] font-bold text-white sm:text-base lg:text-lg">
                Threat Detection Engine
              </p>
            </div>

            <div className="relative flex-1">
              <Image
                src="/images/detect_threat.png"
                alt="Real-time threat processing"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 0vw, 33vw"
              />
              <NoiseTexture />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
              <div className="inline-flex items-center gap-2.5 rounded-none bg-black/70 px-3.5 py-2 backdrop-blur-sm border border-white/[0.06]">
                <span className="text-lg font-bold text-white sm:text-xl">
                  3.2M+
                </span>
                <span className="text-[11px] leading-tight text-white/50">
                  Threats Assessed Daily
                </span>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28"
              style={{ background: "linear-gradient(to bottom, #0e0e0e 5%, transparent 100%)" }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
              style={{ background: "linear-gradient(to top, #0e0e0e 5%, transparent 100%)" }}
            />
          </div>

          {/* Card 3 — show only on sm+; on mobile render text-only version */}
          <div className="group relative hidden flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#0c0c0c] sm:flex sm:min-h-[400px] lg:min-h-[440px]">
            <div className="absolute inset-x-0 top-0 z-20 flex justify-end p-4 sm:p-5">
              <div className="inline-flex items-center gap-2.5 rounded-none bg-black/70 px-3.5 py-2 backdrop-blur-sm border border-white/[0.06]">
                <span className="text-lg font-bold text-white sm:text-xl">
                  99.8%
                </span>
                <span className="text-[11px] leading-tight text-white/50">
                  Uptime Reliability
                </span>
              </div>
            </div>

            <div className="relative flex-1">
              <Image
                src="/images/protection.png"
                alt="Always-on threat protection platform"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 0vw, 33vw"
              />
              <NoiseTexture />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
              <p className="text-[15px] font-bold leading-snug text-white sm:text-base lg:text-lg">
                Always-On Protection
              </p>
              <p className="text-[15px] leading-snug text-white/50 sm:text-base lg:text-lg">
                When Every Second Counts
              </p>
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36"
              style={{ background: "linear-gradient(to top, #0c0c0c 10%, transparent 100%)" }}
            />
          </div>

          <div className="relative flex flex-col gap-3 sm:hidden">
            {USE_CASE_MOBILE_CARDS.map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-none border border-white/[0.08] p-5"
                style={{ backgroundColor: card.bg }}
              >
                <NoiseTexture className="opacity-40" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    {"eyebrow" in card && card.eyebrow ? (
                      <p className="text-[12px] text-white/40">{card.eyebrow}</p>
                    ) : null}
                    <p className="text-[15px] font-bold leading-snug text-white">
                      {card.title}
                    </p>
                    {"subtitle" in card && card.subtitle ? (
                      <p className="mt-1 text-[13px] leading-snug text-white/50">
                        {card.subtitle}
                      </p>
                    ) : null}
                  </div>
                  <div className="ml-4 shrink-0 text-right">
                    <span className="text-lg font-bold text-white">{card.statValue}</span>
                    <p className="text-[10px] text-white/40">{card.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
