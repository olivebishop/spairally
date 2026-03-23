"use client";

import Image from "next/image";
import AppStoreIcon from "@/app/svg/appstore";
import PlayStoreIcon from "@/app/svg/playstore";
import { ImageGrain } from "@/app/shared/grain";

type HeroProps = {
  loaded: boolean;
  onHeroImageLoad: () => void;
};

export default function Hero({ loaded, onHeroImageLoad }: HeroProps) {
  return (
    <>
      {/* Image: full bleed on mobile, right side on lg+ */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] z-0">
        <Image
          src="/images/hero.png"
          alt="AI-powered concealed weapon detection"
          fill
          className="object-cover object-center blur-md lg:blur-none transition-[filter] duration-300"
          onLoad={onHeroImageLoad}
          priority
          sizes="(max-width: 1023px) 100vw, 52vw"
        />
        <ImageGrain />
        {/* Gradient overlays: stronger on mobile for text readability */}
        <div
          className="absolute inset-y-0 left-0 w-32 sm:w-40 lg:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #080808 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 sm:h-32 lg:h-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #080808 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #080808 0%, transparent 100%)",
          }}
        />
        {/* Extra dark overlay on mobile for text contrast */}
        <div
          className="absolute inset-0 lg:hidden z-10 pointer-events-none opacity-50"
          style={{
            background: "linear-gradient(135deg, #080808 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="absolute left-0 top-0 z-20 flex h-full w-full lg:w-[52%] flex-col px-4 pt-[var(--nav-height)] pb-8 sm:px-6 sm:pb-12 lg:px-12 lg:pb-0">
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <div className="flex flex-col max-w-[500px] w-full">
            <div
              className={`flex items-center gap-3 mb-6 ${loaded ? "anim-up-1" : "opacity-0"}`}
            />

            <h1
              className={`font-extrabold tracking-[-0.035em] text-white mb-3 text-3xl sm:text-4xl lg:text-[52px] xl:text-[60px] leading-tight ${loaded ? "anim-up-2" : "opacity-0"}`}
            >
              <span className="block">Detect threats.</span>
              <span className="block">Protect lives.</span>
            </h1>

            <p
              className={`font-extrabold tracking-[-0.035em] mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-[52px] xl:text-[60px] leading-tight text-white/15 ${loaded ? "anim-up-2" : "opacity-0"}`}
            >
              Before it&apos;s too late.
            </p>

            <div
              className={`w-7 h-0.5 rounded-sm bg-white/20 mb-4 sm:mb-7 ${loaded ? "anim-up-3" : "opacity-0"}`}
            />

            <p
              className={`mb-2 max-w-[380px] text-sm sm:text-base font-normal leading-relaxed text-white/60 tracking-wide ${loaded ? "anim-up-3" : "opacity-0"}`}
            >
              Threats don&apos;t announce themselves. Spairally detects concealed
              weapons in real time — silently, accurately, at scale — and
              delivers instant alerts directly to your phone.
            </p>

            <p
              className={`mb-6 sm:mb-9 text-sm sm:text-base font-medium leading-snug text-white/85 tracking-wide ${loaded ? "anim-up-3" : "opacity-0"}`}
            >
              Every community deserves to feel safe.
            </p>

            <div
              className={`flex flex-col sm:flex-row sm:flex-wrap items-stretch gap-3 sm:gap-3 mb-4 sm:mb-5 ${loaded ? "anim-up-4" : "opacity-0"}`}
            >
              <a
                href="#"
                aria-label="Download on the App Store"
                className="store-badge flex flex-1 min-h-[52px] min-w-0 sm:min-w-[160px] items-center justify-center gap-2.5 bg-white rounded-none py-3 px-5 sm:py-2.5 sm:px-4 no-underline text-neutral-900"
              >
                <AppStoreIcon size={24} className="shrink-0" />
                <div className="flex flex-col gap-0.5 [color:inherit] text-left min-w-0">
                  <span className="text-xs font-medium tracking-widest uppercase leading-none">
                    Download on the
                  </span>
                  <span className="text-base font-bold tracking-tight leading-none">
                    App Store
                  </span>
                </div>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="store-badge flex flex-1 min-h-[52px] min-w-0 sm:min-w-[160px] items-center justify-center gap-2.5 bg-white rounded-none py-3 px-5 sm:py-2.5 sm:px-4 no-underline text-neutral-900"
              >
                <PlayStoreIcon size={24} className="shrink-0" />
                <div className="flex flex-col gap-0.5 [color:inherit] text-left min-w-0">
                  <span className="text-xs font-medium tracking-widest uppercase leading-none">
                    Get it on
                  </span>
                  <span className="text-base font-bold tracking-tight leading-none">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            <p
              className={`text-[10px] sm:text-[11px] font-normal text-white/32 tracking-wider leading-snug ${loaded ? "anim-up-5" : "opacity-0"}`}
            >
              Trusted by security teams across schools, venues & public spaces.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
