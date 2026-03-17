"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const products = [
  {
    id: "protect",
    name: "Lightweight Daily Shield",
    category: "Protect",
    price: "$48",
    rating: 4.9,
    reviews: 284,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&q=80",
  },
  {
    id: "enhance",
    name: "Midnight Cream",
    category: "Enhance",
    price: "$62",
    rating: 4.8,
    reviews: 196,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
  },
  {
    id: "treat",
    name: "Recovery Ampoule",
    category: "Treat",
    price: "$85",
    rating: 5.0,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
  },
  {
    id: "hydrate",
    name: "HA Essence",
    category: "Hydrate",
    price: "$58",
    rating: 4.9,
    reviews: 428,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&q=80",
  },
];

export function CommunityFavorites() {
  return (
    <section className="w-full bg-[#faf9f7] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b8680]">
            Most Loved
          </span>
          <h2 className="mt-4 text-3xl font-light text-[#1a1a1a] sm:text-4xl md:text-5xl">
            Our Community&apos;s <span className="font-normal italic">Favorites</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#8b8680]">
            Thousands of glowing reviews. Discover why these products have earned 
            a permanent place in skincare routines worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#f5f3ef]">
                {/* Image */}
                <div className="aspect-[3/4] relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1a1a1a] backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick Add Button */}
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-colors hover:bg-[#c9a962]">
                      <ShoppingBagIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="h-3.5 w-3.5 text-[#c9a962]" />
                  <span className="text-sm font-medium text-[#1a1a1a]">{product.rating}</span>
                  <span className="text-xs text-[#8b8680]">({product.reviews})</span>
                </div>
                <h3 className="mt-1 text-base font-medium text-[#1a1a1a] group-hover:text-[#c9a962] transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[#8b8680]">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a] underline-offset-4 hover:text-[#c9a962] hover:underline"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
