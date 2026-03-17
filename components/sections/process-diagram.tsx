"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";

// Custom SVG icons
const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const steps = [
  {
    Icon: BeakerIcon,
    title: "Clinical Precision",
    description: "Every formula begins in the lab, where our dermatologists identify the most effective actives for your skin concerns.",
    position: "left",
  },
  {
    Icon: LeafIcon,
    title: "Ingredient Transparency",
    description: "We source only the purest botanicals and minerals, with complete traceability from farm to formula.",
    position: "right",
  },
  {
    Icon: SparklesIcon,
    title: "Sensory Balance",
    description: "Textures that feel like silk. Scents from nature, not synthetics. A ritual you'll look forward to every day.",
    position: "bottom",
  },
];

export function ProcessDiagram() {
  return (
    <section className="w-full bg-[#1a1a1a] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Where Dermatology
            <br />
            <span className="font-normal italic">Meets Design</span>
          </h2>
        </div>

        {/* Diagram */}
        <div className="relative">
          {/* Center Circle */}
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#c9a962]/30 bg-[#2d2d2d] sm:h-48 sm:w-48">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a962]/20">
                <SparklesIcon className="h-6 w-6 text-[#c9a962]" />
              </div>
              <p className="text-xs uppercase tracking-wider text-[#c9a962]">Lumière</p>
              <p className="text-[10px] text-white/40">Standard</p>
            </div>
          </div>

          {/* Connecting Lines - Desktop */}
          <svg
            className="absolute left-1/2 top-1/2 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 lg:block"
            style={{ pointerEvents: "none" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a962" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#c9a962" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#c9a962" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Left line */}
            <path
              d="M 200 150 Q 100 150 80 100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            {/* Right line */}
            <path
              d="M 400 150 Q 500 150 520 100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            {/* Bottom line */}
            <path
              d="M 300 200 Q 300 280 300 320"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Steps Grid */}
          <div className="mt-16 grid gap-12 lg:mt-0 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`text-center lg:absolute lg:w-64 ${
                  index === 0
                    ? "lg:left-0 lg:top-0 lg:-translate-x-1/4 lg:-translate-y-1/4"
                    : index === 1
                    ? "lg:right-0 lg:top-0 lg:translate-x-1/4 lg:-translate-y-1/4"
                    : "lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2"
                }`}
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a962]/30 bg-[#2d2d2d] text-[#c9a962]">
                  <step.Icon />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-32 border-t border-white/10 pt-12 text-center">
          <h3 className="text-2xl font-light text-white sm:text-3xl">
            Science-Backed Skincare <span className="text-[#c9a962]">•</span>{" "}
            <span className="italic">Effortless Radiance</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
