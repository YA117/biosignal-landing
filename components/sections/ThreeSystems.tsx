"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ThreeSystems() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-background text-charcoal py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <span className="block font-mono text-sm tracking-widest uppercase text-charcoal/50 mb-6">
            The Model
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.2]">
            Your skin reflects what&apos;s happening beneath it. <span className="text-charcoal/40">Three systems. One signal.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Column 1: Skin Barrier */}
          <motion.div variants={item} className="flex flex-col h-full bg-surface p-8 rounded-sm hover-lift">
            <h3 className="font-serif text-3xl mb-4">Barrier</h3>
            <p className="font-sans text-sm md:text-base text-charcoal/70 mb-8 min-h-[140px]">
              <strong className="font-medium text-charcoal block mb-2">The body&apos;s first line of defence</strong>
              When compromised, irritants penetrate, moisture escapes, and inflammation becomes chronic. Most products address this layer alone.
            </p>
            
            {/* Abstract Visual: Horizontal Bar Charts (bio2 style) */}
            <div className="mt-auto pt-10 border-t border-charcoal/5">
               <div className="space-y-4">
                 <div className="flex gap-4 items-center">
                   <div className="w-16 h-4 bg-charcoal/10" />
                   <div className="w-16 h-12 bg-gradient-to-b from-accent to-accent/10" />
                   <div className="w-12 h-4 bg-charcoal/10" />
                 </div>
                 <div className="flex gap-4 items-center justify-end">
                   <div className="w-12 h-4 bg-charcoal/10" />
                   <div className="w-24 h-4 bg-charcoal/10" />
                 </div>
                 <div className="flex gap-4 items-center">
                   <div className="w-24 h-4 bg-charcoal/5" />
                 </div>
                 <div className="flex gap-4 items-center mt-12">
                   <div className="w-16 h-6 bg-green-botanical" />
                 </div>
                 <div className="flex gap-4 items-center">
                   <div className="w-16 h-24 bg-green-botanical/10" />
                   <div className="w-20 h-4 bg-charcoal/10" />
                 </div>
                 <div className="flex gap-4 items-center">
                   <div className="w-24 h-4 bg-charcoal/10" />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Column 2: Gut Health */}
          <motion.div variants={item} className="flex flex-col h-full bg-surface p-8 rounded-sm hover-lift">
            <h3 className="font-serif text-3xl mb-4">Gut Axis</h3>
            <p className="font-sans text-sm md:text-base text-charcoal/70 mb-8 min-h-[140px]">
              <strong className="font-medium text-charcoal block mb-2">Documented in clinical research</strong>
              Intestinal permeability and microbiome imbalance drive systemic inflammation that surfaces as skin conditions. Resolving gut dysfunction is often the missing piece.
            </p>
            
            {/* Abstract Visual: Sequence Diagrams (bio2 style) */}
            <div className="mt-auto pt-10 border-t border-charcoal/5 overflow-hidden">
               <div className="space-y-6 opacity-80">
                 {/* Row 1 */}
                 <div className="flex items-center gap-4 text-xs font-mono text-charcoal/30">
                   <div className="w-6 h-6 rounded-full bg-blue-cool" /> 
                   <ArrowRight className="w-4 h-4" /> 
                   <div className="w-6 h-6 rounded-sm bg-accent" />
                   <ArrowRight className="w-4 h-4" />
                   <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-charcoal/60 border-r-[12px] border-r-transparent" />
                 </div>
                 {/* Row 2 - Highlighted */}
                 <div className="flex items-center gap-4 text-xs font-mono text-charcoal/30 relative p-2 -ml-2 border border-green-botanical/30 bg-green-botanical/5 rounded-sm">
                   <div className="w-6 h-6 rounded-full bg-blue-cool" /> 
                   <ArrowRight className="w-4 h-4 text-green-botanical/50" /> 
                   <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-accent border-r-[12px] border-r-transparent" />
                   <ArrowRight className="w-4 h-4 text-green-botanical/50" />
                   <div className="w-6 h-6 rounded-full bg-blue-cool" />
                 </div>
                 {/* Row 3 */}
                 <div className="flex items-center gap-4 text-xs font-mono text-charcoal/30">
                   <div className="w-5 h-5 bg-amber-500 clip-hexagon" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} /> 
                   <ArrowRight className="w-4 h-4" /> 
                   <div className="w-6 h-6 rounded-sm bg-blue-cool" />
                   <ArrowRight className="w-4 h-4" />
                   <div className="w-6 h-6 rounded-sm bg-accent" />
                 </div>
                 {/* Row 4 */}
                 <div className="flex items-center gap-4 text-xs font-mono text-charcoal/30">
                   <div className="w-6 h-6 rounded-sm bg-amber-500" /> 
                   <ArrowRight className="w-4 h-4" /> 
                   <div className="w-6 h-6 rounded-full bg-blue-cool" />
                   <ArrowRight className="w-4 h-4" />
                   <div className="w-5 h-5 bg-blue-cool clip-hexagon" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Column 3: Nervous System */}
          <motion.div variants={item} className="flex flex-col h-full bg-surface p-8 rounded-sm hover-lift">
            <h3 className="font-serif text-3xl mb-4">Nervous</h3>
            <p className="font-sans text-sm md:text-base text-charcoal/70 mb-8 min-h-[140px]">
              <strong className="font-medium text-charcoal block mb-2">Chronically in survival mode</strong>
              Under sustained cortisol, the body deprioritises repair. Skin healing slows, and conditions cycle. Calming the system is not optional — it&apos;s foundational.
            </p>
            
            {/* Abstract Visual: Grid (bio2 style) */}
            <div className="mt-auto pt-10 border-t border-charcoal/5">
                <div className="grid grid-cols-7 gap-1 opacity-60">
                  {Array.from({ length: 42 }).map((_, i) => {
                    // Randomly assign colors to a few blocks following bio2
                    let bgColor = "bg-charcoal/5";
                    if (i === 17) bgColor = "bg-accent";
                    if (i === 24) bgColor = "bg-blue-cool";
                    if (i === 13) bgColor = "bg-green-botanical";
                    if (i === 31) bgColor = "bg-amber-500";
                    if (i === 8 || i === 22 || i === 38) bgColor = "bg-charcoal/15";

                    return (
                      <div key={i} className={`aspect-square w-full rounded-[1px] ${bgColor}`} />
                    );
                  })}
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
