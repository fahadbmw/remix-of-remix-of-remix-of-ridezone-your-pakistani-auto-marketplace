import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { managedCarsData } from '@/data/usedCarsData';

function formatPrice(price: number) {
  if (price >= 10000000) {
    return `PKR ${(price / 10000000).toFixed(1)} Crore`;
  }
  return `PKR ${(price / 100000).toFixed(1)} Lakh`;
}

function ManagedCarCard({ car, index }: { car: typeof managedCarsData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex-shrink-0 w-[280px] md:w-[300px] bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1.5 rounded-full border border-primary/30">
          <Shield className="h-3.5 w-3.5 text-primary" />
          Managed
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {car.title}
        </h3>
        <p className="text-primary font-bold text-lg mb-2">{formatPrice(car.price)}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{car.year}</span>
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {car.city}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ManagedByRideZone() {
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
          <h2 className="section-title mb-0">Managed by RideZone</h2>
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
              View all
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {managedCarsData.map((car, index) => (
            <div key={car.id} className="snap-start">
              <ManagedCarCard car={car} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
