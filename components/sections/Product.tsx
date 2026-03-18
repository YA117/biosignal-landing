"use client";

import { motion } from "framer-motion";

const probiotics = [
  "L. rhamnosus GG",
  "L. plantarum",
  "B. lactis",
  "B. longum",
  "L. acidophilus",
];

const badges = [
  "Delayed-release vegetarian capsule",
  "Shelf-stable, no refrigeration",
  "Third-party tested",
  "Vegan",
  "Non-GMO",
  "Gluten-free",
  "Dairy-free",
];

export function Product() {
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
            — Introducing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            BioSignal Reset
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl">
            The entry point to the BioSignal Method. A 90-day oral formulation designed to calm the systems that drive chronic skin conditions.
          </p>
          <p className="mt-4 text-sm text-foreground/40 leading-relaxed max-w-2xl">
            Reset is not a generic probiotic. Every strain was selected for published evidence of skin-specific outcomes, not general gut health. Combined with targeted micronutrients that support barrier repair and immune modulation, it addresses all three systems in a single daily capsule.
          </p>
        </motion.div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Probiotics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8 md:border-r border-border md:pr-10"
          >
            <h3 className="text-lg font-sans font-normal text-foreground mb-3">
              Five clinically studied probiotic strains
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {probiotics.map((strain) => (
                <span
                  key={strain}
                  className="font-mono text-xs text-foreground/50 bg-surface px-2 py-1 border border-border"
                >
                  {strain}
                </span>
              ))}
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Selected for documented effects on skin inflammation, barrier integrity, and microbiome balance.
            </p>
          </motion.div>

          {/* Micronutrients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-8 md:border-r border-border md:pl-10 md:pr-10 border-t md:border-t-0"
          >
            <h3 className="text-lg font-sans font-normal text-foreground mb-3">
              Targeted micronutrient support
            </h3>
            <div className="space-y-2 mb-4">
              <span className="block font-mono text-xs text-foreground/50">Zinc picolinate (15mg)</span>
              <span className="block font-mono text-xs text-foreground/50">Vitamin D3 (1,000 IU)</span>
              <span className="block font-mono text-xs text-foreground/50">Prebiotic fibre (FOS)</span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Each chosen for its role in skin repair, immune regulation, and probiotic colonisation.
            </p>
          </motion.div>

          {/* Full Cycle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-8 md:pl-10 border-t md:border-t-0"
          >
            <h3 className="text-lg font-sans font-normal text-foreground mb-3">
              Designed for the full cycle
            </h3>
            <p className="font-mono text-xs text-foreground/50 mb-4">
              90 capsules · One per day · 90 days
            </p>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Clinical evidence shows skin probiotic results emerge between 60 and 90 days. Reset is sized to match the biology, not to sell you a smaller bottle more often.
            </p>
          </motion.div>
        </div>

        {/* Badges & Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-xs text-foreground/40 border border-border px-3 py-1.5"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            90-day money-back guarantee. If your skin does not improve, you pay nothing. No return required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
