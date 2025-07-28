import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import zeitnoirLogo from '@/assets/zeitnoir-logo.png';

interface NavigationProps {
  onAdminAccess: () => void;
}

export const Navigation = ({ onAdminAccess }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [language, setLanguage] = useState('EN');

  const languages = ['EN', 'FR', 'AR', 'ZH', 'DE'];

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 9) { // 10th click (0-indexed)
      onAdminAccess();
      setClickCount(0);
    }
  };

  useEffect(() => {
    if (clickCount > 0) {
      const timer = setTimeout(() => setClickCount(0), 3000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const navItems = [
    { label: 'The Collection', href: '#collection' },
    { label: 'The Vault', href: '#vault' },
    { label: 'Heritage', href: '#about' },
    { label: 'Concierge', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={handleLogoClick}
          >
            <img src={zeitnoirLogo} alt="ZEITNOIR" className="h-12 w-auto" />
            <div className="ml-3">
              <h1 className="text-2xl font-playfair font-bold text-primary">ZEITNOIR</h1>
              <p className="text-xs text-muted-foreground font-inter">SWISS EXCELLENCE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="btn-ghost-luxury text-xs"
                onClick={() => {
                  const currentIndex = languages.indexOf(language);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setLanguage(languages[nextIndex]);
                }}
              >
                <Globe className="w-4 h-4 mr-1" />
                {language}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};