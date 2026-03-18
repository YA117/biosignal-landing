"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "001",
    title: "Interpret",
    subtitle: "Phase One",
    description:
      "Identify which signals your skin is sending and which internal systems are generating them.",
    detail:
      "Breakouts, redness, dryness, and reactivity each carry different biological meaning. The first step is pattern recognition, mapping symptoms to their systemic origins rather than treating them in isolation.",
  },
  {
    number: "002",
    title: "Resolve",
    subtitle: "Phase Two",
    description:
      "Address the underlying drivers across gut, barrier, and nervous system, in the right sequence.",
    detail:
      "This is where most approaches fail. They pick one system and hope for the best. BioSignal addresses all three in a structured order, because a repaired gut barrier means nothing if the nervous system is still flooding the body with inflammatory signals.",
  },
  {
    number: "003",
    title: "Rebuild",
    subtitle: "Phase Three",
    description:
      "Restore long-term resilience so your body maintains clarity on its own.",
    detail:
      "The goal is not permanent dependence on a system. It is a body that regulates itself. Skin that stays clear not because you are managing it, but because the underlying drivers have been resolved.",
  },
];

export function Method() {
  return (
    <section id="method" className="bg-background border-t border-border">
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
            — The Method
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            The BioSignal Method
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl">
            Not a product. Not a protocol you follow blindly. A structured framework for understanding what your body is telling you and responding with precision.
          </p>
        </motion.div>

        {/* Numbered List */}
        <div>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-12 gap-4 py-10 ${
                index < steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-sm text-foreground/30">
                  {step.number}
                </span>
              </div>
              <div className="col-span-10 md:col-span-3">
                <span className="block font-mono text-xs text-foreground/40 mb-1">
                  {step.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-sans font-normal text-foreground">
                  {step.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-3">
                <p className="text-sm font-medium text-foreground/70 leading-relaxed max-w-lg">
                  {step.description}
                </p>
                <p className="text-sm text-foreground/50 leading-relaxed max-w-lg">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
