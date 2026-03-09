import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import DualPathSection from "@/components/home/DualPathSection";
import CoachSection from "@/components/home/CoachSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhoItsForSection from "@/components/home/WhoItsForSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingPreview from "@/components/home/PricingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQPreview from "@/components/home/FAQPreview";
import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DualPathSection />
      <CoachSection />
      <ServicesSection />
      <WhoItsForSection />
      <HowItWorksSection />
      <PricingPreview />
      <TestimonialsSection />
      <FAQPreview />
      <LocationSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
