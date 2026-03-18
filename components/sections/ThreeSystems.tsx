"use client";

import { motion } from "framer-motion";

const systems = [
  {
    number: "01",
    title: "Skin Barrier",
    description:
      "The body\u2019s first line of defence, and the first to be compromised.",
    detail:
      "When the barrier weakens, irritants enter, moisture escapes, and inflammation becomes self-sustaining. Most skincare products address this layer alone. BioSignal starts here but does not stop here.",
    color: "bg-red-bio",
  },
  {
    number: "02",
    title: "Gut Health",
    description:
      "The axis between your gut and your skin is one of the most documented pathways in clinical dermatology.",
    detail:
      "Intestinal permeability, microbiome imbalance, and chronic gut inflammation drive immune responses that surface as skin conditions. For many people, resolving the gut is the intervention their skin has been waiting for.",
    color: "bg-blue-bio",
  },
  {
    number: "03",
    title: "Nervous System",
    description:
      "Chronic stress does not just feel bad. It changes how your body allocates resources.",
    detail:
      "Under sustained cortisol, the body prioritises survival over repair. Skin cell turnover slows. Inflammation accelerates. Conditions that should resolve in days persist for months. Calming the nervous system is not a lifestyle suggestion. It is a biological prerequisite for healing.",
    color: "bg-green-bio",
  },
];

export function ThreeSystems() {
  return (
    <section className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            — The Three Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            Three systems.{" "}
            <span className="text-foreground/40">One signal.</span>
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl">
            Most approaches address skin at the surface. BioSignal works at the level where skin conditions originate: three interconnected systems that determine whether your body heals or stays inflamed.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-8 md:py-0 ${i < systems.length - 1 ? "md:border-r border-border" : ""} ${i > 0 ? "md:pl-10" : ""} ${i < systems.length - 1 ? "md:pr-10" : ""} ${i > 0 ? "border-t md:border-t-0" : ""}`}
            >
              {/* Number */}
              <span className="block font-mono text-xs text-foreground/30 mb-4">
                {system.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-sans font-normal text-foreground mb-4">
                {system.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-medium text-foreground/70 leading-relaxed mb-3">
                {system.description}
              </p>

              {/* Detail */}
              <p className="text-sm text-foreground/50 leading-relaxed">
                {system.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
