import { motion } from 'framer-motion';
import { FileText, UserCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: 'Free Ad',
    description: 'Post your car in seconds',
  },
  {
    icon: UserCheck,
    title: 'Genuine Buyers',
    description: 'Verified user system',
  },
  {
    icon: Zap,
    title: 'Sell Faster',
    description: 'Better visibility & reach',
  },
];

export function SearchBenefits() {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary rounded-xl p-5 border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
