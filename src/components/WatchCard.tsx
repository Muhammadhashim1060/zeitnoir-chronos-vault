import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart } from 'lucide-react';
import { Checkout } from './Checkout';

interface WatchCardProps {
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  rarity: 'Limited' | 'Exclusive' | 'One-of-One';
  specifications: string[];
  isAvailable: boolean;
}

export const WatchCard = ({ 
  name, 
  model, 
  price, 
  image, 
  rarity, 
  specifications,
  isAvailable 
}: WatchCardProps) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'One-of-One': return 'bg-gradient-luxury text-black';
      case 'Exclusive': return 'bg-primary/20 text-primary';
      case 'Limited': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="card-luxury rounded-xl p-6 group">
      {/* Image Container */}
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Button size="sm" variant="ghost" className="text-white border-white/30">
            <Eye className="w-4 h-4 mr-2" />
            View 360°
          </Button>
          <Button size="sm" variant="ghost" className="text-white border-white/30">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Rarity Badge */}
        <Badge className={`absolute top-4 right-4 ${getRarityColor(rarity)}`}>
          {rarity}
        </Badge>

        {/* Availability */}
        {!isAvailable && (
          <div className="absolute top-4 left-4">
            <Badge variant="destructive">Sold</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-muted-foreground font-inter text-sm">
            {model}
          </p>
        </div>

        {/* Specifications */}
        <div className="space-y-2">
          {specifications.slice(0, 2).map((spec, index) => (
            <p key={index} className="text-xs text-muted-foreground">
              {spec}
            </p>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-playfair font-bold text-primary">
              {formatPrice(price)}
            </p>
            <p className="text-xs text-muted-foreground">
              Includes Vault Package
            </p>
          </div>
          
          {isAvailable && (
            <Button 
              className="btn-luxury"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Inquire
            </Button>
          )}
        </div>
      </div>

      <Checkout 
        timepiece={{ name, price, image }}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};