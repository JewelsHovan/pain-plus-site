import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from '@/components/common/DarkModeToggle';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { Logo } from '@/components/common/Logo';
import { NAV_LINKS, ROUTES } from '@/constants';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-all duration-300 ${
        isScrolled ? 'border-border shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo with Text */}
          <Link to={ROUTES.HOME} className="flex items-center group transition-transform hover:scale-105">
            <Logo />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.path;
              const navKeys = ['home', 'about', 'howItWorks', 'newsMedia'];
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary relative pb-1 ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {t(`common.nav.${navKeys[index]}`)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button, Language & Dark Mode */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <DarkModeToggle />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-5 w-[180px]"
            >
              <Link to={ROUTES.CONTACT} className="inline-flex items-center justify-center">
                {t('howItWorks.cta.button')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link, index) => {
                const isActive = location.pathname === link.path;
                const navKeys = ['home', 'about', 'howItWorks', 'newsMedia'];
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium py-2 ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {t(`common.nav.${navKeys[index]}`)}
                  </Link>
                );
              })}
              <div className="flex items-center gap-2 pt-2">
                <LanguageToggle />
                <DarkModeToggle />
              </div>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full mt-2 rounded-full"
              >
                <Link to={ROUTES.CONTACT} onClick={() => setIsMobileMenuOpen(false)}>
                  {t('howItWorks.cta.button')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
