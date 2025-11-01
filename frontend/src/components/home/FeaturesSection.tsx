import { Users, Target, Sparkles, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HOME_CONTENT } from '@/constants';

const iconMap = {
  Users: Users,
  Target: Target,
  Sparkles: Sparkles,
  BarChart: BarChart,
};

export function FeaturesSection() {
  return (
    <section className="snap-section snap-section-full bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Art Therapy Plus?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering therapists and clients with AI-powered tools for better outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_CONTENT.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
