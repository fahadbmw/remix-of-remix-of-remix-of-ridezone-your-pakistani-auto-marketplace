import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar } from 'lucide-react';
import { years } from '@/data/usedCarsData';

export function BrowseByYear() {
  const [showAll, setShowAll] = useState(false);
  const visibleYears = showAll ? years : years.slice(0, 8);

  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Used Cars by Year</h2>

        <motion.div layout className="flex flex-wrap gap-3">
          <AnimatePresence>
            {visibleYears.map((year, index) => (
              <motion.button
                key={year}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-lg border border-border hover:border-primary hover:bg-muted transition-all duration-200 group"
              >
                <Calendar className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {year}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {years.length > 8 && (
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {showAll ? 'Show Less' : 'View All Years'}
            <motion.div animate={{ rotate: showAll ? 180 : 0 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </section>
  );
}
