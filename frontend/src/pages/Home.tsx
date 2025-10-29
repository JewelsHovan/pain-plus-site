import { HeroSection } from '@/components/home/HeroSection';
import { ProblemStatement } from '@/components/home/ProblemStatement';
import { FeaturesSection } from '@/components/home/FeaturesSection';

export function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemStatement />
      <FeaturesSection />
    </div>
  );
}
