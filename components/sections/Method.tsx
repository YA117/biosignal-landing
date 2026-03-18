"use client";

import { motion } from "framer-motion";
import { MotionGrid } from "@/components/ui/MotionGrid";

const steps = [
  {
    number: "001",
    title: "Interpret",
    description:
      "Identify which signals your skin is sending and which internal systems are generating them. Breakouts, redness, dryness, and reactivity each carry different biological meaning. The first step is pattern recognition, mapping symptoms to their systemic origins rather than treating them in isolation.",
  },
  {
    number: "002",
    title: "Resolve",
    description:
      "Address the underlying drivers across gut, barrier, and nervous system, in the right sequence. This is where most approaches fail. They pick one system and hope for the best. BioSignal addresses all three in a structured order, because a repaired gut barrier means nothing if the nervous system is still flooding the body with inflammatory signals.",
  },
  {
    number: "003",
    title: "Rebuild",
    description:
      "Restore long-term resilience so your body maintains clarity on its own. The goal is not permanent dependence on a system. It is a body that regulates itself. Skin that stays clear not because you are managing it, but because the underlying drivers have been resolved.",
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

        {/* Numbered List — bio1 style */}
        <div className="mb-16">
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

        {/* Carousel area — bio1 network diagrams */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 lg:-mx-12 lg:px-12">
          <div className="flex gap-6 min-w-max">
            {["red-bio", "blue-bio", "green-bio"].map((color, i) => (
              <motion.div
                key={color}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="w-[360px] md:w-[440px] h-[280px] md:h-[320px] bg-surface rounded-sm border border-border relative overflow-hidden"
              >
                {/* Motion Grid Signal Flow */}
                <div className="p-8 h-full flex flex-col justify-center">
                  <MotionGrid 
                    rows={8}
                    cols={6}
                    bars={[
                      { row: 1, width: "w-[30%]", left: "left-[10%]", color: `bg-${color}`, delay: 0.1 },
                      { row: 2, width: "w-[50%]", left: "left-[40%]", color: `bg-${color}`, delay: 0.2 },
                      { row: 3, width: "w-[20%]", left: "left-0", color: `bg-${color}`, delay: 0.3 },
                      { row: 4, width: "w-[40%]", left: "left-[55%]", color: `bg-${color}`, delay: 0.4 },
                      { row: 5, width: "w-[60%]", left: "left-[15%]", color: `bg-${color}`, delay: 0.5 },
                      { row: 6, width: "w-[25%]", left: "left-[70%]", color: `bg-${color}`, delay: 0.6 },
                      { row: 7, width: "w-[35%]", left: "left-[5%]", color: `bg-${color}`, delay: 0.7 },
                      { row: 8, width: "w-[45%]", left: "left-[30%]", color: `bg-${color}`, delay: 0.8 },
                    ]}
                  />
                  <div className="mt-6 flex justify-between items-end">
                    <span className={`text-[10px] font-mono uppercase tracking-tighter text-${color} opacity-60`}>Signal: {color.split('-')[0]}</span>
                    <div className={`w-2 h-2 rounded-full bg-${color} animate-pulse`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-6">
          <span className="font-mono text-xs text-foreground/30">01/05</span>
          <div className="flex gap-4">
            <button className="text-foreground/40 hover:text-foreground transition-colors">←</button>
            <button className="text-foreground/40 hover:text-foreground transition-colors">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
