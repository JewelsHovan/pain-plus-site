import { Clock, DollarSign, MapPin, Users2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function ProblemStatement() {
  const { t } = useTranslation();
  const painPoints = t('home.painPoints', { returnObjects: true }) as Array<{
    label: string;
    description: string;
  }>;

  const icons = [MapPin, DollarSign, Clock, Users2];

  return (
    <section className="snap-section snap-section-full bg-gradient-to-br from-muted/50 via-background to-primary/10 relative overflow-hidden flex items-center justify-center min-h-[500px] sm:min-h-screen py-12 sm:py-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Styled Content Box */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Section Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
                {t('home.problem.sectionTitle')}
              </h2>

              {/* Two-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Text Content */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground">
                    {t('home.problem.title')}
                  </p>

                  {/* Solution Statement */}
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-foreground pt-2 border-t border-border/50">
                    {t('home.problem.description')}
                  </p>
                </div>

                {/* Right Column - Stat Card */}
                <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
                  <div className="text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8 shadow-md w-full lg:w-auto lg:min-w-[240px]">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-3">
                      {t('home.problem.statValue')}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-snug">
                      {t('home.problem.statLabel')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points Grid (Option 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, index) => {
              const Icon = icons[index];
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                      {point.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
