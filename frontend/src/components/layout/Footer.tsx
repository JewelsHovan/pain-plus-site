import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import { ROUTES } from '@/constants';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/common/Logo';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social */}
          <div className="flex flex-col gap-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors">
                <Logo size="md" variant="light" />
              </div>
              <span className="text-xl font-bold">
                P<span className="text-[#FF7500]">ai</span>n+
              </span>
            </Link>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/painplus/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${t('common.footer.email')}`}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">{t('common.nav.contact')}</h3>
            <a
              href={`mailto:${t('common.footer.email')}`}
              className="text-sm hover:text-secondary transition-colors"
            >
              {t('common.footer.email')}
            </a>
            <p className="text-sm">{t('common.footer.location')}</p>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Legal</h3>
            <Link
              to="/privacy"
              className="text-sm hover:text-secondary transition-colors inline-block"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-center text-primary-foreground/70">
            © {new Date().getFullYear()} {t('common.appName')}. {t('common.footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
