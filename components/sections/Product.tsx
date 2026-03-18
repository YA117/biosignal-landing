"use client";

import { motion } from "framer-motion";

const features = [
  {
    stat: "01",
    title: "BioSignal Reset",
    description:
      "A targeted oral formulation built around clinically studied probiotic strains selected for their documented influence on inflammatory balance, barrier integrity, and microbiome stability. Supported by zinc, vitamin D3, and prebiotic fibre to assist immune modulation and probiotic activity. Designed specifically for signal resolution, not general wellness positioning.",
    color: "bg-red-bio",
  },
  {
    stat: "02",
    title: "BioSignal Daily Essentials",
    description:
      "System restoration requires nutritional sufficiency. Daily Essentials provides foundational micronutrient coverage to support immune regulation, tissue repair, nervous system function, and metabolic resilience. Formulated to complement Reset without duplication.",
    color: "bg-blue-bio",
  },
  {
    stat: "03",
    title: "BioSignal Hydrate",
    description:
      "System change is more likely to succeed when it becomes behavioural. Hydrate introduces a daily sensory anchor to the intervention. Electrolytes and magnesium support hydration dynamics and nervous system regulation, while the ritual of preparation reinforces consistency, a key factor in biological adaptation.",
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
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            The First Instrument
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            Your BioSignal Response
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl">
            Most supplement products are sold in isolation. BioSignal is designed as a coordinated 90-day system response matched to biological signals. One subscription. Three integrated instruments. Structured support across the systems that influence skin regulation.
          </p>
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
            </motion.div>
          ))}
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
            {["Third-party tested", "Vegan", "Non-GMO", "Gluten-free", "Dairy-free"].map((badge) => (
              <span
                key={badge}
                className="text-xs text-foreground/40 border border-border px-3 py-1.5"
              >
                {badge}
              </span>
            ))}
          </div>
          
          <div className="mt-12 text-base text-foreground/60 leading-relaxed font-sans font-normal max-w-3xl">
            <h3 className="text-2xl text-foreground font-medium mb-6">WHY A SYSTEM, NOT A SUPPLEMENT</h3>
            <p className="mb-4">
              A probiotic targets one pathway. A multivitamin supports baseline nutrition. Electrolytes influence hydration and nervous system balance. Individually, each can be useful. Combined and structured over time, they act across multiple biological pathways simultaneously.
            </p>
            <p className="mb-4">
              The effect is not additive. It is systemic.
            </p>
            <p>
              Most supplements are designed as isolated inputs. BioSignal is designed as a coordinated response.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
