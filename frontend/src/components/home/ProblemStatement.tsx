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
          {/* Main Statement - Bold Typography (Option 7) */}
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto">
              {t('home.problem.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.problem.description')}
            </p>
          </div>

          {/* Compelling Stat Callout (Option 4) */}
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl px-6 py-3 sm:px-8 sm:py-4">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {t('home.problem.statValue')}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t('home.problem.statLabel')}
              </p>
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
