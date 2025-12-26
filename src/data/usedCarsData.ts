// Used Cars page specific data

export const featuredUsedCars = [
  {
    id: 'f1',
    title: 'Toyota Corolla GLi 1.3 VVTi',
    price: 4250000,
    year: 2021,
    city: 'Lahore',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop',
    ],
    isFeatured: true,
  },
  {
    id: 'f2',
    title: 'Honda Civic Oriel 1.8',
    price: 5800000,
    year: 2022,
    city: 'Karachi',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1606664466477-77bdfe8ef46c?w=400&h=300&fit=crop',
    ],
    isFeatured: true,
  },
  {
    id: 'f3',
    title: 'Suzuki Alto VXR AGS',
    price: 2100000,
    year: 2023,
    city: 'Islamabad',
    images: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
    ],
    isFeatured: true,
  },
  {
    id: 'f4',
    title: 'KIA Sportage Alpha',
    price: 7500000,
    year: 2023,
    city: 'Rawalpindi',
    images: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400&h=300&fit=crop',
    ],
    isFeatured: true,
  },
  {
    id: 'f5',
    title: 'Hyundai Tucson GLS',
    price: 8900000,
    year: 2023,
    city: 'Lahore',
    images: [
      'https://images.unsplash.com/photo-1633695026498-8edecf5f1e70?w=400&h=300&fit=crop',
    ],
    isFeatured: true,
  },
  {
    id: 'f6',
    title: 'Toyota Yaris ATIV X',
    price: 4800000,
    year: 2022,
    city: 'Faisalabad',
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop',
    ],
    isFeatured: true,
  },
];

export const managedCarsData = [
  {
    id: 'm1',
    title: 'Mercedes-Benz C180',
    price: 12500000,
    year: 2022,
    city: 'Karachi',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    ],
    isManaged: true,
  },
  {
    id: 'm2',
    title: 'BMW 320i M Sport',
    price: 14500000,
    year: 2023,
    city: 'Lahore',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    ],
    isManaged: true,
  },
  {
    id: 'm3',
    title: 'Audi A4 2.0 TFSI',
    price: 13800000,
    year: 2022,
    city: 'Islamabad',
    images: [
      'https://images.unsplash.com/photo-1606664466477-77bdfe8ef46c?w=400&h=300&fit=crop',
    ],
    isManaged: true,
  },
  {
    id: 'm4',
    title: 'Porsche Cayenne S',
    price: 28000000,
    year: 2021,
    city: 'Karachi',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
    ],
    isManaged: true,
  },
];

export const cities = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala',
  'Hyderabad', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana',
  'Sheikhupura', 'Jhang', 'Rahim Yar Khan', 'Mardan', 'Gujrat',
  'Kasur', 'Dera Ghazi Khan', 'Sahiwal', 'Okara', 'Wah Cantonment',
];

export const carBrands = [
  {
    name: 'Suzuki',
    models: ['Alto', 'Cultus', 'WagonR', 'Swift', 'Bolan', 'Mehran', 'Vitara'],
  },
  {
    name: 'Toyota',
    models: ['Corolla', 'Yaris', 'Fortuner', 'Hilux', 'Prado', 'Land Cruiser', 'Camry'],
  },
  {
    name: 'Honda',
    models: ['Civic', 'City', 'BR-V', 'HR-V', 'Accord', 'Vezel'],
  },
  {
    name: 'Daihatsu',
    models: ['Cuore', 'Mira', 'Move', 'Hijet'],
  },
  {
    name: 'Nissan',
    models: ['Dayz', 'Juke', 'Note', 'X-Trail'],
  },
  {
    name: 'Hyundai',
    models: ['Tucson', 'Elantra', 'Sonata', 'Santa Fe', 'Ioniq'],
  },
];

export const categories = [
  { name: 'Automatic Cars', icon: 'Settings', count: 12500 },
  { name: 'Family Cars', icon: 'Users', count: 8200 },
  { name: 'Small Cars', icon: 'Car', count: 15600 },
  { name: 'Big Cars', icon: 'Truck', count: 4300 },
  { name: 'Imported Cars', icon: 'Plane', count: 9800 },
  { name: 'Japanese Cars', icon: 'Flag', count: 18200 },
  { name: 'Hybrid Cars', icon: 'Leaf', count: 3400 },
  { name: 'Electric Cars', icon: 'Zap', count: 850 },
];

export const budgetRanges = [
  { label: 'Under 5 Lakhs', max: 500000, count: 2100 },
  { label: 'Under 10 Lakhs', max: 1000000, count: 4500 },
  { label: 'Under 20 Lakhs', max: 2000000, count: 8900 },
  { label: 'Under 30 Lakhs', max: 3000000, count: 12400 },
  { label: 'Under 50 Lakhs', max: 5000000, count: 18600 },
  { label: 'Under 1 Crore', max: 10000000, count: 22100 },
  { label: 'Above 1 Crore', max: null, count: 3200 },
];

export const bodyTypes = [
  { name: 'Hatchback', count: 8500 },
  { name: 'Sedan', count: 12300 },
  { name: 'SUV', count: 6700 },
  { name: 'Crossover', count: 4200 },
  { name: 'Pickup', count: 2100 },
  { name: 'Van', count: 1500 },
  { name: 'MPV', count: 1800 },
  { name: 'Coupe', count: 650 },
];

export const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

export const dealers = [
  { id: 'd1', name: 'RideZone Premium Motors', location: 'Lahore', verified: true, inventory: 45 },
  { id: 'd2', name: 'AutoHub Pakistan', location: 'Karachi', verified: true, inventory: 62 },
  { id: 'd3', name: 'Elite Car Gallery', location: 'Islamabad', verified: true, inventory: 38 },
  { id: 'd4', name: 'City Motors', location: 'Rawalpindi', verified: false, inventory: 28 },
];

export const carAdvice = [
  {
    id: 'a1',
    title: 'How to Check a Used Car Before Buying',
    excerpt: 'Essential tips to inspect a used car and avoid common pitfalls when making your purchase.',
    thumbnail: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=300&h=180&fit=crop',
  },
  {
    id: 'a2',
    title: 'Understanding Car Documents in Pakistan',
    excerpt: 'A complete guide to verifying ownership documents, registration, and transfer process.',
    thumbnail: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=180&fit=crop',
  },
  {
    id: 'a3',
    title: 'Best Resale Value Cars in Pakistan',
    excerpt: 'Which cars hold their value best? Our analysis of the used car market trends.',
    thumbnail: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=300&h=180&fit=crop',
  },
  {
    id: 'a4',
    title: 'Negotiating the Best Price for Used Cars',
    excerpt: 'Expert strategies to get the best deal when buying or selling your vehicle.',
    thumbnail: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=180&fit=crop',
  },
];

export const inspectionPoints = [
  { category: 'Engine', points: ['Oil level & quality', 'Coolant condition', 'Belt & hose check', 'Emission test'] },
  { category: 'Suspension', points: ['Shock absorbers', 'Springs condition', 'Steering components', 'Alignment check'] },
  { category: 'Exterior', points: ['Paint condition', 'Body panel gaps', 'Rust inspection', 'Glass & lights'] },
  { category: 'Interior', points: ['Seat condition', 'Dashboard functionality', 'AC & heating', 'Electronics test'] },
];
