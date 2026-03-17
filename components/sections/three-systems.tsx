"use client";

const systems = [
  {
    number: "01",
    name: "Skin Barrier",
    tagline: "The body's first line of defence",
    description:
      "When compromised, irritants penetrate, moisture escapes, and inflammation becomes chronic. Most products address this layer alone — but the barrier is a symptom, not a cause.",
  },
  {
    number: "02",
    name: "Gut Health",
    tagline: "The gut-skin axis",
    description:
      "Intestinal permeability and microbiome imbalance drive systemic inflammation that surfaces as skin conditions. Resolving gut dysfunction is often the missing piece.",
  },
  {
    number: "03",
    name: "Nervous System",
    tagline: "The stress-skin connection",
    description:
      "Under sustained cortisol, the body deprioritises repair. Skin healing slows, inflammation accelerates, and conditions cycle. Calming the system is not optional — it's foundational.",
  },
];

export function ThreeSystemsSection() {
  return (
    <section
      id="science"
      className="w-full bg-[#f5f2ed] py-24 px-6 sm:px-12 lg:px-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8a8580]">
            The Framework
          </span>
          <h2 className="mt-4 text-3xl font-light leading-[1.2] text-[#1c1917] sm:text-4xl md:text-5xl">
            Three systems.
            <br />
            <span className="italic">One signal.</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-[1.8] text-[#8a8580]">
            Your skin reflects what&apos;s happening beneath it. BioSignal
            addresses all three interconnected systems — not just the surface.
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid gap-px bg-[#e5e0d8] md:grid-cols-3">
          {systems.map((system) => (
            <div
              key={system.number}
              className="bg-[#f5f2ed] p-8 md:p-10 lg:p-12"
            >
              {/* Number */}
              <span className="font-mono text-xs text-[#c4733b]">
                {system.number}
              </span>

              {/* Name */}
              <h3 className="mt-4 text-xl font-light text-[#1c1917] sm:text-2xl">
                {system.name}
              </h3>

              {/* Tagline */}
              <p className="mt-2 text-sm italic text-[#8a8580]">
                {system.tagline}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-10 bg-[#c4733b]/40" />

              {/* Description */}
              <p className="text-sm leading-[1.8] text-[#8a8580]">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
