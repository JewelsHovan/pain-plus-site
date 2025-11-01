import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake } from 'lucide-react';
import { CONTACT_CONTENT } from '@/constants';

export function Contact() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {CONTACT_CONTENT.form.title}
              </h2>
            </div>

            <ContactForm />

            <div className="pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
                {CONTACT_CONTENT.info.title}
              </h2>
              <ContactInfo />
            </div>

            {/* Media & Partnerships Section */}
            <div className="pt-8">
              <Card className="border-2 bg-muted/20">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Handshake className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {CONTACT_CONTENT.partnerships.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {CONTACT_CONTENT.partnerships.description}
                  </p>
                  <a
                    href={`mailto:${CONTACT_CONTENT.partnerships.email}`}
                    className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                  >
                    {CONTACT_CONTENT.partnerships.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
