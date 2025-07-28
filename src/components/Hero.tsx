import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Gold Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent leading-tight">
          Own The Hour.™
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-cormorant font-light">
          Ultra-Rare Timepieces for the World's Elite
        </p>

        {/* Price Range */}
        <div className="mb-8">
          <p className="text-primary font-inter font-medium text-lg">
            $150,000 - $10,000,000
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Handcrafted Swiss Excellence • Limited Production
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="btn-luxury px-8 py-4 text-lg font-semibold"
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover The Collection
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="btn-ghost-luxury px-8 py-4 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Private Consultation
          </Button>
        </div>

        {/* Status Statement */}
        <div className="border border-primary/20 rounded-lg p-6 bg-card/20 backdrop-blur-sm">
          <p className="text-foreground font-cormorant text-lg italic">
            "We don't sell watches. We craft legacies."
          </p>
          <p className="text-primary text-sm font-inter mt-2">
            — Master Horologist, ZEITNOIR Atelier
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};