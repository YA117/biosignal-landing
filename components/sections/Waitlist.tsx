"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Waitlist() {
  return (
    <section id="waitlist" className="bg-charcoal text-white py-32 md:py-48 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="block font-mono text-xs tracking-widest uppercase text-surface-dark/50 mb-6">
            Be first to know
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Understand the <span className="italic text-accent">signal</span>.
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed text-surface-dark/70 mb-12">
            Join the waitlist for early access, the BioSignal framework documentation, and launch pricing.
          </p>

          <form 
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // In a real app we'd POST to Supabase here.
              alert("Joined waitlist.");
            }}
          >
            <input 
               type="email" 
               placeholder="Your email address" 
               required
               className="flex-1 bg-transparent border-b border-white/20 px-4 py-4 focus:outline-none focus:border-white transition-colors"
            />
            <button 
              type="submit"
              className="group flex-shrink-0 inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-medium hover-lift transition-all"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="font-mono text-xs text-white/30 mt-8">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
