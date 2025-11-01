import { WaveDivider } from '@/components/layout/WaveDivider';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative snap-section snap-section-full bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl text-primary-foreground/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <WaveDivider color="#FFFFFF" />
    </section>
  );
}
