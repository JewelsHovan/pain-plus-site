import { PageHero } from '@/components/common/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { CONTACT_CONTENT } from '@/constants';

export function Contact() {
  return (
    <div>
      <PageHero
        title={CONTACT_CONTENT.hero.title}
        subtitle={CONTACT_CONTENT.hero.subtitle}
      />

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
          </div>
        </div>
      </section>
    </div>
  );
}
