"use client";

import Image from "next/image";
import AppStoreIcon from "@/app/svg/appstore";
import PlayStoreIcon from "@/app/svg/playstore";
import { RadarArcs } from "@/app/svg/radar-arcs";
import { IconCircleChevron } from "@/app/svg/icon-circle-chevron";
import GrainOverlay from "@/app/shared/grain";
import { ParallaxImage } from "@/app/shared/parallax-image";
import {
  HERO_BODY,
  HERO_HEADING_LINES,
  HERO_TRUSTED_CAPTION,
} from "@/data/hero";

export default function Hero() {
  return (
    <div className="relative z-20 flex w-full flex-col pt-[calc(var(--nav-height)+1.5rem)] sm:pt-[calc(var(--nav-height)+2rem)] lg:pt-[calc(var(--nav-height)+3rem)]">
      {/* Mobile background image — visible only on small screens */}
      <div className="pointer-events-none absolute inset-0 z-0 sm:hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
          fetchPriority="high"
          sizes="100vw"
          aria-hidden
        />
        <GrainOverlay position="absolute" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/40" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <RadarArcs variant="hero" />

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative order-2 lg:order-1 lg:flex lg:flex-col lg:justify-end lg:pb-1">
            <div className="flex items-start gap-3">
              <IconCircleChevron className="mt-0.5 shrink-0 text-white/40" />
              <p className="text-[13px] leading-relaxed text-white/45 sm:text-sm">
                {HERO_TRUSTED_CAPTION}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="font-extrabold tracking-[-0.04em] text-white text-[32px] leading-[1.08] sm:text-[44px] lg:text-[56px] xl:text-[64px]">
              {HERO_HEADING_LINES[0]}
              <br />
              {HERO_HEADING_LINES[1]}
            </h1>

            <p className="mt-5 max-w-[480px] text-[15px] leading-[1.7] text-white/60 sm:text-base lg:mt-6 lg:text-[17px]">
              {HERO_BODY}
            </p>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-3 sm:gap-4 lg:mt-10">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="store-badge inline-flex items-center justify-center gap-3 bg-white rounded-none px-6 py-2.5 min-h-[46px] text-neutral-900 no-underline"
              >
                <AppStoreIcon size={20} className="shrink-0" />
                <div className="flex flex-col gap-0.5 [color:inherit] text-left min-w-0">
                  <span className="text-[9px] font-medium tracking-widest uppercase leading-none">
                    Download on the
                  </span>
                  <span className="text-[14px] font-bold tracking-tight leading-none">
                    App Store
                  </span>
                </div>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="store-badge inline-flex items-center justify-center gap-3 bg-white rounded-none px-6 py-2.5 min-h-[46px] text-neutral-900 no-underline"
              >
                <PlayStoreIcon size={20} className="shrink-0" />
                <div className="flex flex-col gap-0.5 [color:inherit] text-left min-w-0">
                  <span className="text-[9px] font-medium tracking-widest uppercase leading-none">
                    Get it on
                  </span>
                  <span className="text-[14px] font-bold tracking-tight leading-none">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 hidden w-full px-4 sm:mt-12 sm:block sm:px-6 lg:mt-16 lg:px-12">
        <ParallaxImage
          speed={0.04}
          className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[16/7]"
        >
          <Image
            src="/images/hero.png"
            alt="AI-powered concealed weapon detection"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 0vw, 100vw"
          />
          <GrainOverlay position="absolute" />
        </ParallaxImage>
      </div>

      <div className="h-6 sm:hidden" />
    </div>
  );
}
