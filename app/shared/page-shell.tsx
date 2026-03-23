"use client";

import Navbar from "@/app/shared/navbar";
import Footer from "@/app/shared/footer";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-[#080808] [--nav-height:4rem] lg:[--nav-height:72px] [--safe-top:env(safe-area-inset-top,0px)] [--nav-slab-height:calc(var(--nav-height)+var(--safe-top))]">
      <div className="relative min-h-dvh flex-1">
        <Navbar loaded={true} />
        <div className="pt-[var(--nav-slab-height)]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
