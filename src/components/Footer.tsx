import Link from "next/link";
import { CONFIG } from "@/src/constants/config";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight">
                MK<span className="text-brand-primary">ENTERPRISES</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Pakistan's leading industrial wood and timber solutions provider. With decades of excellence, we serve our customers with the highest quality products.
            </p>
            <div className="flex items-center gap-4">
              <Link href={CONFIG.socialLinks.facebook} className="bg-zinc-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href={CONFIG.socialLinks.twitter} className="bg-zinc-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href={CONFIG.socialLinks.linkedin} className="bg-zinc-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-brand-primary pl-3">Quick Links</h3>
            <ul className="space-y-4">
              {CONFIG.navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-primary flex items-center gap-2 transition-colors">
                    <ArrowRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-brand-primary pl-3">Group Companies</h3>
            <ul className="space-y-3">
              {CONFIG.groupCompanies.map((company) => (
                <li key={company} className="text-sm hover:text-white transition-colors cursor-default">
                  {company}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-brand-primary pl-3">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-brand-primary shrink-0" size={20} />
                <span className="text-sm">{CONFIG.contact.address}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-brand-primary shrink-0" size={20} />
                <span className="text-sm">{CONFIG.contact.phone}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-brand-primary shrink-0" size={20} />
                <span className="text-sm">{CONFIG.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} {CONFIG.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
