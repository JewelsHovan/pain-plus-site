import { useState } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import {
  WaitlistForm,
  WaitlistProgress,
  WaitlistBenefits,
} from '@/components/waitlist';
import { WAITLIST_CONTENT } from '@/constants/content';

export function Waitlist() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    // Trigger a refresh of the progress component
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="snap-scroll-page">
      {/* Hero Section */}
      <PageHero
        title={WAITLIST_CONTENT.hero.title}
        subtitle={WAITLIST_CONTENT.hero.subtitle}
      />

      {/* Main Content */}
      <section className="snap-section snap-section-full bg-background flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Beta Message */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
              <CardContent className="p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {WAITLIST_CONTENT.beta.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  {WAITLIST_CONTENT.beta.description}
                </p>
              </CardContent>
            </Card>

            {/* Progress Indicator */}
            <WaitlistProgress key={refreshKey} />

            {/* Registration Form */}
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {WAITLIST_CONTENT.form.title}
                </h2>
                <p className="text-muted-foreground">
                  {WAITLIST_CONTENT.form.description}
                </p>
              </div>
              <WaitlistForm onSuccess={handleSuccess} />
            </div>

            {/* Benefits Section */}
            <WaitlistBenefits />
          </div>
        </div>
      </section>
    </div>
  );
}
