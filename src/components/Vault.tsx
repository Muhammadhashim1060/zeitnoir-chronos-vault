import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Diamond, Shield, Plane } from 'lucide-react';
import vaultBox from '@/assets/vault-box.jpg';

export const Vault = () => {
  const membershipTiers = [
    {
      name: 'Black Badge',
      icon: Shield,
      price: 'Complimentary with first purchase',
      benefits: [
        'Handcrafted obsidian vault box',
        'Titanium membership card',
        'Priority access to new releases',
        'Concierge support 24/7'
      ],
      color: 'text-muted-foreground'
    },
    {
      name: 'Gold Elite',
      icon: Crown,
      price: '$500K+ lifetime purchases',
      benefits: [
        'Swiss-made gold vault collection',
        '18K gold membership card',
        'Private atelier visits in Geneva',
        'Custom engraving services',
        'Exclusive auction access'
      ],
      color: 'text-primary'
    },
    {
      name: 'Diamond Sovereign',
      icon: Diamond,
      price: '$2M+ lifetime purchases',
      benefits: [
        'Diamond-studded platinum vault',
        'Solid diamond membership card',
        'Private jet delivery worldwide',
        'Bespoke timepiece commissioning',
        'Master horologist mentorship',
        'Annual Swiss Alps retreat'
      ],
      color: 'text-primary-glow'
    }
  ];

  return (
    <section id="vault" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            The Vault
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cormorant">
            Beyond the timepiece lies an exclusive world of privileges, 
            where ownership transcends into membership of an elite society.
          </p>
        </div>

        {/* Vault Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-semibold">
              The ZEITNOIR Experience
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Every ZEITNOIR purchase includes our signature vault package—a handcrafted 
              presentation case that rivals the timepiece itself. Each vault is numbered, 
              authenticated, and sealed with our proprietary Swiss lock mechanism.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Handcrafted Swiss presentation vault</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Numbered certificate of authenticity</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Metal membership card with unique ID</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Lifetime access to exclusive services</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={vaultBox} 
              alt="ZEITNOIR Vault Box"
              className="w-full h-96 object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-cormorant text-lg">
                "The vault is as precious as the timepiece within."
              </p>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="space-y-8">
          <h3 className="text-4xl font-playfair font-semibold text-center mb-12">
            Membership Tiers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div 
                  key={tier.name}
                  className={`card-luxury p-8 text-center ${
                    index === 1 ? 'ring-2 ring-primary/30 scale-105' : ''
                  }`}
                >
                  <div className="mb-6">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${tier.color}`} />
                    <h4 className="text-2xl font-playfair font-semibold mb-2">
                      {tier.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-inter">
                      {tier.price}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-sm text-foreground">
                        {benefit}
                      </p>
                    ))}
                  </div>

                  {index === 2 && (
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Plane className="w-4 h-4 text-primary" />
                      <Badge className="bg-gradient-luxury text-black">
                        Private Jet Included
                      </Badge>
                    </div>
                  )}

                  <Button 
                    className={index === 1 ? 'btn-luxury w-full' : 'btn-ghost-luxury w-full'}
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};