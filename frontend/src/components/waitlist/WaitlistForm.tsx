import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
import { WAITLIST_CONTENT } from '@/constants/content';
import { apiService } from '@/services/api.service';

interface WaitlistFormProps {
  onSuccess?: (position: number) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '', // Honeypot field
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    'idle' | 'success' | 'error' | 'already_registered'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [position, setPosition] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const response = await apiService.post<{
        success: boolean;
        position: number;
        isFull: boolean;
        message: string;
      }>('/waitlist/join', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        website: formData.website, // Include honeypot
      });

      setStatus('success');
      setPosition(response.data.position);
      setFormData({ name: '', email: '', phone: '', website: '' });

      if (onSuccess) {
        onSuccess(response.data.position);
      }
    } catch (error: any) {
      if (error.status === 409) {
        setStatus('already_registered');
        setErrorMsg(WAITLIST_CONTENT.form.alreadyRegistered);
      } else {
        setStatus('error');
        setErrorMsg(
          error.data?.error ||
            'Failed to join waitlist. Please try again.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <Card className="border-2 h-full flex flex-col">
        <CardContent className="p-8 flex-1 flex items-center justify-center">
          <div className="text-center py-8 space-y-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                <Check className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {WAITLIST_CONTENT.form.success}
            </h3>
            {position && (
              <p className="text-lg text-muted-foreground">
                You're <span className="font-bold text-primary">#{position}</span> on
                the list!
              </p>
            )}
            <p className="text-muted-foreground">
              {WAITLIST_CONTENT.form.successMessage}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 h-full flex flex-col">
      <CardContent className="p-8 flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{WAITLIST_CONTENT.form.fields.name}</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{WAITLIST_CONTENT.form.fields.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{WAITLIST_CONTENT.form.fields.phone}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="555-1234"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              disabled={loading}
            />
          </div>

          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {(status === 'error' || status === 'already_registered') && (
            <div className="flex gap-2 items-start text-destructive text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
            size="lg"
            variant="default"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {WAITLIST_CONTENT.form.submitting}
              </>
            ) : (
              WAITLIST_CONTENT.form.submit
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
