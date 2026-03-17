"use client";

import { motion } from "framer-motion";

export function Evidence() {
  const stats = [
    {
      value: "70%",
      desc: "of the entire immune system resides in the gut."
    },
    {
      value: "40%",
      desc: "reduction in skin barrier recovery rate caused by chronic stress."
    },
    {
      value: "Clinical",
      desc: "Gut-skin axis dysfunction is highly implicated in acne, eczema, and rosacea."
    }
  ];

  return (
    <section className="bg-surface text-charcoal py-24 md:py-40 px-6 border-t border-charcoal/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-serif text-6xl md:text-8xl tracking-tight mb-6">{stat.value}</span>
              <div className="w-12 h-[2px] bg-accent/50 mb-6" />
              <p className="font-sans text-lg md:text-xl font-light text-charcoal/80 leading-relaxed max-w-sm">
                {stat.desc}
              </p>
            </div>
          ))}
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 1 }}
           className="mt-24 pt-12 border-t border-charcoal/10 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
           <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest">Clinically Informed</span>
              <span className="font-mono text-xs uppercase tracking-widest">Peer-Reviewed Research</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
