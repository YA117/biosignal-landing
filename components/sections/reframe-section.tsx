"use client";

export function ReframeSection() {
  return (
    <section className="w-full bg-[#faf8f5] py-24 px-6 sm:px-12 lg:px-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Section label */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#8a8580]">
          The Problem
        </span>

        {/* Frustration copy */}
        <p className="mt-8 text-xl font-light leading-[1.7] text-[#1c1917] sm:text-2xl md:text-3xl">
          You&apos;ve tried the creams, the routines, the elimination diets.
          You&apos;ve been told it&apos;s hormones, stress, or just something
          you&apos;ll grow out of.
        </p>

        <p className="mt-4 text-xl font-light leading-[1.7] text-[#1c1917]/60 sm:text-2xl md:text-3xl">
          But the breakouts keep coming back.
        </p>

        {/* Divider */}
        <div className="my-12 h-px w-16 bg-[#c4733b]" />

        {/* Reframe copy */}
        <p className="text-base leading-[1.8] text-[#8a8580] sm:text-lg" style={{ lineHeight: "1.8" }}>
          That&apos;s because most approaches treat the surface — not the
          system. Skin conditions like acne, eczema, and rosacea aren&apos;t
          random. They are signals from a body under strain. When you learn to
          read those signals, everything changes.
        </p>
      </div>
    </section>
  );
}
