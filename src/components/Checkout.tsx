import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Bitcoin, Wallet, Lock } from 'lucide-react';
import certificate from '@/assets/zeitnoir-certificate.png';

interface CheckoutProps {
  timepiece: {
    name: string;
    price: number;
    image: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const Checkout = ({ timepiece, isOpen, onClose }: CheckoutProps) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cryptoAddress, setCryptoAddress] = useState('');

  if (!isOpen) return null;

  const cryptoOptions = [
    { value: 'btc', label: 'Bitcoin (BTC)', icon: Bitcoin },
    { value: 'eth', label: 'Ethereum (ETH)', icon: Wallet },
    { value: 'usdt', label: 'USDT (TRC20)', icon: Shield },
  ];

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-playfair font-bold">Secure Checkout</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-2">
            Crypto-secured transaction with escrow protection
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Order Summary */}
          <Card className="card-luxury">
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <img 
                  src={timepiece.image} 
                  alt={timepiece.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{timepiece.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Includes Vault Experience Package
                  </p>
                  <p className="text-2xl font-playfair font-bold text-primary mt-2">
                    {formatPrice(timepiece.price)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificate Preview */}
          <Card className="card-luxury">
            <CardHeader>
              <CardTitle className="text-lg">Included in Your Package</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <img 
                  src={certificate} 
                  alt="Certificate of Legacy and Authenticity"
                  className="mx-auto max-w-full h-auto object-contain rounded-lg shadow-elegant"
                />
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Certificate of Legacy and Authenticity</p>
                <p>✓ Handcrafted Swiss vault presentation box</p>
                <p>✓ Numbered metal membership card</p>
                <p>✓ Lifetime concierge services</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <Card className="card-luxury">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Lock className="w-5 h-5 mr-2 text-primary" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cryptocurrency" />
                </SelectTrigger>
                <SelectContent>
                  {cryptoOptions.map((crypto) => {
                    const IconComponent = crypto.icon;
                    return (
                      <SelectItem key={crypto.value} value={crypto.value}>
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4" />
                          <span>{crypto.label}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Badge variant="secondary" className="text-center p-2">
                  <Shield className="w-4 h-4 mr-1" />
                  Escrow Protected
                </Badge>
                <Badge variant="secondary" className="text-center p-2">
                  <Lock className="w-4 h-4 mr-1" />
                  Multi-Sig Wallet
                </Badge>
                <Badge variant="secondary" className="text-center p-2">
                  <Wallet className="w-4 h-4 mr-1" />
                  Zero Fees
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card className="card-luxury">
            <CardHeader>
              <CardTitle className="text-lg">Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Email Address" />
              </div>
              <Input placeholder="Phone Number" />
              <Input placeholder="Delivery Address" />
              <Input placeholder="City, Country" />
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Delivery Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private-jet">Private Jet Delivery (Complimentary)</SelectItem>
                  <SelectItem value="secure-courier">Secure Courier Service</SelectItem>
                  <SelectItem value="personal-pickup">Personal Collection - Geneva</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Crypto Payment Details */}
          {paymentMethod && (
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-lg">Payment Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background p-4 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Send exactly the amount below to this address:
                  </p>
                  <div className="font-mono text-sm bg-muted p-3 rounded border break-all">
                    {paymentMethod === 'btc' && 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'}
                    {paymentMethod === 'eth' && '0x742d35Cc6834C532532322b3C0F5AA5AA53B85f2'}
                    {paymentMethod === 'usdt' && 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'}
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold mb-2">Amount to Send:</p>
                  <p className="text-lg font-mono">
                    {paymentMethod === 'btc' && '24.15 BTC'}
                    {paymentMethod === 'eth' && '385.7 ETH'}
                    {paymentMethod === 'usdt' && `${timepiece.price.toLocaleString()} USDT`}
                  </p>
                </div>

                <Input 
                  placeholder="Your wallet address (for refunds)"
                  value={cryptoAddress}
                  onChange={(e) => setCryptoAddress(e.target.value)}
                />
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="btn-luxury flex-1 py-3"
              disabled={!paymentMethod}
            >
              Confirm Purchase
            </Button>
            <Button 
              variant="ghost" 
              className="btn-ghost-luxury flex-1 py-3"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>

          {/* Security Notice */}
          <div className="text-center text-xs text-muted-foreground space-y-1">
            <p>🔒 This transaction is secured by multi-signature escrow</p>
            <p>Your timepiece will only ship after payment confirmation</p>
            <p>ZEITNOIR provides lifetime authenticity guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};