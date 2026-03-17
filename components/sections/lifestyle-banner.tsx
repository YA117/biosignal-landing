"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function LifestyleBanner() {
  return (
    <section id="science" className="relative w-full overflow-hidden">
      <div className="relative aspect-[21/9] min-h-[400px] w-full">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
          alt="Skincare lifestyle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-6 text-center">
            {/* Main Headline */}
            <h2 className="text-2xl font-light leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
              Science-Backed Skincare
              <span className="mx-3 text-[#c9a962]">•</span>
              <span className="italic">Effortless Radiance</span>
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/70 italic">
              A Ritual of Light. A Gentle Invitation to Rediscover the Quiet Glow Within.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="#waitlist"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#1a1a1a]"
              >
                Shop Now
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
