"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CONFIG } from "@/src/constants/config";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div className="industrial-border pl-6">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Feedback</span>
            <h2 className="text-4xl font-bold mt-2 text-brand-text">Client Testimonials</h2>
          </div>
          <p className="max-w-md text-zinc-500 italic">
            &quot;Building long-term relationships through quality and trust is our core mission.&quot;
          </p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {CONFIG.testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4 py-4"
              >
                <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col h-full hover:shadow-xl hover:border-brand-primary/20 transition-all duration-500">
                  <div className="text-brand-primary/20 mb-6">
                    <Quote size={40} fill="currentColor" />
                  </div>
                  
                  <p className="text-zinc-600 mb-8 flex-grow leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-zinc-50 pt-6">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-brand-text">{testimonial.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-brand-primary font-semibold uppercase tracking-tighter">{testimonial.role}</span>
                        <span className="text-[10px] text-zinc-400">•</span>
                        <span className="text-[11px] text-zinc-400 font-medium">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination indicators with Active State */}
        <div className="flex justify-center gap-3 mt-12">
           {CONFIG.testimonials.map((_, i) => (
             <button 
              key={i} 
              onClick={() => emblaApi?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                selectedIndex === i 
                ? "w-8 h-2 bg-brand-primary" 
                : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"
              }`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
