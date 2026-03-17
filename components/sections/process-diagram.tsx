"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";

// Custom SVG icons
const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const steps = [
  {
    Icon: BeakerIcon,
    title: "Clinical Precision",
    description: "Every formula begins in the lab, where dermatologists identify the most effective actives.",
  },
  {
    Icon: LeafIcon,
    title: "Ingredient Transparency",
    description: "We source only the purest botanicals with complete traceability from farm to formula.",
  },
  {
    Icon: SparklesIcon,
    title: "Sensory Balance",
    description: "Textures that feel like silk. Scents from nature, not synthetics.",
  },
];

export function ProcessDiagram() {
  return (
    <section className="w-full bg-[#1a1a1a] py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-light text-white">
            Where Dermatology
            <br />
            <span className="italic">Meets Design</span>
          </h2>
        </div>

        {/* Center Element */}
        <div className="flex justify-center mb-12">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#c9a962]/30 bg-[#2d2d2d]">
            <div className="text-center">
              <SparklesIcon className="h-6 w-6 text-[#c9a962] mx-auto mb-1" />
              <p className="text-[10px] uppercase tracking-wider text-[#c9a962]">Lumière</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a962]/30 text-[#c9a962]">
                <step.Icon />
              </div>
              <h3 className="text-sm font-medium text-white mb-2">{step.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
