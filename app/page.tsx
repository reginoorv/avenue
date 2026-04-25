import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASearch from "@/components/CTASearch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <CTASearch />
      <Footer />
    </main>
  );
}
