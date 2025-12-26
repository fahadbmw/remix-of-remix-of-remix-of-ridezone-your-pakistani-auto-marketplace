import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { budgetRanges } from '@/data/usedCarsData';

export function BrowseByBudget() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Used Cars by Budget</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {budgetRanges.map((range, index) => (
            <motion.button
              key={range.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary hover:bg-muted transition-all duration-300 group"
            >
              <Wallet className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="font-medium text-foreground text-sm text-center">{range.label}</p>
              <p className="text-xs text-muted-foreground">{range.count.toLocaleString()} cars</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
