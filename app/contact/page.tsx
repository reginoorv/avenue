import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-warm">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/cta-background.jpg"
            alt="Luxury office interior"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connect With Our <br className="hidden md:block" />
            Advisors
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
            Whether you are looking to acquire a new property, list your current home, or speak to a wealth advisor, we are here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 md:py-32 flex-grow">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Col: Contact Form */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="bg-white border border-border-card p-10 md:p-14 shadow-sm relative">
                <div className="absolute top-0 left-0 w-1 bg-gold h-full" />
                <h3 className="font-serif text-3xl font-bold text-text-dark mb-4">
                  Send us a Message
                </h3>
                <p className="text-text-muted text-sm mb-10 font-light">
                  Complete the form below and a dedicated representative will respond securely within 24 hours.
                </p>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">First Name</label>
                      <input type="text" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent text-sm placeholder:text-text-muted/50" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Last Name</label>
                      <input type="text" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent text-sm placeholder:text-text-muted/50" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent text-sm placeholder:text-text-muted/50" placeholder="you@domain.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent text-sm placeholder:text-text-muted/50" placeholder="+1 (000) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">I am interested in</label>
                    <select className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent text-sm appearance-none cursor-pointer">
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="general">General Inquiry</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Message</label>
                    <textarea 
                      className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent text-sm placeholder:text-text-muted/50 resize-none h-32" 
                      placeholder="Please provide any details that will help us assist you..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-gold hover:bg-gold/90 transition-colors text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-5 mt-4 group flex items-center justify-center gap-4 w-full md:w-auto">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Right Col: Offices */}
            <div className="flex-1 lg:pl-10">
              <h2 className="font-serif text-text-dark text-4xl font-bold mb-8">
                Our Global Offices
              </h2>
              <div className="w-16 h-1 bg-gold mb-12" />
              
              <div className="space-y-16">
                {/* Office 1 */}
                <div>
                  <h4 className="font-serif text-2xl font-bold text-text-dark mb-6">New York Headquarters</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <p className="text-text-muted font-light leading-relaxed">
                        100 Park Avenue, Suite 3400<br />
                        New York, NY 10017<br />
                        United States
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-gold shrink-0" />
                      <p className="text-text-dark font-medium">+1 (212) 555-0198</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-gold shrink-0" />
                      <p className="text-text-dark font-medium">nyc@avenuerealestate.com</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border-card w-full" />

                {/* Office 2 */}
                <div>
                  <h4 className="font-serif text-2xl font-bold text-text-dark mb-6">Beverly Hills</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <p className="text-text-muted font-light leading-relaxed">
                        9500 Wilshire Boulevard<br />
                        Beverly Hills, CA 90212<br />
                        United States
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-gold shrink-0" />
                      <p className="text-text-dark font-medium">+1 (310) 555-0245</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-gold shrink-0" />
                      <p className="text-text-dark font-medium">la@avenuerealestate.com</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border-card w-full" />

                {/* Office 3 */}
                <div>
                  <h4 className="font-serif text-2xl font-bold text-text-dark mb-6">London</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <p className="text-text-muted font-light leading-relaxed">
                        1 Mayfair Place<br />
                        London, W1J 8AJ<br />
                        United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-gold shrink-0" />
                      <p className="text-text-dark font-medium">+44 20 7946 0123</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-gold shrink-0" />
                      <p className="text-text-dark font-medium">london@avenuerealestate.com</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
