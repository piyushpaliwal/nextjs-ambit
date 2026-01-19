import type { NavItem, NavRecord } from 'components/blocks/navbar/Navbar'
import { LocaleEnum } from 'types/locale'

const home: NavItem = { id: 1, url: '/', title: 'Home' }
const price: NavItem = { id: 1, url: '/price', title: 'Price', allowedLocales: [LocaleEnum.Global] }
const blog: NavItem = { id: 1, url: '/blogs', title: 'Blog', allowedLocales: [LocaleEnum.Global] }
const contact: NavItem = { id: 1, url: '/contact', title: 'Contact' }

const services: NavItem[] = [
  {
    id: 1,
    url: '#',
    title: 'For CPAs',
    allowedLocales: [LocaleEnum.Global],
    children: [
      {
        id: 11,
        url: '#',
        title: 'Accounting',
        children: [
          { id: 111, title: 'Accounting & Bookkeeping', url: '/services/accounting-bookkeeping' },
          { id: 112, title: 'Catch-up Bookkeeping', url: '/services/catch-up-bookkeeping' },
          { id: 113, title: 'Payroll', url: '/services/payroll' },
          { id: 114, title: 'Accounts Receivable', url: '/services/accounts-receivable' },
          { id: 115, title: 'Accounts Payable', url: '/services/accounts-payable' },
          { id: 116, url: '/services/invoice-processing', title: 'Invoice Processing' }
        ]
      },
      {
        id: 12,
        url: '#',
        title: 'Tax',
        children: [
          { id: 121, url: '/services/tax-service', title: 'Tax Planning & Advisory' },
          { id: 122, url: '/services/tax-return', title: 'Tax Return Preparation' }
        ]
      },
      { id: 13, url: '/services/financial-reporting', title: 'Financial Reporting', children: [] },
      { id: 14, url: '/services/dedicated-staffing', title: 'Dedicated Staffing', children: [] },
      { id: 15, url: '/remote-accounting-tax-solutions', title: 'Remote Staffing', children: [] }
    ]
  },
  {
    id: 2,
    url: '#',
    title: 'For Businesses',
    allowedLocales: [LocaleEnum.Global],
    children: [
      { id: 21, url: '/services/bookkeeping-and-accounting', title: 'Bookkeeping And Accounting' },
      { id: 22, url: '/services/tax-services', title: 'Tax Services' },
      { id: 23, url: '/services/construction-accounting', title: 'Construction Accounting' },
      { id: 24, url: '/services/real-estate-accounting', title: 'Real Estate Accounting' },
      { id: 25, url: '/services/retail-accounting', title: 'Retail Accounting' },
      { id: 26, url: '/services/hospitality-accounting', title: 'Hospitality Accounting' }
    ]
  },
  {
    id: 3,
    url: '#',
    title: 'Advisory',
    allowedLocales: [LocaleEnum.US],
    children: [
      { id: 31, url: '/services/business-structure-advisory', title: 'Business Structure & Company Formation' }
    ]
  },
  {
    id: 4,
    url: '#',
    title: 'Execution',
    allowedLocales: [LocaleEnum.US],
    children: [
      { id: 41, url: '/services/formation-setup', title: 'Company Formation & Business Setup' },
      { id: 42, url: '/services/accounting-bookkeeping-execution', title: 'Accounting & Bookkeeping' },
      { id: 43, url: '/services/tax-advisory', title: 'Tax Advisory & Compliance' },
      { id: 44, url: '/services/specialized-tax', title: 'Specialized Tax Services' },
      { id: 45, url: '/services/payroll-employment-tax', title: 'Payroll & Employment Tax' },
      { id: 46, url: '/services/monthly-retainer', title: 'Monthly Retainer Services' },
      { id: 47, url: '/services/remote-staffing-outsourcing', title: 'Remote Staffing & Outsourcing' },
      { id: 48, url: '/services/systems-integration-tech-support', title: 'Systems Integration & Technology Support' },
      { id: 49, url: '/services/international-cross-border-advisory', title: 'International / Cross-Border Advisory' }
    ]
  }
]

const industries: NavItem[] = [
  { id: 1, url: '/industries/ecommerce', title: 'E-Commerce & DTC', children: [], allowedLocales: [LocaleEnum.US] },
  {
    id: 2,
    url: '/industries/construction',
    title: 'Construction & Contractors',
    children: [],
    allowedLocales: [LocaleEnum.US]
  },
  { id: 3, url: '/industries/hospitality', title: 'Hospitality', children: [], allowedLocales: [LocaleEnum.US] },
  {
    id: 4,
    url: '/industries/real-estate',
    title: 'Real Estate & Property Management',
    children: [],
    allowedLocales: [LocaleEnum.US]
  },
  {
    id: 5,
    url: '/industries/it',
    title: 'IT Contractors & Professional Services',
    children: [],
    allowedLocales: [LocaleEnum.US]
  },
  {
    id: 6,
    url: '/industries/healthcare',
    title: 'Healthcare & Medical Practices',
    children: [],
    allowedLocales: [LocaleEnum.US]
  },
  {
    id: 7,
    url: '/industries/logistics',
    title: 'Logistics & Transportation',
    children: [],
    allowedLocales: [LocaleEnum.US]
  },
  {
    id: 8,
    url: '/industries/startups',
    title: 'Startups & Venture-Backed Companies',
    children: [],
    allowedLocales: [LocaleEnum.US]
  }
]

const company: NavItem[] = [
  { id: 1, url: '/about-us', title: 'About Us', children: [] },
  { id: 2, url: '/faq', title: 'FAQ', children: [], allowedLocales: [LocaleEnum.Global] },
  { id: 3, url: '/privacy-policy', title: 'Privacy Policy', children: [], allowedLocales: [LocaleEnum.Global] },
  { id: 4, url: '/approach', title: 'Our Approach', children: [], allowedLocales: [LocaleEnum.US] },
  {
    id: 5,
    url: '/governance-security',
    title: 'Governance, Data Security & Compliance',
    children: [],
    allowedLocales: [LocaleEnum.US]
  }
]

export const navigationItemList: NavRecord = { home, services, price, blog, industries, company, contact }
