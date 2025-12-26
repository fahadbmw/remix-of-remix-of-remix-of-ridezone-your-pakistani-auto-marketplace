import { motion } from 'framer-motion';
import { Car, Truck } from 'lucide-react';
import { bodyTypes } from '@/data/usedCarsData';

export function BrowseByBodyType() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Used Cars by Body Type</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {bodyTypes.map((type, index) => (
            <motion.button
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary hover:bg-muted transition-all duration-300 group"
            >
              <Car className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="font-medium text-foreground text-sm">{type.name}</p>
              <p className="text-xs text-muted-foreground">{type.count.toLocaleString()}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
