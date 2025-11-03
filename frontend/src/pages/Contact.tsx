import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t('contact.form.title')}
              </h2>
            </div>

            <ContactForm />

            <div className="pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
                {t('contact.info.title')}
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
                    {t('contact.partnerships.title')}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {t('contact.partnerships.description')}
                  </p>
                  <a
                    href={`mailto:${t('contact.partnerships.email')}`}
                    className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                  >
                    {t('contact.partnerships.email')}
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
