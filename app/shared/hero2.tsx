"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GrainOverlay from "@/app/shared/grain";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .anim-nav  { animation: fadeIn 0.45s ease 0.0s both; }
  .anim-up-1 { animation: fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
  .anim-up-2 { animation: fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.20s both; }
  .anim-up-3 { animation: fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.30s both; }
  .anim-up-4 { animation: fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.40s both; }

  .nav-link {
    color: rgba(255,255,255,0.62);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.15s ease;
    white-space: nowrap;
  }
  .nav-link:hover { color: rgba(255,255,255,0.95); }

  .login-btn {
    color: rgba(255,255,255,0.68);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.15s ease;
    white-space: nowrap;
  }
  .login-btn:hover { color: rgba(255,255,255,1); }

  .book-btn {
    background: #fff;
    color: #0a0a0a;
    font-size: 13.5px;
    font-weight: 600;
    padding: 9px 20px;
    border-radius: 7px;
    text-decoration: none;
    letter-spacing: -0.01em;
    white-space: nowrap;
    transition: background 0.15s ease, transform 0.15s ease;
  }
  .book-btn:hover {
    background: rgba(255,255,255,0.86);
    transform: translateY(-1px);
  }

  .run-btn {
    display: inline-flex;
    align-items: center;
    background: #fff;
    color: #0a0a0a;
    font-size: 14px;
    font-weight: 600;
    padding: 11px 24px;
    border-radius: 8px;
    text-decoration: none;
    letter-spacing: -0.01em;
    transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
  }
  .run-btn:hover {
    background: rgba(255,255,255,0.84);
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(255,255,255,0.10);
  }
`;

const NAV_HEIGHT = 56;

export default function SpairallyHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = fontStyle;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="relative w-screen h-screen bg-[#0a0a0a] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <GrainOverlay />

      {/* ── HERO IMAGE — hard split, no fade, right 45% ── */}
      <div
        className="absolute right-0 top-0 h-full z-0"
        style={{ width: "45%" }}
      >
        <Image
          src="/images/hero.png"
          alt="AI-powered concealed weapon detection"
          fill
          className="object-cover object-center"
          onLoad={() => setLoaded(true)}
          priority
          sizes="45vw"
        />
      </div>

      {/* ── NAV — full width, logo + center links + right CTAs ── */}
      <nav
        className={`absolute top-0 left-0 right-0 z-30 flex items-center px-10 ${loaded ? "anim-nav" : "opacity-0"}`}
        style={{ height: NAV_HEIGHT }}
      >
        {/* Logo */}
        <div className="flex items-center shrink-0 mr-10">
          <Image
            src="/images/logo.png"
            alt="Spairally"
            width={130}
            height={30}
            style={{ width: "auto", height: 28 }}
            priority
          />
        </div>

        {/* Nav links — left-of-center */}
        <div className="flex items-center gap-7">
          {["Solutions", "Use Case", "Security", "Data Center"].map((l) => (
            <a key={l} href="#" className="nav-link">{l}</a>
          ))}
        </div>

        {/* Auth CTAs — far right */}
        <div className="ml-auto flex items-center gap-6">
          <a href="#" className="book-btn bg-white text-black px-4 py-1 rounded-none">Book a demo</a>
        </div>
      </nav>

      {/* ── LEFT CONTENT PANEL — content pinned to bottom ── */}
      <div
        className="absolute left-0 top-0 z-10 flex flex-col"
        style={{
          width: "55%",
          height: "100%",
          paddingTop: NAV_HEIGHT,
        }}
      >
        {/* Pushes everything to the bottom ~40% */}
        <div className="flex-1" />

        <div style={{ padding: "0 40px 64px 40px" }}>

          {/* H1 — two solid lines, then ghost third line */}
          <h1
            className={`font-bold text-white ${loaded ? "anim-up-1" : "opacity-0"}`}
            style={{
              fontSize: "clamp(38px, 4.6vw, 64px)",
              lineHeight: 1.07,
              letterSpacing: "-0.035em",
              margin: 0,
            }}
          >
            <span className="block">Detect threats.</span>
            <span className="block">Protect lives.</span>
          </h1>

          {/* Ghost line — same scale, 16% opacity */}
          <p
            className={loaded ? "anim-up-1" : "opacity-0"}
            style={{
              fontSize: "clamp(38px, 4.6vw, 64px)",
              lineHeight: 1.07,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              color: "rgba(255,255,255,0.15)",
              margin: 0,
            }}
          >
            Before it's too late.
          </p>

          {/* Gap between headline block and body — generous, mirrors reference */}
          <div style={{ height: 52 }} />

          {/* Body copy */}
          <p
            className={loaded ? "anim-up-2" : "opacity-0"}
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.52)",
              margin: "0 0 2px 0",
              maxWidth: 390,
              letterSpacing: "0.003em",
            }}
          >
            Threats don't announce themselves. Spairally detects concealed
            weapons in real time — silently, accurately, at scale — and
            delivers instant alerts directly to your phone.
          </p>

          {/* Tagline */}
          <p
            className={loaded ? "anim-up-3" : "opacity-0"}
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.88)",
              margin: "0 0 28px 0",
              letterSpacing: "0.003em",
            }}
          >
            Every community deserves to feel safe.
          </p>

          {/* CTA */}
          <div className={loaded ? "anim-up-4" : "opacity-0"}>
            <a href="#" className="run-btn bg-white text-black px-4 py-2 rounded-none">Join the Waitlist</a>
          </div>

        </div>
      </div>
    </section>
  );
}