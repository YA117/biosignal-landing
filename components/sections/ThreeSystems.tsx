"use client";

import { motion } from "framer-motion";

const systems = [
  {
    stat: "01",
    title: "Skin Barrier",
    description:
      "The body\u2019s first line of defence, and the first to be compromised. When the barrier weakens, irritants enter, moisture escapes, and inflammation becomes self-sustaining. Most skincare products address this layer alone. BioSignal starts here but does not stop here.",
    color: "bg-red-bio",
  },
  {
    stat: "02",
    title: "Gut Health",
    description:
      "The axis between your gut and your skin is one of the most documented pathways in clinical dermatology. Intestinal permeability, microbiome imbalance, and chronic gut inflammation drive immune responses that surface as skin conditions. For many people, resolving the gut is the intervention their skin has been waiting for.",
    color: "bg-blue-bio",
  },
  {
    stat: "03",
    title: "Nervous System",
    description:
      "Chronic stress does not just feel bad. It changes how your body allocates resources. Under sustained cortisol, the body prioritises survival over repair. Skin cell turnover slows. Inflammation accelerates. Conditions that should resolve in days persist for months. Calming the nervous system is not a lifestyle suggestion. It is a biological prerequisite for healing.",
    color: "bg-green-bio",
  },
];

export function ThreeSystems() {
  return (
    <section className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 lg:p-10 ${i < systems.length - 1 ? "border-r border-border" : ""}`}
            >
              {/* Stat */}
              <h3 className="text-4xl md:text-5xl font-sans font-normal text-foreground mb-4">
                {system.stat}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                {system.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-blue-bio hover:underline"
              >
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              {/* Abstract visualization placeholder */}
              <div className="mt-8 h-48 md:h-64 bg-surface rounded-sm overflow-hidden relative">
                {/* Grid pattern */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                  {Array.from({ length: 64 }).map((_, j) => (
                    <div
                      key={j}
                      className={`border border-border/30 ${
                        Math.random() > 0.85
                          ? system.color + " opacity-60"
                          : Math.random() > 0.9
                          ? "bg-surface-dark"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
