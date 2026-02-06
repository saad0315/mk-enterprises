"use client";

import Link from "next/link";
import { CONFIG } from "@/src/constants/config";
import { Phone, Mail, MapPin, ChevronDown, Facebook, Twitter, Linkedin, Menu, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

// Helper to slugify product names for links
const getProductSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[\(\)]/g, "");

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Extract first 4 products for preview
  const previewLumber = CONFIG.lumberProducts ? CONFIG.lumberProducts.slice(0, 4) : [];
  const previewEngineered = CONFIG.engineeredProducts ? CONFIG.engineeredProducts.slice(0, 4) : [];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-zinc-300 py-2.5 text-[13px] font-medium hidden md:block">
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 4.203L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </Link>
            <Link href={CONFIG.socialLinks.linkedin} className="hover:text-white transition-colors">
              <Linkedin size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md py-5 border-b border-zinc-100 shadow-sm relative z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden">
              <Image src="/logo.webp" alt={CONFIG.companyName} width={190} height={60} className="h-auto w-auto transition-transform duration-500 group-hover:scale-105 object-contain" />
            </div>
          </Link>

          {/* Desktop Nav Links */}
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
                        <div>
                          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-zinc-100">
                            Lumber Products
                          </h3>
                          <ul className="space-y-3">
                            {previewLumber.map((prod) => (
                              <li key={prod.name}>
                                <Link href={`/products/${getProductSlug(prod.name)}`} className="block text-sm font-semibold text-zinc-600 hover:text-brand-primary hover:translate-x-1 transition-all">
                                  {prod.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col h-full">
                          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-zinc-100">
                            Engineered Products
                          </h3>
                          <ul className="space-y-3 mb-6">
                            {previewEngineered.map((prod) => (
                              <li key={prod.name}>
                                <Link href={`/products/${getProductSlug(prod.name)}`} className="block text-sm font-semibold text-zinc-600 hover:text-brand-primary hover:translate-x-1 transition-all">
                                  {prod.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto pt-6 border-t border-zinc-50">
                            <Link href="/products" className="group flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-brand-primary text-white text-xs font-bold uppercase tracking-widest py-3 rounded-lg transition-all">
                              View All Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} className="text-zinc-700 hover:text-brand-primary font-bold text-[15px] uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all hover:after:w-full">
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

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 lg:hidden overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
            <ul className="flex flex-col gap-6">
              {CONFIG.navLinks.map((link) => (
                <li key={link.name} className="border-b border-zinc-100 pb-4">
                  {link.name === "Products" ? (
                    <div className="flex flex-col gap-4">
                      <button 
                        className="flex justify-between items-center w-full text-zinc-900 font-bold text-xl uppercase tracking-tight"
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      >
                        {link.name}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isMobileProductsOpen && (
                        <div className="flex flex-col gap-6 pl-4 animate-in fade-in duration-200">
                          <div>
                            <h4 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Lumber</h4>
                            <ul className="flex flex-col gap-3 border-l-2 border-zinc-100 pl-4">
                              {previewLumber.map((prod) => (
                                <li key={prod.name}>
                                  <Link href={`/products/${getProductSlug(prod.name)}`} className="text-sm font-semibold text-zinc-600" onClick={() => setIsMobileMenuOpen(false)}>
                                    {prod.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Engineered</h4>
                            <ul className="flex flex-col gap-3 border-l-2 border-zinc-100 pl-4">
                              {previewEngineered.map((prod) => (
                                <li key={prod.name}>
                                  <Link href={`/products/${getProductSlug(prod.name)}`} className="text-sm font-semibold text-zinc-600" onClick={() => setIsMobileMenuOpen(false)}>
                                    {prod.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link href="/products" className="text-brand-primary font-bold text-sm underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
                            View All Products
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-zinc-900 font-bold text-xl uppercase tracking-tight block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Contact Info */}
            <div className="bg-zinc-50 p-6 rounded-2xl mt-4">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">Get In Touch</h4>
              <div className="flex flex-col gap-5">
                <a href={`tel:${CONFIG.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-zinc-700 font-bold">
                  <div className="bg-brand-primary p-2 rounded-full text-white">
                    <Phone size={18} />
                  </div>
                  {CONFIG.contact.phone}
                </a>
                <div className="flex items-center gap-4 text-zinc-700 font-medium text-sm">
                  <div className="bg-zinc-200 p-2 rounded-full text-zinc-600">
                    <Mail size={18} />
                  </div>
                  {CONFIG.contact.email}
                </div>
              </div>
              
              <div className="flex gap-6 mt-8 pt-6 border-t border-zinc-200">
                <Link href={CONFIG.socialLinks.facebook} className="text-zinc-400 hover:text-brand-primary transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href={CONFIG.socialLinks.twitter} className="text-zinc-400 hover:text-brand-primary transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href={CONFIG.socialLinks.linkedin} className="text-zinc-400 hover:text-brand-primary transition-colors">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
