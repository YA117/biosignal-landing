"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "91.2%",
    text: "By testing every gene across all human tissues using large-scale Mendelian randomization",
  },
  {
    value: "91.2%",
    text: "and colocalization across thousands of diseases and biomarkers, we generate billions of causal data points linking genes to biological outcomes.",
  },
  {
    value: "91.2%",
    text: "Our causally annotated data — and the AI models trained on it.",
  },
];

/* Horizontal color bars matching bio4 exactly */
const bars = [
  { color: "bg-red-bio", width: "w-[35%]", left: "left-[15%]", row: 1 },
  { color: "bg-blue-bio", width: "w-[50%]", left: "left-0", row: 2 },
  { color: "bg-amber-bio", width: "w-[30%]", left: "left-[55%]", row: 3 },
  { color: "bg-green-bio", width: "w-[25%]", left: "left-[40%]", row: 4 },
];

export function Hero() {
  return (
    <section className="relative bg-background pt-28 pb-0 overflow-hidden">
      {/* Top Content Area */}
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Massive Heading */}
          <div className="border-r border-border py-16 pr-8 lg:pr-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-sans font-normal leading-[1.05] tracking-tight text-foreground"
            >
              Your Skin,{" "}
              <br className="hidden sm:block" />
              Meet the{" "}
              <br className="hidden sm:block" />
              Signal
              <span className="text-blue-bio">.</span>
            </motion.h1>
          </div>

          {/* Right: Stats List */}
          <div className="py-16 pl-8 lg:pl-16 flex flex-col justify-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className={`flex items-start gap-8 py-6 ${i < stats.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="text-2xl md:text-3xl font-sans font-normal text-foreground whitespace-nowrap min-w-[80px]">
                  {stat.value}
                </span>
                <p className="text-sm text-foreground/60 leading-relaxed max-w-md">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Bar Data Visualization — bio4 style */}
      <div className="w-full mt-4">
        {/* Grid rows of thin grey lines with colored bars */}
        {Array.from({ length: 8 }).map((_, rowIndex) => (
          <div key={rowIndex} className="relative h-[48px] border-t border-border/60">
            {/* Vertical dividers */}
            <div className="absolute inset-0 flex">
              <div className="w-1/4 border-r border-border/40 h-full" />
              <div className="w-1/4 border-r border-border/40 h-full" />
              <div className="w-1/4 border-r border-border/40 h-full" />
              <div className="w-1/4 h-full" />
            </div>
            {/* Color bar overlays */}
            {bars
              .filter((b) => b.row === rowIndex + 1)
              .map((bar, bi) => (
                <motion.div
                  key={bi}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.6 + rowIndex * 0.15, ease: "easeOut" }}
                  className={`absolute top-[35%] h-[30%] ${bar.width} ${bar.left} ${bar.color} origin-left`}
                  style={{ opacity: 0.85 }}
                />
              ))}
          </div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex items-center justify-center gap-2 py-6 border-t border-border cursor-pointer text-foreground/40 hover:text-foreground transition-colors"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12l4 4 4-4" />
        </svg>
        <span className="font-mono text-xs tracking-widest uppercase">Scroll Down</span>
      </motion.div>
    </section>
  );
}
