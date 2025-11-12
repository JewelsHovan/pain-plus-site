import { useState } from 'react';
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
    <div>
      {/* Main Content */}
      <section className="bg-background flex items-center justify-center py-12 md:py-24">
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

            {/* Form Section */}
            <div className="space-y-8">
              {/* Heading - centered above both columns */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {WAITLIST_CONTENT.form.title}
                </h2>
                <p className="text-muted-foreground">
                  {WAITLIST_CONTENT.form.description}
                </p>
              </div>

              {/* Two Column Layout: Progress and Form */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-stretch">
                {/* Progress Indicator - first on mobile, second on desktop */}
                <div className="order-1 lg:order-2">
                  <WaitlistProgress key={refreshKey} />
                </div>

                {/* Registration Form - second on mobile, first on desktop */}
                <div className="order-2 lg:order-1">
                  <WaitlistForm onSuccess={handleSuccess} />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <WaitlistBenefits />
          </div>
        </div>
      </section>
    </div>
  );
}
