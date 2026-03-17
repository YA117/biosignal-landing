"use client";

const stats = [
  {
    value: "70%",
    label: "of the immune system resides in the gut",
    source: "Nature Reviews Immunology",
  },
  {
    value: "40%",
    label: "reduction in barrier recovery under chronic stress",
    source: "Journal of Investigative Dermatology",
  },
  {
    value: "3",
    label: "interconnected systems drive most chronic skin conditions",
    source: "British Journal of Dermatology",
  },
];

const badges = [
  "Clinically informed",
  "Peer-reviewed research",
  "Structured methodology",
];

export function EvidenceSection() {
  return (
    <section className="w-full bg-[#1c1917] topo-pattern py-24 px-6 sm:px-12 lg:px-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c4733b]">
            The Evidence
          </span>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Grounded in <span className="italic">research</span>
          </h2>
          <p className="mt-6 text-sm leading-[1.8] text-white/40">
            BioSignal&apos;s approach is built on decades of published research
            across dermatology, gastroenterology, and psychoneuroimmunology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-[#1c1917] p-8 md:p-10 lg:p-12">
              <span className="text-5xl font-light text-white sm:text-6xl">
                {stat.value}
              </span>
              <p className="mt-4 text-sm leading-[1.7] text-white/60">
                {stat.label}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[#c4733b]/70">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="mt-16 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 px-5 py-2 text-xs tracking-wide text-white/40"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
