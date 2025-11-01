import { Link } from 'react-router-dom';
import { Mail, Linkedin, Shield } from 'lucide-react';
import { SITE_INFO, ROUTES } from '@/constants';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social */}
          <div className="flex flex-col gap-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">p+</span>
              </div>
              <span className="text-xl font-bold">{SITE_INFO.name}</span>
            </Link>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="text-sm hover:text-secondary transition-colors"
            >
              {SITE_INFO.email}
            </a>
            <a
              href={`tel:${SITE_INFO.phone.replace(/\D/g, '')}`}
              className="text-sm hover:text-secondary transition-colors"
            >
              {SITE_INFO.phone}
            </a>
            <p className="text-sm">{SITE_INFO.location}</p>
          </div>

          {/* Legal & Compliance */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Legal</h3>
            <Link
              to="/privacy"
              className="text-sm hover:text-secondary transition-colors inline-block"
            >
              Privacy Policy
            </Link>
            <div className="mt-4 flex items-center gap-2">
              <Shield size={20} className="text-secondary" />
              <span className="text-sm font-medium">HIPAA Verified</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-center text-primary-foreground/70">
            © {new Date().getFullYear()} {SITE_INFO.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
