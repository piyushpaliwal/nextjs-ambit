const home = [{ id: 1, url: '/', title: 'Home' }]

const services = [
  { id: 1, url: '/services/accounts-bookkeeping', title: 'Accounts & Bookkeeping', children: [] },
  { id: 2, url: '/services/payroll', title: 'Payroll', children: [] },
  { id: 3, url: '/services/accounts-receivable', title: 'Accounts Receivable', children: [] },
  { id: 4, url: '/services/accounts-payable', title: 'Accounts Payable', children: [] },
  { id: 5, url: '/services/tax-return', title: 'Tax Return Preparation', children: [] },
  { id: 6, url: '/services/invoice-processing', title: 'Invoice Processing', children: [] },
  { id: 7, url: '/services/virtual-assistance', title: 'Virtual Assistance', children: [] }
]

const industries = {
  healthcare: [
    { id: 1, title: 'Dental Practice', url: '/dental-practice' },
    { id: 2, title: 'Chiropracters', url: '/chiropracters' },
    { id: 3, title: 'Opthalmologists', url: '/opthalmologists' },
    { id: 4, title: 'Paediatrics', url: '/paediatrics' },
    { id: 5, title: 'Veterinary', url: '/veterinary' },
    { id: 6, title: 'Medical Store', url: '/medical-store' },
    { id: 7, title: 'Behavioral-health', url: '/behavioral-health' },
    { id: 8, title: 'Doctor', url: '/doctor' },
    { id: 9, title: 'Hospitals', url: '/hospitals' },
    { id: 10, title: 'Medical Office', url: '/medical-office' },
    { id: 11, title: 'Healing Service', url: '/healing-service' },
    { id: 12, title: 'Mental Health', url: '/mental-health' }
  ],
  retailStores: [
    { id: 1, title: 'Bakery Stores', url: '/bakery-stores' },
    { id: 2, title: 'Fashion Stores', url: '/fashion-stores' },
    { id: 3, title: 'Super Stores', url: '/super-stores' },
    { id: 4, title: 'Garment Retailers', url: '/garment-retailers' }
  ],
  manufacturing: [
    { id: 1, title: 'Pharmaceutical', url: '/pharmaceutical' },
    { id: 2, title: 'Chemicals', url: '/chemicals' },
    { id: 3, title: 'Garments', url: '/garments' }
  ],
  eCommerce: [
    { id: 1, title: 'Fashion Store', url: '/fashion-store' },
    { id: 2, title: 'Amazon Seller', url: '/amazon-seller' },
    { id: 3, title: 'Shopify', url: '/Shopify' },
    { id: 4, title: 'Woo Commerce', url: '/woocommerce' },
    { id: 5, title: 'Etsy', url: '/etsy' },
    { id: 6, title: 'Consumer Goods', url: '/consumer-goods' }
  ],
  professional: [
    { id: 1, title: 'CPA Firms', url: '/cpa-firms' },
    { id: 2, title: 'Law Office', url: '/law-office' },
    { id: 3, title: 'Consulting Firms', url: '/consulting-firms' },
    { id: 4, title: 'CFO Services', url: '/cfo-services' },
    { id: 5, title: 'Wealth Management', url: '/wealth-management' },
    { id: 6, title: 'Attorneys', url: '/attorneys' }
  ],
  realEstate: [
    { id: 1, title: 'Construction', url: '/construction' },
    { id: 2, title: 'Rentals', url: '/rentals' },
    { id: 3, title: 'Leasing', url: '/leasing' },
    { id: 4, title: 'Remodeling', url: '/remodeling' }
  ],
  hospitality: [
    { id: 1, title: 'Restaurant', url: '/restaurant' },
    { id: 2, title: 'Liquor Store', url: '/liquor-store' },
    { id: 3, title: 'Hotel', url: '/hotel' },
    { id: 4, title: 'Laundry', url: '/laundry' },
    { id: 5, title: 'Bar', url: '/bar' },
    { id: 6, title: 'Restaurant Supplier', url: '/restaurant-supplier' },
    { id: 7, title: 'Cleaning Company', url: '/cleaning-company' }
  ],
  others: [
    { id: 1, title: 'Logistics', url: '/logistics' },
    { id: 2, title: 'Photographer', url: '/photographer' },
    { id: 3, title: 'Vocal Agency', url: '/vocal-agency' },
    { id: 4, title: 'Modeling Agency', url: '/modeling-agency' },
    { id: 5, title: 'Marketing Agency', url: '/marketing-agency' },
    { id: 6, title: 'Recruitment Agency', url: '/recruitment-agency' },
    { id: 7, title: 'IT Agency', url: '/it-agency' },
    { id: 8, title: 'Cab Leasing', url: '/cab-leasing' },
    { id: 9, title: 'Dance Studio', url: '/dance-studio' },
    { id: 10, title: 'Freight Forwarding', url: '/freight-forwarding' },
    { id: 11, title: 'Hair Salon', url: '/hair-salon' },
    { id: 12, title: 'Interior Designer', url: '/interior-designer' },
    { id: 13, title: 'Labour Contractor', url: '/labour-contractor' },
    { id: 14, title: 'Investment Office', url: '/investment-office' },
    { id: 15, title: 'Media Company', url: '/media-company' },
    { id: 16, title: 'Non Profit Agency', url: '/non-profit-agency' },
    { id: 17, title: 'Security Agency', url: '/security-agency' },
    { id: 18, title: 'Towing Agency', url: '/towing-agency' }
  ]
}

const company = [
  { id: 1, url: '/about-us', title: 'About Us', children: [] },
  { id: 2, url: '/faq', title: 'FAQ', children: [] },
  { id: 3, url: '/review', title: 'Review', children: [] },
  { id: 4, url: '/we-are-hiring', title: 'We are Hiring!', children: [] },
  { id: 5, url: '/life-at-ambitkpo', title: 'Life@AmbitKPO', children: [] },
  { id: 6, url: '/contact', title: 'Contact' }
]

export { home, services, industries, company }
