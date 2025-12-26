import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { UsedCarsHero } from '@/components/used-cars/UsedCarsHero';
import { SearchBenefits } from '@/components/used-cars/SearchBenefits';
import { FeaturedUsedCars } from '@/components/used-cars/FeaturedUsedCars';
import { ManagedByRideZone } from '@/components/used-cars/ManagedByRideZone';
import { CarInspection } from '@/components/used-cars/CarInspection';
import { BrowseByCity } from '@/components/used-cars/BrowseByCity';
import { BrowseByMake } from '@/components/used-cars/BrowseByMake';
import { BrowseByCategory } from '@/components/used-cars/BrowseByCategory';
import { BrowseByBudget } from '@/components/used-cars/BrowseByBudget';
import { BrowseByBodyType } from '@/components/used-cars/BrowseByBodyType';
import { BrowseByYear } from '@/components/used-cars/BrowseByYear';
import { FeaturedDealers } from '@/components/used-cars/FeaturedDealers';
import { CarAdvice } from '@/components/used-cars/CarAdvice';

export default function UsedCars() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <UsedCarsHero />
        <SearchBenefits />
        <FeaturedUsedCars />
        <ManagedByRideZone />
        <CarInspection />
        <BrowseByCity />
        <BrowseByMake />
        <BrowseByCategory />
        <BrowseByBudget />
        <BrowseByBodyType />
        <BrowseByYear />
        <FeaturedDealers />
        <CarAdvice />
      </main>
      <Footer />
    </div>
  );
}
