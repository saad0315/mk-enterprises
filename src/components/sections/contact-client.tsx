"use client";

import React from "react";
import { CONFIG } from "@/src/constants/config";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { MapPin, Phone, Mail, Globe, Printer } from "lucide-react";

export default function ContactClient() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/hero-timber.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 italic uppercase tracking-tighter">
            Contact <span className="text-brand-primary">Us</span>
          </h1>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Get in touch with our team for sales queries, import/export questions, or feedback.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-8">
              <div className="industrial-border pl-6 mb-8">
                <h2 className="text-3xl font-bold text-brand-text leading-tight">
                  Send us a Message
                </h2>
              </div>
              <p className="text-zinc-600 mb-8">
                You may use this form to contact us for general sales queries, import/export questions for our products, or to provide feedback about {CONFIG.companyName} products, its website, and/or its services.
              </p>
              
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization *</Label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Your office address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone No. *</Label>
                      <Input id="phone" placeholder="Contact number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Purpose of contact" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Inquiries / Feedback *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      className="min-h-[150px]"
                      required 
                    />
                  </div>

                  <p className="text-sm text-brand-primary font-medium">
                    * Please mention your name and contact information if you wish to be contacted by us.
                  </p>

                  <Button type="submit" size="lg" className="bg-brand-primary hover:bg-red-700 w-full md:w-auto px-8">
                    Submit Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column: Contact Information */}
            <div className="lg:col-span-4 space-y-8">
               {/* Head Office Card */}
              <div className="bg-zinc-900 text-zinc-300 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <h3 className="text-white font-bold text-xl mb-6 border-b border-zinc-700 pb-4">
                  {CONFIG.companyName}
                </h3>
                
                <ul className="space-y-6 text-sm">
                   <ContactItem 
                    icon={<MapPin className="text-brand-primary" size={18} />}
                    label="Address"
                    value={CONFIG.contact.address}
                   />
                   <ContactItem 
                    icon={<Phone className="text-brand-primary" size={18} />}
                    label="Tel"
                    value={
                      <>
                        <a href={`tel:${CONFIG.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{CONFIG.contact.phone}</a>
                        <br/>
                        {/* <a href={`tel:${CONFIG.contact.altPhone}`} className="hover:text-white transition-colors">{CONFIG.contact.altPhone}</a> */}
                      </>
                    }
                   />
                   {/* <ContactItem 
                    icon={<Printer className="text-brand-primary" size={18} />}
                    label="Fax"
                    value={CONFIG.contact.fax}
                   /> */}
                   <ContactItem 
                    icon={<Globe className="text-brand-primary" size={18} />}
                    label="Website"
                    value="www.mkentpk.com"
                   />
                   <ContactItem 
                    icon={<Mail className="text-brand-primary" size={18} />}
                    label="Email"
                    value={<a href={`mailto:${CONFIG.contact.email}`} className="hover:text-white transition-colors">{CONFIG.contact.email}</a>}
                   />
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-zinc-100 rounded-2xl h-64 w-full flex items-center justify-center border border-zinc-200">
                <p className="text-zinc-400 font-medium flex flex-col items-center gap-2">
                  <MapPin size={32} />
                  <span>Google Map Embed</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <span className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">{label}</span>
        <span className="block leading-relaxed">{value}</span>
      </div>
    </li>
  );
}
