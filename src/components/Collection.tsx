import { WatchCard } from './WatchCard';
import watch1 from '@/assets/watch-1.jpg';
import watch2 from '@/assets/watch-2.jpg';
import watch3 from '@/assets/watch-3.jpg';

export const Collection = () => {
  const watches = [
    {
      id: 'zn-001',
      name: 'ZEITNOIR Obsidian',
      model: 'Limited Edition 2024',
      price: 2500000,
      image: watch1,
      rarity: 'One-of-One' as const,
      specifications: [
        'In-house Caliber ZN-001 • 48-hour power reserve',
        'Sapphire crystal case • Hand-engraved obsidian dial'
      ],
      isAvailable: true
    },
    {
      id: 'zn-002', 
      name: 'ZEITNOIR Stellar',
      model: 'Diamond Collection',
      price: 850000,
      image: watch2,
      rarity: 'Exclusive' as const,
      specifications: [
        'Swiss Tourbillon movement • 42mm platinum case',
        '127 flawless diamonds • Alligator leather strap'
      ],
      isAvailable: true
    },
    {
      id: 'zn-003',
      name: 'ZEITNOIR Heritage',
      model: 'Master Artisan Series',
      price: 450000,
      image: watch3,
      rarity: 'Limited' as const,
      specifications: [
        'Rose gold case • Hand-guilloché dial',
        'Moon phase complication • Limited to 50 pieces'
      ],
      isAvailable: false
    }
  ];

  return (
    <section id="collection" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            The Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cormorant">
            Each ZEITNOIR timepiece represents decades of Swiss mastery, 
            where traditional craftsmanship meets revolutionary innovation.
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-luxury mx-auto"></div>
        </div>

        {/* Watches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <WatchCard key={watch.id} {...watch} />
          ))}
        </div>

        {/* Collection CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 font-inter">
            Discover our complete collection of ultra-rare timepieces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-luxury px-8 py-3 rounded-lg font-semibold">
              View All Timepieces
            </button>
            <button className="btn-ghost-luxury px-8 py-3 rounded-lg">
              Schedule Private Viewing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};