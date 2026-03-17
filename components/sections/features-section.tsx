"use client";

import { HeartIcon } from "@heroicons/react/24/outline";

// Custom SVG icons for features
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const features = [
  {
    Icon: LeafIcon,
    title: "Balanced by Nature",
    description: "Responsibly sourced botanical extracts meet time-honored skincare wisdom.",
  },
  {
    Icon: BeakerIcon,
    title: "Refined by Science",
    description: "Clinically tested actives at optimal concentrations.",
  },
  {
    Icon: HeartIcon,
    title: "Designed for Peace",
    description: "Fragrance-free options, sustainable packaging, transparent sourcing.",
  },
];

export function FeaturesSection() {
  return (
    <section id="about" className="w-full bg-[#f5f3ef] py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header - Centered */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light text-[#1a1a1a] sm:text-4xl">
            Beauty in <span className="italic">Balance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#8b8680]">
            We believe the best skincare exists at the intersection of nature&apos;s wisdom 
            and scientific innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center text-[#c9a962]">
                <feature.Icon />
              </div>

              {/* Content */}
              <h3 className="text-base font-medium text-[#1a1a1a]">{feature.title}</h3>
              <div className="mx-auto my-3 h-px w-8 bg-[#c9a962]" />
              <p className="text-sm text-[#8b8680] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
