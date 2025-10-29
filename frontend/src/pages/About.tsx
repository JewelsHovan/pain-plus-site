import { PageHero } from '@/components/common/PageHero';
import { TeamMember } from '@/components/about/TeamMember';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { ABOUT_CONTENT } from '@/constants';

export function About() {
  return (
    <div>
      <PageHero
        title={ABOUT_CONTENT.hero.title}
        subtitle={ABOUT_CONTENT.hero.subtitle}
      />

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/30 mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {ABOUT_CONTENT.mission.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {ABOUT_CONTENT.mission.content}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {ABOUT_CONTENT.vision.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {ABOUT_CONTENT.vision.content}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/30 mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {ABOUT_CONTENT.values.title}
                </h3>
                <ul className="space-y-2">
                  {ABOUT_CONTENT.values.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to transforming mental wellness through art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
    </div>
  );
}
