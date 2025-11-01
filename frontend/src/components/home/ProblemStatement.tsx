import { Palette } from 'lucide-react';
import { HOME_CONTENT } from '@/constants';

export function ProblemStatement() {
  return (
    <section className="snap-section snap-section-full bg-muted/30 flex items-center justify-center min-h-[500px] sm:min-h-screen py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/30 mb-6">
            <Palette className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {HOME_CONTENT.problem.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {HOME_CONTENT.problem.description}
          </p>
        </div>
      </div>
    </section>
  );
}
