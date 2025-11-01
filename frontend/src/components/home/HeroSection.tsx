import { Button } from '@/components/ui/button';
import { WaveDivider } from '@/components/layout/WaveDivider';
import { Link } from 'react-router-dom';
import { HOME_CONTENT, ROUTES } from '@/constants';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative snap-section snap-section-full text-primary-foreground overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: 'url(/Hero_img.png)' }}
      />

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent" />

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          <Link to={ROUTES.CONTACT} className="inline-flex items-center gap-2">
            {HOME_CONTENT.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
      <WaveDivider color="#FFFFFF" />
    </section>
  );
}
