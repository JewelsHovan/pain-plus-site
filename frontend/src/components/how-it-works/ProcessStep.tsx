import { ClipboardCheck, Palette, TrendingUp, Pencil, Sparkles, LineChart, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  imagePosition?: 'left' | 'right';
  image?: string;
  images?: readonly string[];
}

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Palette,
  TrendingUp,
  Pencil,
  Sparkles,
  LineChart,
  BookOpen,
};

export function ProcessStep({ number, title, description, icon, imagePosition = 'left', image, images }: ProcessStepProps) {
  const Icon = iconMap[icon];
  const isLeft = imagePosition === 'left';
  const hasDualImages = images && images.length > 0;
  const isVisualization = title === 'Visualize Your Experience';

  // For dual images, use a stacked layout for better visibility
  if (hasDualImages) {
    return (
      <div className="flex flex-col gap-8">
        {/* Text Card */}
        <div className="w-full max-w-3xl mx-auto">
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

        {/* Dual Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
          {images.map((img, index) => (
            <div key={index} className="w-full rounded-2xl overflow-hidden shadow-xl border-2 border-primary/10 bg-muted/20">
              <img
                src={img}
                alt={`${title} - ${index + 1}`}
                className="w-full max-h-[500px] md:max-h-[600px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Standard single image layout
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
      <div className="flex-1 flex justify-center">
        {image ? (
          <div className={`w-full rounded-2xl overflow-hidden shadow-xl border-2 border-primary/10 bg-muted/20 ${
            isVisualization ? 'md:w-auto md:max-w-md' : 'md:max-w-2xl'
          }`}>
            <img
              src={image}
              alt={title}
              className={`w-full object-contain ${
                isVisualization ? 'max-h-[400px] md:max-h-[600px]' : 'max-h-[400px] md:max-h-[500px]'
              }`}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl flex items-center justify-center">
            <Icon className="w-24 h-24 text-primary/30" />
          </div>
        )}
      </div>
    </div>
  );
}
