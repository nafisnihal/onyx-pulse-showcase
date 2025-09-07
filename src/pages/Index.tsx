import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ProductSpotlight, onyxProduct, pulseProduct } from '@/components/ProductSpotlight'
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />
        <section id="products" className="relative">
          <ProductSpotlight product={onyxProduct} />
          <ProductSpotlight product={pulseProduct} />
        </section>
        <FeaturesSection />
        <AboutSection></AboutSection>
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index