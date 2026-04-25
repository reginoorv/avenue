import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    image: "/property-newyork.jpg",
    category: "Market Trends",
    date: "October 12, 2023",
    title: "The Future of Luxury Real Estate in 2024",
    excerpt: "Explore the emerging trends that are shaping the high-end property market, from sustainable amenities to new epicenters of wealth.",
    featured: true,
  },
  {
    id: 2,
    image: "/property-beverly.jpg",
    category: "Lifestyle",
    date: "September 28, 2023",
    title: "Designing the Ultimate Smart Home",
    excerpt: "Integrating next-generation technology without compromising on architectural integrity and classic design principles.",
  },
  {
    id: 3,
    image: "/property-miami.jpg",
    category: "Investment",
    date: "September 15, 2023",
    title: "Top Emerging Luxury Markets",
    excerpt: "Our analysts have identified the most promising coastal and urban markets demonstrating unprecedented growth for foreign and domestic investors.",
  },
  {
    id: 4,
    image: "/hero-mansion.jpg", // Reusing available assets for demo
    category: "Architecture",
    date: "August 30, 2023",
    title: "Architectural Spotlight: The Modern Villa",
    excerpt: "How contemporary architects are redefining the Mediterranean aesthetic for the 21st century's most demanding buyers.",
  },
  {
    id: 5,
    image: "/property-miami.jpg",
    category: "Design",
    date: "August 12, 2023",
    title: "The Art of Curating Fine Art for Large Spaces",
    excerpt: "Expert advice on sourcing, lighting, and displaying museum-quality pieces in expansive luxury residences.",
  },
  {
    id: 6,
    image: "/property-newyork.jpg",
    category: "Sustainability",
    date: "July 25, 2023",
    title: "Sustainable Luxury: Eco-Friendly Estates",
    excerpt: "Sustainability is no longer an alternative—it&apos;s a standard. Discover how top-tier developments are achieving zero-net energy.",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-warm">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/hero-mansion.jpg"
            alt="Luxury architecture details"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Insights &amp; Journal
          </span>
          <h1 className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Avenue <br className="hidden md:block" />
            Dispatch
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
            Expert commentary, market analysis, and lifestyle inspiration curated by the leaders in international real estate.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 md:py-24 bg-white border-b border-border-card">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="w-full lg:w-3/5">
                <Link href={`/blog/${featuredPost.id}`} className="block relative aspect-[16/10] overflow-hidden group">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                    Featured
                  </div>
                </Link>
              </div>
              <div className="w-full lg:w-2/5 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] mb-4">
                  <span className="text-gold">{featuredPost.category}</span>
                  <span className="w-1 h-1 bg-border-card rounded-full" />
                  <span className="text-text-muted">{featuredPost.date}</span>
                </div>
                <Link href={`/blog/${featuredPost.id}`} className="group">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-6 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-text-muted text-lg leading-relaxed mb-8 font-light">
                  {featuredPost.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredPost.id}`} 
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-text-dark hover:text-gold transition-colors w-fit"
                >
                  Read Article
                  <div className="w-8 h-8 rounded-full border border-border-card flex items-center justify-center group-hover:border-gold transition-colors">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Posts */}
      <section className="py-24 md:py-32 bg-warm flex-grow">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {regularPosts.map((post) => (
              <article key={post.id} className="flex flex-col group">
                <Link href={`/blog/${post.id}`} className="block relative aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">
                    <span className="text-gold">{post.category}</span>
                    <span className="w-1 h-1 bg-border-card rounded-full" />
                    <span className="text-text-muted">{post.date}</span>
                  </div>
                  
                  <Link href={`/blog/${post.id}`} className="block mb-4">
                    <h3 className="font-serif text-2xl font-bold text-text-dark group-hover:text-gold transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-text-muted leading-relaxed font-light mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-text-dark hover:text-gold transition-colors mt-auto w-fit"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="border border-gold text-text-dark hover:bg-gold hover:text-white transition-all text-sm font-bold uppercase tracking-[0.15em] px-10 py-4">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Never Miss an Update</h2>
          <p className="text-white/70 font-light mb-10 max-w-lg mx-auto">
            Subscribe to our newsletter to receive the latest market intelligence, exclusive property previews, and design inspiration directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow py-4 px-6 bg-white/5 border border-white/20 focus:outline-none focus:border-gold text-white placeholder-white/50 text-sm font-light transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-gold hover:bg-gold/90 transition-colors text-white text-xs font-bold uppercase tracking-[0.1em] px-8 py-4 sm:py-0 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
