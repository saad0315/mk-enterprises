import React from "react";
import { CONFIG } from "@/src/constants/config";
import { TreeDeciduous, Zap, Hammer, Layers, Box, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  TreeDeciduous,
  Zap,
  Hammer,
  Layers,
  Box,
  Shield,
};

export default function ProductRange() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm">Versatility</span>
          <h2 className="text-4xl font-bold mt-3 text-brand-text">Our Product Range</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6"></div>
          <p className="text-zinc-500 mt-6 text-lg">
            From raw logs to finished engineered products, we provide a comprehensive range of timber solutions for every industrial and commercial need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.productRange.map((item, index) => {
            const Icon = iconMap[item.icon] || Box;
            return (
              <div 
                key={index} 
                className="group p-8 border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500 rounded-2xl relative overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <Icon className="absolute -right-4 -bottom-4 w-32 h-32 text-zinc-200/50 group-hover:text-brand-primary/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-brand-text group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link 
                    href="/products" 
                    className="flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:text-brand-primary transition-colors"
                  >
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
