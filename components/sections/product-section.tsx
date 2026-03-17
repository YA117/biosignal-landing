"use client";

import Link from "next/link";

const productFeatures = [
  "90-day supply — one capsule per day",
  "Clinically studied probiotic strains selected for skin outcomes",
  "Zinc, Vitamin D3, prebiotic fibre",
  "Delayed-release capsule technology",
  "Shelf-stable, vegan, non-GMO",
];

export function ProductSection() {
  return (
    <section className="w-full bg-[#faf8f5] py-24 px-6 sm:px-12 lg:px-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8a8580]">
              The Entry Point
            </span>
            <h2 className="mt-4 text-3xl font-light text-[#1c1917] sm:text-4xl md:text-5xl">
              BioSignal <span className="italic">Reset</span>
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-[#8a8580]">
              Your first step into the BioSignal Method. Reset is not a
              standalone supplement — it&apos;s the foundational tool for
              resolving gut-driven skin signals. Formulated to address the
              internal triggers that most skincare ignores.
            </p>

            <div className="my-8 h-px w-16 bg-[#e5e0d8]" />

            {/* Features */}
            <ul className="space-y-3">
              {productFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#1c1917]/70"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#c4733b]" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#waitlist"
                className="inline-flex items-center rounded-full bg-[#1c1917] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#c4733b]"
              >
                Join Waitlist for Early Access
              </Link>
            </div>
          </div>

          {/* Right - Product Card */}
          <div className="relative">
            <div className="bg-[#f5f2ed] p-10 sm:p-12 lg:p-16">
              {/* Abstract product representation */}
              <div className="flex flex-col items-center text-center">
                {/* Geometric shape representing the product */}
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#e5e0d8] bg-[#faf8f5]">
                  <div className="text-center">
                    <span className="block text-2xl font-light text-[#1c1917]">
                      Reset
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-[#8a8580]">
                      90 Days
                    </span>
                  </div>
                </div>

                <div className="mt-10 w-full space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between border-b border-[#e5e0d8] pb-4">
                    <span className="text-sm text-[#8a8580]">Subscribe</span>
                    <div className="text-right">
                      <span className="text-lg font-light text-[#1c1917]">
                        $1.33
                      </span>
                      <span className="text-sm text-[#8a8580]">/day</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#e5e0d8] pb-4">
                    <span className="text-sm text-[#8a8580]">One-time</span>
                    <div className="text-right">
                      <span className="text-lg font-light text-[#1c1917]">
                        $1.55
                      </span>
                      <span className="text-sm text-[#8a8580]">/day</span>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="pt-2">
                    <p className="text-xs text-[#8a8580] leading-relaxed">
                      90-day money-back guarantee. If it doesn&apos;t work, you
                      don&apos;t pay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
