import { motion } from 'framer-motion';
import { carBrands } from '@/data/usedCarsData';

export function BrowseByMake() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Used Cars by Popular Makes & Models</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border"
            >
              <h3 className="font-bold text-lg text-foreground mb-4">{brand.name}</h3>
              <div className="flex flex-wrap gap-2">
                {brand.models.map((model) => (
                  <button
                    key={model}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {model}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
