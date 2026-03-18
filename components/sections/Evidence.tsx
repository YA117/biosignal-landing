"use client";

import { motion } from "framer-motion";
import { MotionGrid } from "@/components/ui/MotionGrid";

const evidence = [
  {
    stat: "70%",
    description: "Around 70% of immune activity is associated with the gut, making intestinal health a direct influence on inflammatory signalling.",
  },
  {
    stat: "40%",
    description: "Chronic psychological stress can significantly slow skin barrier recovery, prolonging visible symptoms.",
  },
  {
    stat: "34",
    description: "Multiple peer-reviewed studies describe the gut–skin axis as a meaningful factor in acne, eczema, rosacea, and psoriasis outcomes.",
  },
];

export function Evidence() {
  return (
    <section id="science" className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            The Science
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground">
            Built on established research,{" "}
            <span className="text-foreground/40">not trends.</span>
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl text-balance">
            BioSignal integrates clinical insights from dermatology, gastroenterology, and psychoneuroimmunology, disciplines that study how biological systems interact. These connections are well documented. They are rarely applied in a coordinated way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {evidence.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-8 ${i < evidence.length - 1 ? "md:border-r border-border md:pr-10" : ""} ${i > 0 ? "md:pl-10" : ""}`}
            >
              <h3 className="text-5xl md:text-6xl font-sans font-normal text-foreground mb-4">
                {item.stat}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-[240px] mb-8">
                {item.description}
              </p>
              <div className="md:pr-12">
                <MotionGrid 
                  rows={2} // Kept rows=2 to maintain identical vertical spacing layout from before
                  cols={4}
                  unboxed={true}
                  bars={
                    i === 0 ? [
                      { row: 1, width: "w-[55%]", left: "left-0", color: "bg-blue-bio", delay: 0.2 },
                      { row: 2, width: "w-[25%]", left: "left-[35%]", color: "bg-blue-bio", delay: 0.35 } // 1/4 line added
                    ] : i === 1 ? [
                      { row: 2, width: "w-[25%]", left: "left-[75%]", color: "bg-red-bio", delay: 0.35 } // Bottom row, 3/4 from left
                    ] : [
                      { row: 1, width: "w-[45%]", left: "left-[5%]", color: "bg-green-bio", delay: 0.5 }
                    ]
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-sm text-foreground/40 leading-relaxed max-w-2xl"
        >
          Where evidence is strong, BioSignal builds on it. Where evidence is emerging, it is presented transparently.
        </motion.p>
      </div>
    </section>
  );
}
