"use client";

import { motion } from "framer-motion";

interface MotionGridProps {
  className?: string;
  rows?: number;
  cols?: number;
  bars?: Array<{
    row: number;
    width: string;
    left: string;
    color: string;
    delay?: number;
  }>;
}

export function MotionGrid({ className = "", rows = 4, cols = 4, bars = [] }: MotionGridProps) {
  return (
    <div className={`relative border-t border-border/60 ${className}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="relative h-[24px] md:h-[32px] border-b border-border/60">
          {/* Vertical dividers */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: cols - 1 }).map((_, colIndex) => (
              <div key={colIndex} className={`w-1/${cols} border-r border-border/40 h-full`} />
            ))}
            <div className={`w-1/${cols} h-full`} />
          </div>
          
          {/* Color bar overlays */}
          {bars
            .filter((b) => b.row === rowIndex + 1)
            .map((bar, bi) => (
              <motion.div
                key={bi}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: (bar.delay ?? 0.2) + rowIndex * 0.1, 
                  ease: "easeOut" 
                }}
                className={`absolute top-[35%] h-[30%] ${bar.width} ${bar.left} ${bar.color} origin-left`}
                style={{ opacity: 0.8 }}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
