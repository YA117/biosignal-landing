"use client";

import { motion } from "framer-motion";

const evidence = [
  {
    stat: "78.72%",
    description: "By testing every gene across all human tissues using large-scale.",
  },
  {
    stat: "98M",
    description: "The impact of the Human Genome Project on drug research is becoming increasingly evident.",
  },
  {
    stat: "1.2x",
    description: "Retrospective analyses have shown that compounds binding to drug targets.",
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
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-4">
            — Evidence
          </span>
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
              <p className="text-sm text-foreground/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
