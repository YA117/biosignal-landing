"use client";

import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="w-full bg-[#faf9f7] py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Quote Content */}
          <div>
            {/* Pagination */}
            <div className="mb-6 text-xs text-[#8b8680] tracking-wide">
              01<span className="mx-2">/</span>05
            </div>

            {/* Quote */}
            <blockquote>
              <p className="text-xl font-light leading-relaxed text-[#1a1a1a]">
                &ldquo;My skin feels much calmer since using Lumière. The texture is light, 
                the results are real—it&apos;s like giving my skin a new lease on life.&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-6">
              <p className="text-sm font-medium text-[#1a1a1a]">Sarah Mitchell</p>
              <p className="text-xs text-[#8b8680]">Verified Buyer • 3 months</p>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex gap-2">
              <div className="h-1 w-6 bg-[#c9a962]" />
              <div className="h-1 w-1 bg-[#e5e2dd]" />
              <div className="h-1 w-1 bg-[#e5e2dd]" />
              <div className="h-1 w-1 bg-[#e5e2dd]" />
              <div className="h-1 w-1 bg-[#e5e2dd]" />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
                alt="Happy customer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
