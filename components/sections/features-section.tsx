"use client";

import { HeartIcon } from "@heroicons/react/24/outline";

// Custom SVG icons for features
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const features = [
  {
    Icon: LeafIcon,
    title: "Balanced by Nature",
    description: "Responsibly sourced botanical extracts meet time-honored skincare wisdom. Every ingredient serves a purpose.",
  },
  {
    Icon: BeakerIcon,
    title: "Refined by Science",
    description: "Clinically tested actives at optimal concentrations. Our formulas are validated by dermatologists and loved by skin.",
  },
  {
    Icon: HeartIcon,
    title: "Designed for Peace",
    description: "Fragrance-free options, sustainable packaging, and transparent sourcing. Beauty without compromise.",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-[#f5f3ef] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b8680]">
            Our Philosophy
          </span>
          <h2 className="mt-4 text-3xl font-light text-[#1a1a1a] sm:text-4xl md:text-5xl">
            Beauty in <span className="font-normal italic">Balance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8b8680]">
            We believe the best skincare exists at the intersection of nature&apos;s wisdom 
            and scientific innovation. Every product is crafted with intention.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 text-[#c9a962]">
                <feature.Icon />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[#1a1a1a]">{feature.title}</h3>
              <div className="mx-auto my-4 h-px w-12 bg-[#c9a962]" />
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-[#8b8680]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-[#e5e2dd] pt-12 md:grid-cols-4">
          {[
            { value: "98%", label: "Saw visible results" },
            { value: "50+", label: "Clinical studies" },
            { value: "0%", label: "Artificial fragrances" },
            { value: "100%", label: "Cruelty free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-light text-[#c9a962] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-[#8b8680]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
