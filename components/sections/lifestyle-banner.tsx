"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function LifestyleBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[21/9] min-h-[500px] w-full">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
          alt="Skincare lifestyle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            {/* Tagline */}
            <p className="animate-fade-in-up text-xs uppercase tracking-[0.3em] text-white/70">
              The Lumière Difference
            </p>
            
            {/* Main Headline */}
            <h2 className="animate-fade-in-up delay-100 mt-4 text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Science-Backed Skincare
              <span className="mx-4 text-[#c9a962]">•</span>
              <span className="font-normal italic">Effortless Radiance</span>
            </h2>

            {/* Subtext */}
            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
              A Ritual of Light. A Gentle Invitation to Rediscover the Quiet Glow Within.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-300 mt-10">
              <Link
                href="/search"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1a1a1a] transition-all hover:bg-[#c9a962] hover:text-white"
              >
                Explore Our Science
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
