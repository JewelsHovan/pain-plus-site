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

      {/* CTA Section - Hybrid Design: Gradient + Card Elevation + Immersive */}
      <section className="snap-section snap-section-full bg-gradient-to-br from-primary via-secondary/80 to-accent relative overflow-hidden flex items-center justify-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Elevated Card */}
          <div className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-white/20 animate-in fade-in slide-in-from-bottom duration-700">
            {/* Decorative accent line */}
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full" />

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center leading-tight">
              {HOW_IT_WORKS_CONTENT.cta.title}
            </h2>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Join innovative practitioners transforming pain care with evidence-based digital tools
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link to={ROUTES.CONTACT} className="flex items-center gap-2">
                  {HOW_IT_WORKS_CONTENT.cta.button}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-muted/30">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Easy Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
