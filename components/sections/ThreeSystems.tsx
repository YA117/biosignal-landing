"use client";

import { motion } from "framer-motion";
import { MotionGrid } from "@/components/ui/MotionGrid";

const systems = [
  {
    stat: "01",
    title: "Skin Barrier",
    description:
      "The outermost layer of communication. When the barrier is compromised, it stops functioning as protection and starts functioning as an alarm. Irritants enter, moisture escapes, and inflammation becomes the body\u2019s default state. Most products try to quiet this alarm from the outside. BioSignal reads what triggered it.",
    color: "bg-red-bio",
  },
  {
    stat: "02",
    title: "Gut",
    description:
      "The system most often generating the signal. The connection between intestinal health and skin is one of the most documented pathways in clinical research. Microbiome imbalance, intestinal permeability, and chronic gut inflammation produce immune responses that the skin has no choice but to express. Resolve the gut, and the signal often resolves itself.",
    color: "bg-blue-bio",
  },
  {
    stat: "03",
    title: "Nervous System",
    description:
      "The system that determines whether repair happens at all. Under sustained stress, the body deprioritises everything that is not immediate survival. Skin cell turnover slows. Inflammatory responses accelerate. Conditions that should clear in days persist for months. The nervous system is not a lifestyle factor. It is the switch that determines whether the other two systems can do their work.",
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
            The Three Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            Every signal has a source.
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl">
            When your body produces a visible output, it is not one thing going wrong. It is three systems interacting. Understanding which system is driving the signal changes everything about how you respond.
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

              {/* Abstract visualization - Motion based */}
              <div className="mt-8">
                <MotionGrid 
                  rows={7}
                  cols={6}
                  unboxed={true}
                  bars={
                    i === 0 ? [
                      // 4 lines: 3 from right, 1 from left
                      { row: 1, width: "w-[40%]", right: "right-0", origin: "right", color: system.color, delay: 0.1 },
                      { row: 3, width: "w-[30%]", right: "right-[15%]", origin: "right", color: system.color, delay: 0.3 },
                      { row: 5, width: "w-[50%]", left: "left-0", origin: "left", color: system.color, delay: 0.2 },
                      { row: 6, width: "w-[65%]", right: "right-[5%]", origin: "right", color: system.color, delay: 0.4 },
                    ] : i === 1 ? [
                      // 5 lines: 3 from left, 2 from right
                      { row: 1, width: "w-[45%]", left: "left-0", origin: "left", color: system.color, delay: 0.2 },
                      { row: 3, width: "w-[35%]", left: "left-[10%]", origin: "left", color: system.color, delay: 0.4 },
                      { row: 4, width: "w-[55%]", right: "right-0", origin: "right", color: system.color, delay: 0.1 },
                      { row: 6, width: "w-[25%]", left: "left-[5%]", origin: "left", color: system.color, delay: 0.5 },
                      { row: 7, width: "w-[60%]", right: "right-[15%]", origin: "right", color: system.color, delay: 0.3 },
                    ] : [
                      // 4.5 lines: 3 from right, 1.5 from left (we'll make 2 from left, 1 very short)
                      { row: 1, width: "w-[50%]", right: "right-0", origin: "right", color: system.color, delay: 0.1 },
                      { row: 2, width: "w-[15%]", left: "left-0", origin: "left", color: system.color, delay: 0.3 }, // half line
                      { row: 4, width: "w-[40%]", right: "right-[10%]", origin: "right", color: system.color, delay: 0.2 },
                      { row: 6, width: "w-[35%]", left: "left-[5%]", origin: "left", color: system.color, delay: 0.4 },
                      { row: 7, width: "w-[65%]", right: "right-[5%]", origin: "right", color: system.color, delay: 0.5 },
                    ]
                  }
                />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
