import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* TOP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 group mb-6">
              <div className="w-10 h-10 border border-gold flex items-center justify-center bg-transparent group-hover:bg-gold/10 transition-colors">
                <span className="font-serif text-gold font-bold text-lg tracking-wider">
                  AH
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-white text-lg font-bold tracking-widest uppercase leading-tight">
                  Avenue
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium leading-none">
                  Real Estate
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-8 text-balance">
              Avenue Real Estate is a global luxury real estate brokerage representing premier properties around the world.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Careers', 'Press', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-6">
              Properties
            </h4>
            <ul className="space-y-4">
              {['Luxury Homes', 'New Listings', 'Featured Properties', 'Sold Properties'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {['Buyers Guide', 'Sellers Guide', 'Market Insights', 'Blog'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+13105550192" className="text-sm text-white/70 hover:text-gold transition-colors block">
                  +1 (310) 555-0192
                </a>
              </li>
              <li>
                <a href="mailto:hello@avenuerealestate.com" className="text-sm text-white/70 hover:text-gold transition-colors block">
                  hello@avenuerealestate.com
                </a>
              </li>
              <li className="text-sm text-white/70 mt-4 leading-relaxed">
                1234 Avenue of the Stars<br />
                Los Angeles, CA 90067
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>&copy; 2024 Avenue Real Estate. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
             <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
