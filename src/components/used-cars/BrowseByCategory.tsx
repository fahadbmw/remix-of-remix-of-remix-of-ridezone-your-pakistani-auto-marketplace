import { motion } from 'framer-motion';
import { Settings, Users, Car, Truck, Plane, Flag, Leaf, Zap } from 'lucide-react';
import { categories } from '@/data/usedCarsData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Settings,
  Users,
  Car,
  Truck,
  Plane,
  Flag,
  Leaf,
  Zap,
};

export function BrowseByCategory() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Used Cars by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Car;
            return (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground text-sm">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count.toLocaleString()} cars</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
