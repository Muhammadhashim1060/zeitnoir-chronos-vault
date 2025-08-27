import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Heritage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cormorant">
            Born from Swiss precision and forged in the crucible of excellence, 
            ZEITNOIR represents the pinnacle of horological artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-semibold mb-6">
                The Legend Begins
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                In the heart of Geneva's Vallée de Joux, where time itself was born, 
                ZEITNOIR emerged from a vision shared by Master Horologist Heinrich Noir 
                and Swiss industrialist Marcus Zeit in 1847. Their obsession: to create 
                timepieces so exclusive, so perfect, that ownership itself became a statement.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Today, only 50 ZEITNOIR timepieces are crafted annually, each requiring 
                18 months of meticulous handwork by our Master Artisans. Every component, 
                from the smallest screw to the grand complication, is forged in-house.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6">
              <blockquote className="text-lg text-foreground font-cormorant italic">
                "We don't measure time. We capture eternity."
              </blockquote>
              <cite className="text-sm text-primary font-inter mt-2 block">
                — Heinrich Noir, Founder
              </cite>
            </div>
          </div>

          {/* Stats & Values */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="card-luxury p-6 text-center">
                <p className="text-3xl font-playfair font-bold text-primary mb-2">177</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="card-luxury p-6 text-center">
                <p className="text-3xl font-playfair font-bold text-primary mb-2">50</p>
                <p className="text-sm text-muted-foreground">Pieces Per Year</p>
              </div>
              <div className="card-luxury p-6 text-center">
                <p className="text-3xl font-playfair font-bold text-primary mb-2">18</p>
                <p className="text-sm text-muted-foreground">Months to Craft</p>
              </div>
              <div className="card-luxury p-6 text-center">
                <p className="text-3xl font-playfair font-bold text-primary mb-2">7</p>
                <p className="text-sm text-muted-foreground">Master Artisans</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-playfair font-semibold">Our Principles</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Uncompromising Excellence</h5>
                    <p className="text-sm text-muted-foreground">Every component exceeds Swiss chronometry standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Exclusive Legacy</h5>
                    <p className="text-sm text-muted-foreground">Limited production ensures eternal rarity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Artisan Mastery</h5>
                    <p className="text-sm text-muted-foreground">Handcrafted by generational Swiss masters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 card-luxury">
          <h3 className="text-2xl font-playfair font-semibold mb-4">
            Join the Legacy
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ZEITNOIR ownership extends beyond mere possession—it's membership in an 
            exclusive circle where time, heritage, and status converge.
          </p>
          <Button className="btn-luxury px-8 py-3">
            Discover Your Legacy
          </Button>
        </div>
      </div>
    </section>
  );
};