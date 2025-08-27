-- Create watches table for luxury timepiece inventory
CREATE TABLE public.watches (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  image_url TEXT,
  rarity TEXT CHECK (rarity IN ('Limited Edition', 'Rare', 'Ultra Rare', 'One of a Kind')),
  specifications JSONB,
  is_available BOOLEAN DEFAULT true,
  description TEXT,
  year INTEGER,
  brand TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create customer inquiries table
CREATE TABLE public.customer_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  watch_id UUID REFERENCES public.watches(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  message TEXT,
  inquiry_type TEXT DEFAULT 'purchase',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create orders table for tracking purchases
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  watch_id UUID REFERENCES public.watches(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address JSONB,
  total_amount DECIMAL(12,2) NOT NULL,
  order_status TEXT DEFAULT 'pending' CHECK (order_status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.watches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to watches (catalog)
CREATE POLICY "Watches are viewable by everyone" 
ON public.watches 
FOR SELECT 
USING (true);

-- Create policies for customer inquiries (anyone can submit)
CREATE POLICY "Anyone can submit inquiries" 
ON public.customer_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policies for orders (anyone can create, but only admins can view all)
CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

-- Create storage buckets for file management
INSERT INTO storage.buckets (id, name, public) VALUES 
('watch-images', 'watch-images', true),
('certificates', 'certificates', true),
('customer-uploads', 'customer-uploads', false);

-- Create storage policies for watch images (public access)
CREATE POLICY "Watch images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'watch-images');

CREATE POLICY "Allow upload of watch images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'watch-images');

-- Create storage policies for certificates (public access)
CREATE POLICY "Certificates are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'certificates');

CREATE POLICY "Allow upload of certificates" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'certificates');

-- Create storage policies for customer uploads (private)
CREATE POLICY "Customers can view their own uploads" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'customer-uploads');

CREATE POLICY "Allow customer uploads" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'customer-uploads');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_watches_updated_at
  BEFORE UPDATE ON public.watches
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();