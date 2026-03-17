"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "001",
    title: "Interpret",
    description:
      "By testing every gene across all human tissues using large-scale Mendelian randomization and colocalization",
  },
  {
    number: "002",
    title: "Resolve",
    description:
      "Of diseases and biomarkers, we generate billions of causal data points linking genes to biological outcomes.",
  },
  {
    number: "003",
    title: "Rebuild",
    description:
      "Genetic variants can serve as natural instruments to estimate. Originally developed in economics to leverage",
  },
];

export function Method() {
  return (
    <section className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
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
                {/* Abstract node-link diagram */}
                <svg className="w-full h-full" viewBox="0 0 440 320" fill="none">
                  {/* Connection lines */}
                  {Array.from({ length: 12 }).map((_, j) => (
                    <line
                      key={`line-${j}`}
                      x1={40 + Math.random() * 180}
                      y1={40 + Math.random() * 240}
                      x2={220 + Math.random() * 180}
                      y2={40 + Math.random() * 240}
                      stroke={`var(--color-${color})`}
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  ))}
                  {/* Nodes */}
                  {Array.from({ length: 8 }).map((_, j) => (
                    <circle
                      key={`node-${j}`}
                      cx={60 + Math.random() * 320}
                      cy={60 + Math.random() * 200}
                      r={8 + Math.random() * 12}
                      fill={`var(--color-${color})`}
                      opacity={0.4 + Math.random() * 0.4}
                    />
                  ))}
                  {/* Inner circles */}
                  {Array.from({ length: 8 }).map((_, j) => (
                    <circle
                      key={`inner-${j}`}
                      cx={60 + Math.random() * 320}
                      cy={60 + Math.random() * 200}
                      r={3 + Math.random() * 5}
                      fill={`var(--color-${color})`}
                      opacity="0.8"
                    />
                  ))}
                </svg>
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
