"use client";

import Image from "next/image";

// Custom Quote Icon
const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10 text-[#c9a962]">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

export function TestimonialSection() {
  return (
    <section className="w-full bg-[#faf9f7] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Quote Content */}
          <div>
            {/* Pagination Indicator */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-sm font-medium text-[#1a1a1a]">01</span>
              <div className="h-px flex-1 bg-[#e5e2dd]">
                <div className="h-full w-1/5 bg-[#c9a962]" />
              </div>
              <span className="text-sm text-[#8b8680]">05</span>
            </div>

            {/* Quote Icon */}
            <QuoteIcon />

            {/* Quote Text */}
            <blockquote className="mt-6">
              <p className="text-2xl font-light leading-relaxed text-[#1a1a1a] sm:text-3xl lg:text-4xl">
                My skin feels much calmer since using Lumière. The texture is light, 
                the results are real—it&apos;s like giving my skin a new lease on life.
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-[#f5f3ef]">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                  alt="Customer"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-[#1a1a1a]">Sarah Mitchell</p>
                <p className="text-sm text-[#8b8680]">Verified Buyer • Using for 3 months</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="mt-10 flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === 0 ? "w-6 bg-[#c9a962]" : "bg-[#e5e2dd] hover:bg-[#c9a962]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
                alt="Happy customer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#1a1a1a] p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#1a1a1a] bg-[#2d2d2d]"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-lg font-medium text-white">50,000+</p>
                  <p className="text-xs text-white/60">Happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
