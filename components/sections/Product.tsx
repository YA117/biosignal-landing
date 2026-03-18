"use client";

import { motion } from "framer-motion";

const features = [
  {
    stat: "5",
    title: "Clinically studied probiotic strains",
    description:
      "L. rhamnosus GG \u00b7 L. plantarum \u00b7 B. lactis \u00b7 B. longum \u00b7 L. acidophilus. Selected for documented effects on skin inflammation, barrier integrity, and microbiome balance.",
    color: "bg-red-bio",
  },
  {
    stat: "3",
    title: "Targeted micronutrients",
    description:
      "Zinc picolinate (15mg) \u00b7 Vitamin D3 (1,000 IU) \u00b7 Prebiotic fibre (FOS). Each chosen for its role in skin repair, immune regulation, and probiotic colonisation.",
    color: "bg-blue-bio",
  },
  {
    stat: "90",
    title: "Days — the full cycle",
    description:
      "90 capsules. One per day. Clinical evidence shows skin probiotic results emerge between 60 and 90 days. Reset is sized to match the biology, not to sell you a smaller bottle more often.",
    color: "bg-green-bio",
  },
];

export function Product() {
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
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-4">
            — The Product
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 lg:p-10 ${i < features.length - 1 ? "border-r border-border" : ""}`}
            >
              {/* Stat */}
              <h3 className="text-4xl md:text-5xl font-sans font-normal text-foreground mb-4">
                {item.stat}
              </h3>

              {/* Title */}
              <p className="text-sm font-medium text-foreground/70 mb-3">
                {item.title}
              </p>

              {/* Description */}
              <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Abstract visualization placeholder */}
              <div className="mt-8 h-48 md:h-64 bg-surface rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                  {Array.from({ length: 64 }).map((_, j) => (
                    <div
                      key={j}
                      className={`border border-border/30 ${
                        Math.random() > 0.85
                          ? item.color + " opacity-60"
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
