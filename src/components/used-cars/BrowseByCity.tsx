import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { cities } from '@/data/usedCarsData';

export function BrowseByCity() {
  const [showAll, setShowAll] = useState(false);
  const visibleCities = showAll ? cities : cities.slice(0, 10);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Browse Used Cars by City</h2>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <AnimatePresence>
            {visibleCities.map((city, index) => (
              <motion.button
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.02 }}
                className="flex items-center gap-2 px-4 py-3 bg-card rounded-lg border border-border hover:border-primary hover:bg-muted transition-all duration-200 text-left group"
              >
                <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {city}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {cities.length > 10 && (
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {showAll ? 'Show Less' : 'View All Cities'}
            <motion.div animate={{ rotate: showAll ? 180 : 0 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </section>
  );
}
