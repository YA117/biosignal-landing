"use client";

import Image from "next/image";
import { ClockIcon, CalendarIcon, SparklesIcon } from "@heroicons/react/24/outline";

const timelineSteps = [
  {
    icon: ClockIcon,
    timeframe: "Within Minutes",
    title: "Discover your skin's rhythm",
    description: "Feel the immediate sensorial experience. Lightweight textures absorb instantly, leaving a natural glow without residue.",
  },
  {
    icon: CalendarIcon,
    timeframe: "Within Days",
    title: "Clarity begins to show",
    description: "Notice improved hydration and smoother texture. Fine lines appear softened as your skin barrier strengthens.",
  },
  {
    icon: SparklesIcon,
    timeframe: "Within Weeks",
    title: "Transformation takes shape",
    description: "Visible reduction in dark spots and uneven tone. Your skin appears firmer, more radiant, and unmistakably healthy.",
  },
];

export function RoutineTimeline() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">
              Your Journey
            </span>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Find Your Perfect <span className="font-normal italic">Routine</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Every skin transformation follows its own timeline. Here&apos;s what 
              to expect when you begin your Lumière ritual.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid gap-8 md:grid-cols-3">
            {timelineSteps.map((step, index) => (
              <div
                key={step.timeframe}
                className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#c9a962] text-sm font-medium text-[#1a1a1a]">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <step.icon className="h-6 w-6 text-[#c9a962]" strokeWidth={1.5} />
                </div>

                {/* Timeframe */}
                <h3 className="text-lg font-medium text-[#c9a962]">{step.timeframe}</h3>

                {/* Title */}
                <h4 className="mt-2 text-xl font-light text-white">{step.title}</h4>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-8 h-px bg-white/10">
                  <div
                    className="h-full bg-[#c9a962] transition-all duration-1000"
                    style={{ width: `${((index + 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm text-white/40">
              Results may vary. Consistency is key to achieving your best skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
