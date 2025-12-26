import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { inspectionPoints } from '@/data/usedCarsData';

export function CarInspection() {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % inspectionPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Never buy a used car without RideZone Inspection
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              200+ inspection checkpoints
            </p>
            <p className="text-muted-foreground mb-8">
              Our certified inspectors thoroughly examine every aspect of the vehicle to ensure you make an informed decision. From engine health to interior condition, we cover it all.
            </p>
            <Button size="lg">
              Learn More
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>

          {/* Right: Animated Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {inspectionPoints.map((section, idx) => (
              <motion.div
                key={section.category}
                className={`bg-card rounded-xl p-5 border transition-all duration-300 ${
                  idx === activeCategory ? 'border-primary shadow-elevated' : 'border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-semibold text-lg ${idx === activeCategory ? 'text-primary' : 'text-foreground'}`}>
                    {section.category}
                  </h3>
                  {idx === activeCategory && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 rounded-full bg-primary"
                    />
                  )}
                </div>
                <AnimatePresence>
                  {idx === activeCategory && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {section.points.map((point, pointIdx) => (
                          <motion.div
                            key={point}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIdx * 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {point}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
