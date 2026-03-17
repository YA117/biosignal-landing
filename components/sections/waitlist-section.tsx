"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("You're on the list! We'll notify you when we launch.");
    setEmail("");
    setLoading(false);
  };

  return (
    <section id="waitlist" className="w-full bg-[#1a1a1a] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
          Launching 2025
        </span>
        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl md:text-5xl">
          Join the <span className="font-normal italic">Waitlist</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Be the first to experience science-backed skincare. Get exclusive early access 
          and 20% off your first order when we launch.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962]"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a962] px-8 py-4 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#d4b978] disabled:opacity-50"
          >
            {loading ? "Joining..." : "Get Early Access"}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-xs text-white/40">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
