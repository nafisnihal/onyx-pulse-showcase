import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ProductSpotlight, onyxProduct, pulseProduct } from '@/components/ProductSpotlight'
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { VoopooJourney } from "@/components/VoopooJourney";
import { FeatureSwiper } from "@/components/FeatureSwiper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />
        <VoopooJourney></VoopooJourney>
        <section id="products" className="relative">
          <ProductSpotlight product={onyxProduct} />
          <ProductSpotlight product={pulseProduct} />
        </section>

        <FeatureSwiper></FeatureSwiper>
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