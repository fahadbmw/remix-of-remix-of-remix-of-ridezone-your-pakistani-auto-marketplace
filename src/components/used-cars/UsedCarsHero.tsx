import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/usedCarsData';

export function UsedCarsHero() {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Find Used Cars in Pakistan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of verified listings — find the right ride for you.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/95 backdrop-blur-sm border border-border/80 rounded-2xl p-4 md:p-6 shadow-[0_8px_40px_-12px_hsla(0,0%,0%,0.8),0_0_0_1px_hsla(0,0%,100%,0.05)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Car Make or Model"
                className="input-field w-full pl-12"
              />
            </div>

            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="input-field w-full text-left flex items-center justify-between"
              >
                <span className={selectedCity ? 'text-foreground' : 'text-muted-foreground'}>
                  {selectedCity || 'Select City'}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
              {showCityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                  {cities.slice(0, 10).map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCityDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Min Price */}
            <div className="relative">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price (PKR)"
                className="input-field w-full"
              />
            </div>

            {/* Max Price */}
            <div className="relative">
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price (PKR)"
                className="input-field w-full"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <SlidersHorizontal className="h-4 w-4" />
              Advanced Filters
              <ChevronRight className="h-4 w-4" />
            </button>

            <Button size="lg">
              <Search className="h-4 w-4 mr-2" />
              Search Cars
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
