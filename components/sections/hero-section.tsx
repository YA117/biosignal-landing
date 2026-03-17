"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1c1917] topo-pattern">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917] via-transparent to-[#1c1917]/80" />

      {/* Signal wave motif - SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <svg
          viewBox="0 0 1200 200"
          className="w-full max-w-5xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 Q150 20 300 100 T600 100 T900 100 T1200 100"
            stroke="#c4733b"
            strokeWidth="2"
          />
          <path
            d="M0 100 Q150 180 300 100 T600 100 T900 100 T1200 100"
            stroke="#c4733b"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl text-center">
          {/* Label */}
          <p className="animate-fade-in-up text-xs uppercase tracking-[0.3em] text-[#c4733b] sm:text-sm">
            A New Framework for Skin Health
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 mt-8 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your skin is not the problem.
            <br />
            <span className="italic text-[#c4733b]">It is the signal.</span>
          </h1>

          {/* Supporting line */}
          <p className="animate-fade-in-up delay-200 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg" style={{ lineHeight: "1.7" }}>
            BioSignal is a structured system that decodes what your skin is
            communicating — and addresses the cause, not just the symptom.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-300 mt-12">
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-medium text-[#1c1917] transition-all hover:bg-[#c4733b] hover:text-white hover:border-[#c4733b]"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-up delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
