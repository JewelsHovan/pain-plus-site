import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const roles = t('contact.form.roles', { returnObjects: true }) as string[];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Demo Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Role: ${formData.role}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:${t('contact.info.email')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Card className="border-2 max-w-2xl mx-auto">
      <CardContent className="p-8">
        {submitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t('contact.form.success')}
            </h3>
            <p className="text-muted-foreground">
              Your email client should have opened. If not, please email us directly at{' '}
              <a href={`mailto:${t('contact.info.email')}`} className="text-primary hover:underline">
                {t('contact.info.email')}
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contact.form.fields.name')}</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('contact.form.fields.email')}</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">{t('contact.form.fields.organization')}</Label>
              <Input
                id="organization"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Your Organization"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">{t('contact.form.fields.role')}</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                required
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.fields.message')}</Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your needs..."
                rows={6}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-foreground font-semibold"
            >
              {t('contact.form.submit')}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
