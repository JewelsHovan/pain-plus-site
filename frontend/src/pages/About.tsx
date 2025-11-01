import { TeamMember } from '@/components/about/TeamMember';
import { Card, CardContent } from '@/components/ui/card';
import { Target, BookOpen, Video } from 'lucide-react';
import { ABOUT_CONTENT } from '@/constants';

export function About() {
  return (
    <div className="snap-scroll-page">
      {/* Our Story Section */}
      <section className="snap-section snap-section-full bg-muted/20 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/30 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {ABOUT_CONTENT.story.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {ABOUT_CONTENT.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="snap-section snap-section-full bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {ABOUT_CONTENT.mission.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {ABOUT_CONTENT.mission.content}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {ABOUT_CONTENT.mission.belief}
              </p>
              <ul className="space-y-2 text-left max-w-xl mx-auto">
                {ABOUT_CONTENT.mission.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 text-xl">•</span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="snap-section py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {ABOUT_CONTENT.teamIntro.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
              {ABOUT_CONTENT.teamIntro.subtitle}
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              {ABOUT_CONTENT.teamIntro.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {ABOUT_CONTENT.team.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="snap-section py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {ABOUT_CONTENT.collaboration.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {ABOUT_CONTENT.collaboration.subtitle}
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                  {ABOUT_CONTENT.collaboration.partner.name}
                </h3>
                <p className="text-lg text-muted-foreground text-center mb-6 italic">
                  {ABOUT_CONTENT.collaboration.partner.tagline}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {ABOUT_CONTENT.collaboration.partner.description}
                </p>

                {/* Video Placeholder */}
                {ABOUT_CONTENT.collaboration.partner.videoPlaceholder && (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Video className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        NGA Collaboration Video Placeholder
                      </p>
                    </div>
                  </div>
                )}

                {/* Disclaimer */}
                <p className="text-sm text-muted-foreground italic border-l-4 border-muted pl-4">
                  {ABOUT_CONTENT.collaboration.partner.disclaimer}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
