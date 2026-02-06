"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CONFIG } from "@/src/constants/config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Helper to slugify product names for links
const getProductSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[\(\)]/g, "");

export default function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.webp" 
          alt="Products Background"
          fill 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="industrial-border pl-6">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Our Catalog</span>
            <h2 className="text-4xl font-bold mt-2 text-white">Featured Products</h2>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollPrev}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-brand-primary hover:border-brand-primary transition-all h-12 w-12"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollNext}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-brand-primary hover:border-brand-primary transition-all h-12 w-12"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {CONFIG.products.map((product, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <Link href={`/products/${getProductSlug(product.name)}`} className="block group bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-brand-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Product Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-white font-bold text-xl tracking-wide group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="w-12 h-1 bg-brand-primary mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
