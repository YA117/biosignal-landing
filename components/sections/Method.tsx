"use client";

import { motion } from "framer-motion";
import { MotionGrid } from "@/components/ui/MotionGrid";

const steps = [
  {
    number: "001",
    title: "Interpret",
    description:
      "Identify which signals are present and which systems are driving them. Patterns matter. Frequency matter. Context matters. The objective is not symptom suppression. It is system mapping.",
  },
  {
    number: "002",
    title: "Resolve",
    description:
      "Address the underlying drivers across systems, in the correct sequence. Most interventions target one pathway at a time. BioSignal works across systems because biological regulation is interconnected.",
  },
  {
    number: "003",
    title: "Rebuild",
    description:
      "Restore resilience so the body can regulate without ongoing intervention. The goal is not permanent management. It is regained stability.",
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
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6 px-6 lg:px-12">
            The Method
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            The BioSignal Method
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl">
            A structured approach to interpreting biological signals and responding with precision. Not a single product. Not a generic protocol. A system for understanding what your body is doing, and changing its trajectory.
          </p>
        </motion.div>

        {/* Numbered List bio1 style */}
        <div className="mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring", stiffness: 50, damping: 15
              }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className={`grid grid-cols-12 gap-4 py-12 group cursor-default ${
                index < steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="col-span-2 md:col-span-1 border-l-2 border-transparent group-hover:border-foreground transition-colors duration-300 pl-4 -ml-4">
                <span className="font-mono text-xs md:text-sm text-foreground/30 group-hover:text-foreground/70 transition-colors">
                  {step.number}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-sans font-normal text-foreground">
                  {step.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <p className="text-sm text-foreground/50 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
