import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}