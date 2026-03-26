"use client";

import Image from "next/image";
import AppStoreIcon from "@/app/svg/appstore";
import PlayStoreIcon from "@/app/svg/playstore";
import GrainOverlay from "@/app/shared/grain";
import { ParallaxImage } from "@/app/shared/parallax-image";

type HeroProps = {
  loaded: boolean;
  onHeroImageLoad: () => void;
};

export default function Hero({ loaded, onHeroImageLoad }: HeroProps) {
  return (
    <div className="relative z-20 flex w-full flex-col pt-[calc(var(--nav-height)+1.5rem)] sm:pt-[calc(var(--nav-height)+2rem)] lg:pt-[calc(var(--nav-height)+3rem)]">
      {/* Mobile background image — visible only on small screens */}
      <div className="pointer-events-none absolute inset-0 z-0 sm:hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          onLoad={onHeroImageLoad}
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        <GrainOverlay position="absolute" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/40" />
      </div>

      {/* Text area — same side padding as navbar */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        {/* Radar arcs — concentric, emanating from bottom-left */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 z-0 hidden lg:block"
          width="560"
          height="560"
          viewBox="0 0 560 560"
          fill="none"
          aria-hidden
          style={{ transform: "translate(-15%, 30%)" }}
        >
          <circle cx="0" cy="560" r="140" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <circle cx="0" cy="560" r="240" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
          <circle cx="0" cy="560" r="360" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="0" cy="560" r="500" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
        </svg>

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column — small note pinned to bottom on desktop */}
          <div className="relative order-2 lg:order-1 lg:flex lg:flex-col lg:justify-end lg:pb-1">
            <div
              className={`flex items-start gap-3 ${
                loaded ? "anim-up-4" : "opacity-0"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mt-0.5 shrink-0 text-white/40"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4" />
              </svg>
              <p className="text-[13px] leading-relaxed text-white/45 sm:text-sm">
                Trusted by security teams across schools, venues & public
                spaces.
              </p>
            </div>
          </div>

          {/* Right column — headline, description, CTAs */}
          <div className="order-1 lg:order-2">
            <h1
              className={`font-extrabold tracking-[-0.04em] text-white text-[32px] leading-[1.08] sm:text-[44px] lg:text-[56px] xl:text-[64px] ${
                loaded ? "anim-up-2" : "opacity-0"
              }`}
            >
              Detect threats.
              <br />
              Protect lives.
            </h1>

            <p
              className={`mt-5 max-w-[480px] text-[15px] leading-[1.7] text-white/60 sm:text-base lg:mt-6 lg:text-[17px] ${
                loaded ? "anim-up-3" : "opacity-0"
              }`}
            >
              Spairally detects concealed weapons in real time using your
              phone — silently, accurately, at scale. Instant alerts delivered
              before it&apos;s too late.
            </p>

            {/* CTAs — App Store + Google Play */}
            <div
              className={`mt-8 flex flex-row flex-wrap items-center gap-3 sm:gap-4 lg:mt-10 ${
                loaded ? "anim-up-4" : "opacity-0"
              }`}
            >
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

      {/* Hero image — same side padding as navbar so edges align with logo & CTA */}
      <div
        className={`mt-10 hidden w-full px-4 sm:mt-12 sm:block sm:px-6 lg:mt-16 lg:px-12 ${
          loaded ? "anim-up-5" : "opacity-0"
        }`}
      >
        <ParallaxImage
          speed={0.04}
          className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[16/7]"
        >
          <Image
            src="/images/hero.png"
            alt="AI-powered concealed weapon detection"
            fill
            className="object-cover object-center"
            onLoad={onHeroImageLoad}
            priority
            sizes="(max-width: 640px) 0vw, 100vw"
          />
          <GrainOverlay position="absolute" />
        </ParallaxImage>
      </div>

      {/* Extra bottom spacing on mobile since image is a bg */}
      <div className="h-6 sm:hidden" />
    </div>
  );
}
