"use client";

import { motion } from "framer-motion";
import { MotionGrid } from "@/components/ui/MotionGrid";

const steps = [
  {
    number: "001",
    title: "Interpret",
    subtitle: "Map the signal to its source.",
    description:
      "The outputs your body generates, breakouts, redness, dryness, reactivity, each carry distinct biological meaning. The first step is identifying which internal systems are producing which signals, rather than treating every symptom as the same problem.",
  },
  {
    number: "002",
    title: "Resolve",
    subtitle: "Address the source, not the output.",
    description:
      "Most approaches pick one system and hope for the best. BioSignal addresses all three in a structured sequence, because calming the gut means nothing if the nervous system is still telling the body to stay inflamed.",
  },
  {
    number: "003",
    title: "Rebuild",
    subtitle: "Restore the body\u2019s ability to regulate itself.",
    description:
      "The goal is not a system you depend on permanently. It is a body that generates clean signals because the underlying drivers have been resolved. Clarity that sustains itself because the interpretation has been done correctly.",
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
            A structured framework for reading what your body is producing and responding to it with precision. Not a product. Not a protocol. A way of interpreting biological data and acting on it.
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
                {step.subtitle && (
                  <p className="text-sm text-foreground/50 mt-1">{step.subtitle}</p>
                )}
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
