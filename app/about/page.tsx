import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const stats = [
  { value: "$5B+", label: "Total Sales Volume" },
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Global Partners" },
  { value: "98%", label: "Client Retention" },
];

const values = [
  {
    title: "Uncompromising Integrity",
    description: "We operate with absolute transparency and honesty, ensuring our clients' interests are always fundamentally protected."
  },
  {
    title: "Bespoke Service",
    description: "Every client is unique. We tailor our strategies to match your specific lifestyle, preferences, and long-term financial goals."
  },
  {
    title: "Global Discretion",
    description: "We understand the importance of privacy for our high-net-worth clientele, offering confidential representation in prestigious markets."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/cta-background.jpg"
            alt="Luxury architecture"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Heritage & Excellence
          </span>
          <h1 className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Redefining Luxury <br className="hidden md:block" />
            Real Estate
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
            Avenue was founded on a singular vision: to curate the world&apos;s most exceptional properties for the most discerning individuals.
          </p>
        </div>
      </section>

      {/* The Avenue Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/5] w-full relative">
                <Image
                  src="/property-newyork.jpg"
                  alt="Avenue Real Estate Heritage"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-warm -z-10 hidden md:block" />
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="w-16 h-1 bg-gold mb-8" />
              <h2 className="font-serif text-text-dark text-4xl mb-6">
                Our legacy is built on <span className="font-bold">trust, discretion, and an unrivaled network.</span>
              </h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed font-light">
                <p>
                  Since our inception, Avenue Real Estate has operated at the intersection of luxury lifestyle and prestigious property advisement. We do not merely facilitate transactions; we build wealth portfolios and secure generational legacies.
                </p>
                <p>
                  With exclusive access to off-market listings and a global rolodex of high-net-worth investors, our reach extends far beyond traditional channels. From Manhattan penthouses to Mediterranean villas, our agents are stationed in the world&apos;s most coveted zip codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="font-serif text-4xl md:text-5xl text-gold font-bold mb-4">{stat.value}</span>
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-text-dark text-4xl font-bold mb-6">Our Core Values</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((item, idx) => (
              <div key={idx} className="bg-white p-12 border border-border-card hover:shadow-xl transition-shadow duration-500">
                <div className="text-gold font-serif text-5xl mb-6 opacity-30">0{idx + 1}</div>
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
