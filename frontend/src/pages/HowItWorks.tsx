import { PageHero } from '@/components/common/PageHero';
import { ProcessStep } from '@/components/how-it-works/ProcessStep';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HOW_IT_WORKS_CONTENT, ROUTES } from '@/constants';

export function HowItWorks() {
  return (
    <div>
      <PageHero
        title={HOW_IT_WORKS_CONTENT.hero.title}
        subtitle={HOW_IT_WORKS_CONTENT.hero.subtitle}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {HOW_IT_WORKS_CONTENT.cta.title}
          </h2>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold">
            <Link to={ROUTES.CONTACT}>{HOW_IT_WORKS_CONTENT.cta.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
