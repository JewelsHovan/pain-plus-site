import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative snap-section snap-section-full text-primary-foreground overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: 'url(/Hero_img.png)' }}
      />

      <div className="absolute bottom-16 sm:bottom-8 md:bottom-20 left-1/2 -translate-x-1/2 z-10 px-4 text-center w-full max-w-5xl">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {t('home.hero.subtitle')}
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          <Link to={ROUTES.CONTACT} className="inline-flex items-center gap-2">
            {t('home.hero.cta')}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
