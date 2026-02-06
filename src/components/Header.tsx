"use client";

import Link from "next/link";
import { CONFIG } from "@/src/constants/config";
import { Phone, Mail, MapPin, ChevronDown, Facebook, Twitter, Linkedin, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";

// Helper to slugify product names for links
const getProductSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[\(\)]/g, "");

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Extract first 4 products for preview
  const previewLumber = CONFIG.lumberProducts ? CONFIG.lumberProducts.slice(0, 4) : [];
  const previewEngineered = CONFIG.engineeredProducts ? CONFIG.engineeredProducts.slice(0, 4) : [];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar - Refined with slightly more padding and better typography */}
      <div className="bg-zinc-900 text-zinc-300 py-2.5 text-[13px] font-medium">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 group">
              <Mail size={14} className="text-brand-primary group-hover:scale-110 transition-transform" />
              <span className="hover:text-white transition-colors cursor-pointer">{CONFIG.contact.email}</span>
            </div>
            <div className="hidden lg:flex items-center gap-2.5 group">
              <MapPin size={14} className="text-brand-primary group-hover:scale-110 transition-transform" />
              <span className="hover:text-white transition-colors cursor-pointer line-clamp-1">{CONFIG.contact.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-5 border-l border-zinc-700 ml-6 pl-6">
            <Link href={CONFIG.socialLinks.facebook} className="hover:text-white transition-colors">
              <Facebook size={15} />
            </Link>
            <Link href={CONFIG.socialLinks.twitter} className="hover:text-white transition-colors">
              <Twitter size={15} />
            </Link>
            <Link href={CONFIG.socialLinks.linkedin} className="hover:text-white transition-colors">
              <Linkedin size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced with better spacing and industrial feel */}
      <nav className="bg-white/95 backdrop-blur-md py-4 border-b border-zinc-100 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden">
              <img src="/logo.png" alt={CONFIG.companyName} className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="ml-3 flex flex-col">
              <span className="text-2xl font-black text-brand-text tracking-tighter leading-none">
                MK<span className="text-brand-primary">ENTERPRISES</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mt-1">Industrial Timber Solutions</span>
            </div>
          </Link>

          {/* Nav Links - Center positioned with refined interaction */}
          <ul className="hidden lg:flex items-center gap-10">
            {CONFIG.navLinks.map((link) => (
              <li key={link.name} className="relative">
                {link.name === "Products" ? (
                  <div 
                    className="flex items-center gap-1.5 cursor-pointer text-zinc-700 hover:text-brand-primary font-bold text-[15px] uppercase tracking-wide py-2 transition-colors group"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    
                    {/* Mega Menu Dropdown */}
                    {isProductsOpen && (
                      <div className="absolute top-full -left-20 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-zinc-100 rounded-xl p-8 w-[600px] z-50 animate-in fade-in slide-in-from-top-3 duration-200 grid grid-cols-2 gap-8 cursor-default">
                        
                        {/* Column 1: Lumber Products */}
                        <div>
                          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-zinc-100">
                            Lumber Products
                          </h3>
                          <ul className="space-y-3">
                            {previewLumber.map((prod) => (
                              <li key={prod.name}>
                                <Link 
                                  href={`/products/${getProductSlug(prod.name)}`}
                                  className="block text-sm font-semibold text-zinc-600 hover:text-brand-primary hover:translate-x-1 transition-all"
                                >
                                  {prod.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Engineered Products */}
                        <div className="flex flex-col h-full">
                          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-zinc-100">
                            Engineered Products
                          </h3>
                          <ul className="space-y-3 mb-6">
                            {previewEngineered.map((prod) => (
                              <li key={prod.name}>
                                <Link 
                                  href={`/products/${getProductSlug(prod.name)}`}
                                  className="block text-sm font-semibold text-zinc-600 hover:text-brand-primary hover:translate-x-1 transition-all"
                                >
                                  {prod.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mt-auto pt-6 border-t border-zinc-50">
                            <Link 
                              href="/products" 
                              className="group flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-widest py-3 rounded-lg transition-all"
                            >
                              View All Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className="text-zinc-700 hover:text-brand-primary font-bold text-[15px] uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Action Area: Call Now Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-brand-primary hover:bg-zinc-900 text-white font-bold rounded-full px-7 h-12 shadow-lg shadow-brand-primary/20 transition-all hover:scale-105 active:scale-95">
              <a href={`tel:${CONFIG.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3">
                <div className="bg-white/20 p-1.5 rounded-full animate-pulse">
                  <Phone size={16} fill="white" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase opacity-80">Call Now</span>
                  <span className="text-sm tracking-wider">{CONFIG.contact.phone}</span>
                </div>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </nav>
    </header>
  );
}
