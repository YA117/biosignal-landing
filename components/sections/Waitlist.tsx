"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8">
              — Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-6">
              Join the waitlist
              <span className="text-blue-bio">.</span>
            </h2>
            <p className="text-base text-foreground/50 leading-relaxed mb-10 max-w-lg">
              Be among the first to access BioSignal when we launch. We&apos;ll notify you with early access details.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 py-4">
                <div className="w-2 h-2 rounded-full bg-green-bio" />
                <span className="text-sm text-foreground/60">
                  Thank you. We&apos;ll be in touch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch gap-0 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-surface border border-border border-r-0 text-sm text-foreground placeholder:text-foreground/30 outline-none focus:border-foreground/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
