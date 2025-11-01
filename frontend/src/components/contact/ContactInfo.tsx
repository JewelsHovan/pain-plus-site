import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { CONTACT_CONTENT } from '@/constants';

export function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      content: CONTACT_CONTENT.info.email,
      href: `mailto:${CONTACT_CONTENT.info.email}`,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'PAin+',
      href: CONTACT_CONTENT.info.linkedin,
    },
    {
      icon: MapPin,
      title: 'Location',
      content: CONTACT_CONTENT.info.location,
      href: undefined,
    },
  ].filter((item) => item.content);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {contactItems.map((item, index) => (
        <Card key={index} className="border-2">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
            {item.href ? (
              <a
                href={item.href}
                target={item.title === 'LinkedIn' ? '_blank' : undefined}
                rel={item.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.content}
              </a>
            ) : (
              <p className="text-muted-foreground">{item.content}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
