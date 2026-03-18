"use client";

import { motion } from "framer-motion";

import Link from "next/link";

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
        <div className="py-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8"
          >
            A New Framework for Skin Health
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-sans font-normal leading-[1.05] tracking-tight text-foreground"
          >
            Your skin is{" "}
            <br className="hidden sm:block" />
            not the problem.{" "}
            <br className="hidden sm:block" />
            It is the signal
            <span className="text-blue-bio">.</span>
          </motion.h1>
        </div>
      </div>


      {/* Horizontal Bar Data Visualization bio4 style */}
      <div className="w-full mt-4">
        {/* Grid rows of thin grey lines with colored bars */}
        {Array.from({ length: 5 }).map((_, rowIndex) => (
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


    </section>
  );
}
