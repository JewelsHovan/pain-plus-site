import { ProcessStep } from '@/components/how-it-works/ProcessStep';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HOW_IT_WORKS_CONTENT, ROUTES } from '@/constants';

export function HowItWorks() {
  return (
    <div className="snap-scroll-page">
      {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
        <section
          key={step.number}
          className={`snap-section snap-section-full flex items-center justify-center ${
            index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProcessStep
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          </div>
        </section>
      ))}

      <section className="snap-section snap-section-full bg-muted/30 flex items-center justify-center">
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
