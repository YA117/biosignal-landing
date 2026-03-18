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
    <div className={`relative border border-border/60 bg-surface/30 overflow-hidden ${className}`}>
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
                initial={{ scaleX: 0, opacity: 0, x: -20 }}
                whileInView={{ 
                  scaleX: 1, 
                  opacity: 0.8,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  delay: (bar.delay ?? 0.2) + rowIndex * 0.05, 
                  ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for more "life"
                }}
                className={`absolute top-[25%] h-[50%] ${bar.width} ${bar.left} ${bar.color} origin-left`}
              >
                {/* Subtle pulse effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: (bar.delay ?? 0) + 1 
                  }}
                />
              </motion.div>
            ))}
        </div>
      ))}
    </div>
  );
}
