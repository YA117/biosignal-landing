"use client";

import { motion } from "framer-motion";

export function Method() {
  const steps = [
    {
      num: "001",
      title: "Interpret",
      desc: "Identify which signals your skin is sending and which internal systems are driving them. (Assessment, pattern recognition, root cause mapping.)"
    },
    {
      num: "002",
      title: "Resolve",
      desc: "Address the underlying triggers through targeted interventions across gut, barrier, and nervous system. (Not a single product — a structured protocol.)"
    },
    {
      num: "003",
      title: "Rebuild",
      desc: "Restore long-term resilience so the body can maintain clarity independently. (The goal is not dependence on BioSignal — it's functional independence.)"
    }
  ];

  return (
    <section className="bg-background text-charcoal py-24 md:py-32 overflow-hidden border-t border-charcoal/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24 flex items-center gap-6">
           <h2 className="font-serif text-3xl md:text-5xl">The BioSignal Method</h2>
        </div>

        {/* Numbered List (bio1) */}
        <div className="max-w-4xl border-t border-charcoal/10 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-4 md:gap-12 py-10 border-b border-charcoal/10"
            >
              <div className="font-mono text-charcoal/40 text-sm tracking-widest">{step.num}</div>
              <h3 className="font-serif text-3xl md:text-4xl">{step.title}</h3>
              <p className="font-sans text-charcoal/70 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal scrollable abstract network diagrams (bio1) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 md:mt-32 w-full flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide padding-right-safe"
        >
          {/* Card 1 - Yellow Network Overlay */}
          <div className="min-w-[320px] md:min-w-[480px] h-[300px] bg-surface rounded-md p-8 relative snap-center flex-shrink-0 flex items-center justify-center overflow-hidden">
             <svg width="100%" height="100%" viewBox="0 0 400 240" className="absolute opacity-80" style={{ stroke: '#c9a962', strokeWidth: 1.5, fill: 'none' }}>
                <circle cx="80" cy="150" r="10" fill="#fdf0d5" strokeWidth="0" />
                <circle cx="80" cy="150" r="4" fill="#d89614" />
                <circle cx="160" cy="80" r="10" fill="#fdf0d5" strokeWidth="0" />
                <circle cx="160" cy="80" r="4" fill="#d89614" />
                <circle cx="280" cy="120" r="10" fill="#fdf0d5" strokeWidth="0" />
                <circle cx="280" cy="120" r="4" fill="#d89614" />
                <circle cx="350" cy="190" r="10" fill="#fdf0d5" strokeWidth="0" />
                <circle cx="350" cy="190" r="4" fill="#d89614" />
                <circle cx="120" cy="200" r="10" fill="#fdf0d5" strokeWidth="0" />
                <circle cx="120" cy="200" r="4" fill="#d89614" />
                <path d="M 80 150 L 160 80" />
                <path d="M 160 80 L 280 120" />
                <path d="M 280 120 L 350 190" />
                <path d="M 80 150 L 120 200" />
                <path d="M 120 200 L 280 120" />
             </svg>
          </div>

          {/* Card 2 - Blue Network Hierarchy */}
          <div className="min-w-[320px] md:min-w-[480px] h-[300px] bg-surface rounded-md p-8 relative snap-center flex-shrink-0 flex items-center justify-center overflow-hidden">
             <svg width="100%" height="100%" viewBox="0 0 400 240" className="absolute opacity-80" style={{ stroke: '#2b5c77', strokeWidth: 1.5, fill: 'none' }}>
                <circle cx="50" cy="50" r="10" fill="#e0f0f9" strokeWidth="0" />
                <circle cx="50" cy="50" r="4" fill="#2b5c77" />
                
                <circle cx="150" cy="50" r="10" fill="#e0f0f9" strokeWidth="0" />
                <circle cx="150" cy="50" r="4" fill="#2b5c77" />
                
                <circle cx="100" cy="120" r="10" fill="#e0f0f9" strokeWidth="0" />
                <circle cx="100" cy="120" r="4" fill="#2b5c77" />
                
                <circle cx="250" cy="120" r="10" fill="#e0f0f9" strokeWidth="0" />
                <circle cx="250" cy="120" r="4" fill="#2b5c77" />

                <circle cx="350" cy="120" r="10" fill="#e0f0f9" strokeWidth="0" />
                <circle cx="350" cy="120" r="4" fill="#2b5c77" />
                
                <circle cx="200" cy="200" r="10" fill="#e0f0f9" strokeWidth="0" />
                <circle cx="200" cy="200" r="4" fill="#2b5c77" />

                <path d="M 50 50 L 100 120" />
                <path d="M 150 50 L 100 120" />
                <path d="M 150 50 L 250 120" />
                <path d="M 100 120 L 200 200" />
                <path d="M 250 120 L 200 200" />
                <path d="M 250 120 L 350 120" />
             </svg>
          </div>

          {/* Card 3 - Red Node Path */}
          <div className="min-w-[320px] md:min-w-[480px] h-[300px] bg-surface rounded-md p-8 relative snap-center flex-shrink-0 flex items-center justify-center overflow-hidden">
             <svg width="100%" height="100%" viewBox="0 0 400 240" className="absolute opacity-80" style={{ stroke: '#d86846', strokeWidth: 1.5, fill: 'none' }}>
                <circle cx="60" cy="120" r="10" fill="#fbeae5" strokeWidth="0" />
                <circle cx="60" cy="120" r="4" fill="#d86846" />
                
                <circle cx="160" cy="120" r="10" fill="#fbeae5" strokeWidth="0" />
                <circle cx="160" cy="120" r="4" fill="#d86846" />
                
                <circle cx="260" cy="60" r="10" fill="#fbeae5" strokeWidth="0" />
                <circle cx="260" cy="60" r="4" fill="#d86846" />
                
                <circle cx="260" cy="180" r="10" fill="#fbeae5" strokeWidth="0" />
                <circle cx="260" cy="180" r="4" fill="#d86846" />
                
                <circle cx="360" cy="120" r="10" fill="#fbeae5" strokeWidth="0" />
                <circle cx="360" cy="120" r="4" fill="#d86846" />
                
                <path d="M 60 120 L 160 120" />
                <path d="M 160 120 L 260 60" />
                <path d="M 160 120 L 260 180" />
                <path d="M 260 60 L 360 120" />
                <path d="M 260 180 L 360 120" />
             </svg>
          </div>
          
          <div className="w-[1px] flex-shrink-0" /> {/* Spacer */}
        </motion.div>
        
        <div className="mt-8 flex justify-between items-center text-charcoal/40 font-mono text-xs">
           <span>01/05</span>
           <div className="flex gap-4">
             <span>←</span>
             <span>→</span>
           </div>
        </div>
      </div>
    </section>
  );
}
