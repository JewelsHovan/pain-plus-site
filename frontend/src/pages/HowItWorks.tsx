import { ProcessStep } from '@/components/how-it-works/ProcessStep';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HOW_IT_WORKS_CONTENT, ROUTES } from '@/constants';

export function HowItWorks() {
  return (
    <div className="snap-scroll-page">
      {/* Video Section */}
      <section className="snap-section snap-section-full bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden flex items-center justify-center">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header - Icon and Title on same row */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                See PAin+ in Action
              </h2>
            </div>

            {/* Video Container */}
            <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200 mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/10 bg-gradient-to-br from-muted/50 to-background">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src={import.meta.env.VITE_VIDEO_URL || "https://your-azure-storage.blob.core.windows.net/videos/Video_F2025.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Decorative corner accents */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            {/* Description below video */}
            <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch how our platform transforms chronic pain management through innovative digital tools and evidence-based approaches
              </p>
            </div>
          </div>
        </div>
      </section>

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
              image={'image' in step ? step.image : undefined}
              images={'images' in step ? step.images : undefined}
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
