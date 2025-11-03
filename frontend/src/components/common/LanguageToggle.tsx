import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language.toUpperCase();
  const otherLang = i18n.language === 'en' ? 'FR' : 'EN';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium px-2"
      aria-label="Toggle language"
    >
      <span className="text-muted-foreground">{currentLang}</span>
      <span className="mx-1">|</span>
      <span className="text-foreground hover:text-primary transition-colors">{otherLang}</span>
    </Button>
  );
}
