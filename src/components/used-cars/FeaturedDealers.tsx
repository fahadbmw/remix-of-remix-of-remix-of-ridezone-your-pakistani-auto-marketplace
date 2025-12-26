import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, BadgeCheck, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dealers } from '@/data/usedCarsData';

export function FeaturedDealers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title mb-0">Featured Dealers</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              View all dealers
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {dealers.map((dealer, index) => (
            <motion.div
              key={dealer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-[300px] bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated snap-start"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{dealer.name}</h3>
                    {dealer.verified && (
                      <BadgeCheck className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {dealer.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Car className="h-4 w-4" />
                {dealer.inventory} vehicles in inventory
              </div>

              <Button variant="outline" className="w-full">
                View Inventory
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
