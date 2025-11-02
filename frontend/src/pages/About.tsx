import { TeamMember } from '@/components/about/TeamMember';
import { Card, CardContent } from '@/components/ui/card';
import { Target, BookOpen, Video } from 'lucide-react';
import { ABOUT_CONTENT } from '@/constants';

export function About() {
  return (
    <div className="snap-scroll-page">
      {/* Our Story Section */}
      <section className="snap-section snap-section-full bg-gradient-to-br from-muted/30 via-background to-muted/20 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left duration-700">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary/30 flex-shrink-0">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
                    {ABOUT_CONTENT.story.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {ABOUT_CONTENT.story.content}
                </p>
              </div>

              {/* Image */}
              <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Hannah-Derue.webp"
                    alt="Hannah Derue, Founder & CEO"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="snap-section snap-section-full bg-gradient-to-br from-primary/5 via-background to-secondary/10 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {ABOUT_CONTENT.mission.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {ABOUT_CONTENT.mission.content}
              </p>
              <p className="text-lg font-medium text-foreground mb-8">
                {ABOUT_CONTENT.mission.belief}
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {ABOUT_CONTENT.mission.benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed pt-2">
                      {benefit}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="snap-section snap-section-full pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/20 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              {ABOUT_CONTENT.teamIntro.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              {ABOUT_CONTENT.teamIntro.subtitle}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              {ABOUT_CONTENT.teamIntro.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {ABOUT_CONTENT.team.map((member, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamMember
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="snap-section snap-section-full pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-background via-secondary/5 to-background flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {ABOUT_CONTENT.collaboration.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                {ABOUT_CONTENT.collaboration.subtitle}
              </p>
            </div>

            <Card className="border-2 hover:border-primary/30 transition-all duration-500 shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary/30 mb-3">
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {ABOUT_CONTENT.collaboration.partner.name}
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-medium italic">
                    {ABOUT_CONTENT.collaboration.partner.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {ABOUT_CONTENT.collaboration.partner.description}
                </p>

                {/* Video Placeholder */}
                {ABOUT_CONTENT.collaboration.partner.videoPlaceholder && (
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group hover:from-muted/80 hover:to-muted/30 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background/80 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Video className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground font-medium">
                        NGA Collaboration Video
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/70">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border-l-4 border-primary/50">
                  <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                    {ABOUT_CONTENT.collaboration.partner.disclaimer}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
