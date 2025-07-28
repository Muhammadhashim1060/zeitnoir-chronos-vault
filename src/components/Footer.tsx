import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-primary">ZEITNOIR</h3>
            <p className="text-muted-foreground text-sm font-inter">
              Swiss Excellence Since 1847
            </p>
            <p className="text-muted-foreground text-sm font-inter leading-relaxed">
              Crafting ultra-rare timepieces for the world's elite. 
              Each ZEITNOIR represents a legacy of uncompromising excellence.
            </p>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Collections</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Obsidian Series
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Stellar Collection
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Heritage Line
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Bespoke Commissions
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                The Vault Experience
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Private Consultations
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Concierge Support
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Authentication Services
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+41 22 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">concierge@zeitnoir.swiss</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Geneva, Switzerland</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p>&copy; 2024 ZEITNOIR Swiss Timepieces. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Authenticity</a>
              </div>
            </div>
            
            {/* Signature */}
            <div className="text-center md:text-right">
              <p className="text-lg font-playfair font-semibold text-primary">
                ZEITNOIR • Own The Hour.™
              </p>
              <p className="text-xs text-muted-foreground font-inter">
                Swiss Made • Exclusively Rare
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};