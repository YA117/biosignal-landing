"use client";

import { motion } from "framer-motion";

const systems = [
  {
    stat: "88x",
    title: "Skin Barrier",
    description:
      "Originally developed to leverage observational data where controlled experiments weren't possible, barrier analysis reveals hidden dysfunction patterns.",
    color: "bg-red-bio",
  },
  {
    stat: "75%",
    title: "Gut Health",
    description:
      "Causal inference techniques are now instrumental in biomedicine for uncovering disease biology from real-world genetic and microbiome data.",
    color: "bg-blue-bio",
  },
  {
    stat: "1.2M",
    title: "Nervous System",
    description:
      "By testing every gene across all human tissues using large-scale Mendelian randomization and colocalization across thousands of conditions.",
    color: "bg-green-bio",
  },
];

export function ThreeSystems() {
  return (
    <section className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
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
