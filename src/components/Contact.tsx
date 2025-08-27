import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    budgetRange: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('customer_inquiries')
        .insert([
          {
            customer_name: `${formData.firstName} ${formData.lastName}`,
            customer_email: formData.email,
            customer_phone: formData.phone,
            inquiry_type: formData.inquiryType,
            message: `Budget Range: ${formData.budgetRange}\n\n${formData.message}`
          }
        ]);

      if (error) throw error;

      toast({
        title: "Consultation Request Sent",
        description: "Our concierge team will contact you within 2 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        budgetRange: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Concierge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cormorant">
            Our dedicated concierge team provides white-glove service for every inquiry, 
            consultation, and exclusive request.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-semibold mb-6">
                Private Consultation
              </h3>
              <p className="text-muted-foreground font-inter mb-8">
                Schedule an exclusive consultation with our Master Horologists and 
                discover the ZEITNOIR timepiece that defines your legacy.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-card border-border"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                  required
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-card border-border"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                  required
                />
              </div>
              
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-card border-border"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                required
              />
              
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-card border-border"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
              />

              <Select value={formData.inquiryType} onValueChange={(value) => setFormData(prev => ({...prev, inquiryType: value}))}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Inquiry Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Private Consultation</SelectItem>
                  <SelectItem value="purchase">Purchase Inquiry</SelectItem>
                  <SelectItem value="service">After-Sales Service</SelectItem>
                  <SelectItem value="bespoke">Bespoke Commission</SelectItem>
                  <SelectItem value="vault">Vault Membership</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formData.budgetRange} onValueChange={(value) => setFormData(prev => ({...prev, budgetRange: value}))}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="150k-500k">$150K - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                  <SelectItem value="5m+">$5M+</SelectItem>
                  <SelectItem value="bespoke">Bespoke Quote</SelectItem>
                </SelectContent>
              </Select>

              <Textarea 
                placeholder="Tell us about your vision..." 
                className="bg-card border-border min-h-32"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
              />

              <Button 
                type="submit" 
                className="btn-luxury w-full py-3"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Request Consultation'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-semibold mb-6">
                Global Presence
              </h3>
              <p className="text-muted-foreground font-inter mb-8">
                ZEITNOIR maintains exclusive boutiques and service centers in the 
                world's most prestigious locations.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">Direct Line</h4>
                </div>
                <p className="text-muted-foreground mb-2">+41 22 123 4567 (Geneva)</p>
                <p className="text-muted-foreground mb-2">+1 212 555 0123 (New York)</p>
                <p className="text-xs text-muted-foreground">Available 24/7 for Vault members</p>
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">Email Concierge</h4>
                </div>
                <p className="text-muted-foreground mb-2">concierge@zeitnoir.swiss</p>
                <p className="text-muted-foreground mb-2">vip@zeitnoir.swiss (Vault Members)</p>
                <p className="text-xs text-muted-foreground">Response within 2 hours</p>
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">WhatsApp VIP</h4>
                </div>
                <p className="text-muted-foreground mb-2">+41 79 123 4567</p>
                <p className="text-xs text-muted-foreground">Exclusive for qualified inquiries</p>
                <Button variant="ghost" size="sm" className="btn-ghost-luxury mt-3">
                  Connect on WhatsApp
                </Button>
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">Flagship Ateliers</h4>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Geneva Manufacture</p>
                    <p>Rue du Rhône 123, 1204 Geneva, Switzerland</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">New York Salon</p>
                    <p>Fifth Avenue 456, New York, NY 10022</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Dubai Elite</p>
                    <p>Burj Khalifa District, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};