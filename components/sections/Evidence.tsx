"use client";

import { motion } from "framer-motion";
import { MotionGrid } from "@/components/ui/MotionGrid";

const evidence = [
  {
    stat: "70%",
    description: "of the immune system resides in the gut, making intestinal health a direct lever for inflammatory skin conditions.",
  },
  {
    stat: "40%",
    description: "reduction in skin barrier recovery is observed under chronic psychological stress, according to published dermatological research.",
  },
  {
    stat: "34",
    description: "peer-reviewed studies have documented the gut-skin axis as a significant factor in acne, eczema, rosacea, and psoriasis outcomes.",
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
            Built on research.{" "}
            <span className="text-foreground/40">Not trends.</span>
          </h2>
          <p className="mt-6 text-base text-foreground/50 leading-relaxed max-w-2xl text-balance">
            BioSignal&apos;s framework is grounded in peer-reviewed clinical research across dermatology, gastroenterology, and psychoneuroimmunology. These are not new discoveries. They are well-established connections that the skincare industry has largely ignored.
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
          Every element of the BioSignal framework is informed by clinical evidence. Where the research is strong, we build on it. Where it is emerging, we say so.
        </motion.p>
      </div>
    </section>
  );
}
