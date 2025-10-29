import { ClipboardCheck, Palette, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  imagePosition?: 'left' | 'right';
}

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Palette,
  TrendingUp,
};

export function ProcessStep({ number, title, description, icon, imagePosition = 'left' }: ProcessStepProps) {
  const Icon = iconMap[icon];
  const isLeft = imagePosition === 'left';

  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
      <div className="flex-1">
        <Card className="border-2 hover:border-secondary transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{number}</span>
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 hidden md:block">
        <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl flex items-center justify-center">
          <Icon className="w-24 h-24 text-primary/30" />
        </div>
      </div>
    </div>
  );
}
