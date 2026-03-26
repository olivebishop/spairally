"use client";

import { useState } from "react";
import GrainOverlay, { NoiseTexture } from "@/app/shared/grain";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !confirmed) return;
    setSubmitted(true);
  }

  return (
    <main className="relative isolate overflow-hidden bg-[#080808] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 font-[var(--font-inter),system-ui,sans-serif]">
      <GrainOverlay position="absolute" />

      {/* Radar arcs */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-0 hidden lg:block"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        aria-hidden
        style={{ transform: "translate(-20%, 30%)" }}
      >
        <circle cx="0" cy="520" r="140" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <circle cx="0" cy="520" r="240" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
        <circle cx="0" cy="520" r="360" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx="0" cy="520" r="500" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl lg:text-[42px] leading-[1.12]">
          Delete Your Spairally Account
        </h1>
        <p className="mt-4 text-[15px] leading-[1.7] text-white/55 sm:text-base">
          You can request account deletion without using the app.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-none border border-white/[0.08] bg-[#111] p-6 sm:p-8">
          <NoiseTexture className="opacity-40" />
          <h2 className="relative z-10 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
            What happens when you delete your account
          </h2>
          <p className="mt-3 text-[14px] leading-[1.7] text-white/50 sm:text-[15px]">
            When you submit this request, we will permanently delete your
            Spairally account and associated personal data.
          </p>

          <ul className="mt-5 space-y-2.5">
            {[
              "Account profile information (email, name)",
              "User preferences and settings",
              "Usage records associated with your account",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-white/30"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span className="text-[14px] leading-[1.6] text-white/60">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
            <p className="text-[13px] leading-[1.65] text-white/40">
              <span className="font-semibold text-white/55">Data retention:</span>{" "}
              Some information may be retained for legal, security, or
              fraud-prevention purposes where required by law.
            </p>
            <p className="text-[13px] leading-[1.65] text-white/40">
              <span className="font-semibold text-white/55">Deletion timeframe:</span>{" "}
              Account deletion is completed within 30 days.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="relative mt-8 overflow-hidden rounded-none border border-white/[0.08] bg-[#111] p-6 sm:p-8 text-center">
            <NoiseTexture className="opacity-40" />
            <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-none border border-white/[0.08] bg-white/[0.04]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Request submitted</h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-white/50">
              We&apos;ve received your deletion request for <span className="font-medium text-white/70">{email}</span>.
              You&apos;ll receive a confirmation email shortly. Your account will be
              deleted within 30 days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative mt-8 overflow-hidden rounded-none border border-white/[0.08] bg-[#0e0e0e] p-6 sm:p-8">
            <NoiseTexture className="opacity-40" />
            <h2 className="relative z-10 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
              Request Account Deletion
            </h2>
            <p className="mt-2 text-[14px] leading-[1.65] text-white/45">
              Enter the email address associated with your account to request
              deletion.
            </p>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-[13px] font-medium text-white/60"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 block w-full rounded-none border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/25 focus:bg-white/[0.05]"
              />
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 appearance-none rounded-none border border-white/20 bg-transparent checked:border-white checked:bg-white transition-colors cursor-pointer"
              />
              <span className="text-[13px] leading-[1.6] text-white/50">
                I understand that this action is permanent and cannot be undone
              </span>
            </label>

            <button
              type="submit"
              disabled={!email || !confirmed}
              className="mt-6 w-full rounded-none bg-white px-6 py-3.5 text-[14px] font-semibold text-[#080808] transition-all hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
            >
              Delete My Account
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
