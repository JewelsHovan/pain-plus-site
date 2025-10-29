import { Button } from '@/components/ui/button';
import { WaveDivider } from '@/components/layout/WaveDivider';
import { Link } from 'react-router-dom';
import { HOME_CONTENT, ROUTES } from '@/constants';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {HOME_CONTENT.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {HOME_CONTENT.hero.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
          >
            <Link to={ROUTES.CONTACT} className="inline-flex items-center gap-2">
              {HOME_CONTENT.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
      <WaveDivider color="#FFFFFF" />
    </section>
  );
}
