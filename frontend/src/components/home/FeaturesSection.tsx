import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = t('home.features.items', { returnObjects: true }) as Array<{
    number: number;
    title: string;
    subItems: string[];
  }>;

  const sectionTitle = t('home.features.sectionTitle');
  const sectionSubtitle = t('home.features.sectionSubtitle');

  return (
    <section className="snap-section snap-section-full bg-background flex items-center justify-center min-h-[600px] sm:min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {sectionSubtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="border-2 rounded-2xl shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Header Section with Number Badge and Title */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center shadow-md mt-3">
                      <span className="text-xl sm:text-2xl font-bold text-white">
                        {feature.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-snug">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/50 mb-6 sm:mb-8" />

                  {/* List Section */}
                  <ul className="space-y-4 sm:space-y-5">
                    {feature.subItems.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-start gap-4 pl-2 sm:pl-4"
                      >
                        {/* Styled Bullet Point */}
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5" />
                        <span className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed flex-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
