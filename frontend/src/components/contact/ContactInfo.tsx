import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_CONTENT } from '@/constants';

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <Card className="border-2">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Email</h3>
          <a
            href={`mailto:${CONTACT_CONTENT.info.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {CONTACT_CONTENT.info.email}
          </a>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Phone</h3>
          <a
            href={`tel:${CONTACT_CONTENT.info.phone.replace(/\D/g, '')}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {CONTACT_CONTENT.info.phone}
          </a>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Location</h3>
          <p className="text-muted-foreground">{CONTACT_CONTENT.info.location}</p>
        </CardContent>
      </Card>
    </div>
  );
}
