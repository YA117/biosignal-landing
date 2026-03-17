"use client";

import Image from "next/image";

const timelineSteps = [
  {
    timeframe: "Within Minutes",
    title: "Discover your skin's rhythm",
    description: "Feel the immediate sensorial experience. Lightweight textures absorb instantly.",
  },
  {
    timeframe: "Within Days",
    title: "Clarity begins to show",
    description: "Notice improved hydration and smoother texture. Fine lines appear softened.",
  },
  {
    timeframe: "Within Weeks",
    title: "Transformation takes shape",
    description: "Visible reduction in dark spots and uneven tone. Skin appears firmer and radiant.",
  },
];

export function RoutineTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a1a1a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-light text-white">
              Find Your Perfect <span className="italic">Routine</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div
                key={step.timeframe}
                className="flex gap-8 items-start"
              >
                {/* Left - Timeframe */}
                <div className="w-32 shrink-0 text-right pt-1">
                  <span className="text-xs text-[#c9a962] uppercase tracking-wide">
                    {step.timeframe}
                  </span>
                </div>

                {/* Center - Line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                  {index !== timelineSteps.length - 1 && (
                    <div className="w-px h-16 bg-white/20 mt-2" />
                  )}
                </div>

                {/* Right - Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-light text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
