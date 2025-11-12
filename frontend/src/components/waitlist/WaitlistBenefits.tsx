import { Sparkles, Users, Lightbulb, type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { WAITLIST_CONTENT } from '@/constants/content';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Users,
  Lightbulb,
};

export function WaitlistBenefits() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
        {WAITLIST_CONTENT.benefits.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {WAITLIST_CONTENT.benefits.items.map((benefit, index) => {
          const Icon = iconMap[benefit.icon] || Sparkles;
          return (
            <Card
              key={index}
              className="border-2 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
