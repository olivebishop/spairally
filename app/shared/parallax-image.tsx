"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ParallaxImageProps = {
  children: React.ReactNode;
  /** Parallax intensity — higher = more movement (default 0.08) */
  speed?: number;
  className?: string;
};

/**
 * Subtle parallax wrapper for images/blocks.
 * Respects prefers-reduced-motion.
 */
export function ParallaxImage({
  children,
  speed = 0.08,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(ref.current, {
        yPercent: -speed * 100,
        ease: "none",
        force3d: true,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

