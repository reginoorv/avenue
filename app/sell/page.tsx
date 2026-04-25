import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function SellPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-warm">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/hero-mansion.jpg"
            alt="Luxury background pattern"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Maximize Your Return
          </span>
          <h1 className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            List Your Exceptional <br className="hidden md:block" />
            Home With Us
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
            Leverage our global network, exclusive marketing strategies, and unparalleled market expertise to sell your luxury property.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Col: Info */}
            <div className="flex-1 lg:max-w-xl">
              <h2 className="font-serif text-text-dark text-4xl font-bold mb-8">
                Why sell with Avenue?
              </h2>
              <div className="w-16 h-1 bg-gold mb-10" />
              
              <p className="text-text-muted text-lg mb-12 leading-relaxed">
                When you list with Avenue Real Estate, you gain access to a world-class team of experts dedicated to showcasing your property to the most qualified buyers globally.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Global Reach", desc: "Your property will be marketed across our extensive international network of high-net-worth individuals." },
                  { title: "Bespoke Marketing", desc: "We create custom, high-end marketing campaigns including professional videography, staging, and PR." },
                  { title: "Expert Valuation", desc: "Our data-driven approach ensures your home is priced accurately for the current luxury market." },
                  { title: "Discreet Service", desc: "We prioritize your privacy and offer off-market listing options for sellers who require total discretion." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-text-dark mb-2">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="flex-1">
              <div className="bg-white border border-border-card p-10 md:p-14 shadow-sm relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                  Request a Valuation
                </h3>
                <p className="text-text-muted text-sm mb-8">
                  Fill out the form below and one of our expert advisors will be in touch shortly.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-dark uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent font-medium" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-dark uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent font-medium" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent font-medium" placeholder="jane@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-wider">Phone Number</label>
                    <input type="tel" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent font-medium" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-dark uppercase tracking-wider">Property Address</label>
                    <input type="text" className="w-full border-b border-border-card py-3 focus:outline-none focus:border-gold transition-colors text-text-dark bg-transparent font-medium" placeholder="123 Luxury Way" />
                  </div>

                  <button type="button" className="w-full bg-gold hover:bg-gold/90 transition-colors text-white text-xs font-bold uppercase tracking-[0.15em] py-5 mt-8">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
