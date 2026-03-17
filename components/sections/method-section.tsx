"use client";

const phases = [
  {
    step: "01",
    name: "Interpret",
    description:
      "Identify which signals your skin is sending and which internal systems are driving them.",
    details:
      "Assessment, pattern recognition, root cause mapping. We help you understand what your body is communicating — not guess at random solutions.",
  },
  {
    step: "02",
    name: "Resolve",
    description:
      "Address the underlying triggers through targeted interventions across gut, barrier, and nervous system.",
    details:
      "Not a single product — a structured protocol. Each intervention is selected based on your specific signal pattern.",
  },
  {
    step: "03",
    name: "Rebuild",
    description:
      "Restore long-term resilience so the body can maintain clarity independently.",
    details:
      "The goal is not dependence on BioSignal — it's functional independence. A body that can regulate itself doesn't need constant intervention.",
  },
];

export function MethodSection() {
  return (
    <section
      id="method"
      className="w-full bg-[#faf8f5] py-24 px-6 sm:px-12 lg:px-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8a8580]">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-light text-[#1c1917] sm:text-4xl md:text-5xl">
            The BioSignal <span className="italic">Method</span>
          </h2>
        </div>

        {/* Phases */}
        <div className="grid gap-px bg-[#e5e0d8] lg:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.step}
              className="group bg-[#faf8f5] p-8 transition-colors hover:bg-[#f5f2ed] md:p-10 lg:p-12"
            >
              {/* Step Number */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#c4733b]">
                  {phase.step}
                </span>
                <div className="h-px flex-1 bg-[#e5e0d8]" />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-2xl font-light text-[#1c1917] sm:text-3xl">
                {phase.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-[1.7] text-[#1c1917]/80">
                {phase.description}
              </p>

              {/* Details */}
              <p className="mt-4 text-sm leading-[1.7] text-[#8a8580]">
                {phase.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
