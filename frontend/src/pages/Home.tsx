import { HeroSection } from '@/components/home/HeroSection';
import { ProblemStatement } from '@/components/home/ProblemStatement';
import { FeaturesSection } from '@/components/home/FeaturesSection';

export function Home() {
  return (
    <div className="snap-scroll-page">
      <HeroSection />
      <ProblemStatement />
      <FeaturesSection />
    </div>
  );
}
