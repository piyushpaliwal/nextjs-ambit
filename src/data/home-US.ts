import type { HeaderProps } from 'components/blocks/header/Header'
import type { ProcessProps } from 'components/blocks/process/Process'
import type { HeroProps } from 'components/blocks/hero/Hero'
import type { About8Props } from 'components/blocks/about'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import User from 'icons/lineal/User'
import type { Faq2Item } from 'components/blocks/faq/FAQ2'
import type { CtaProps } from 'components/common/cta'
import TeleMarketer from 'icons/lineal/TeleMarketer'
import type { ProcessListItem } from 'components/reuseable/process/ProcessSection'
import Megaphone from 'icons/lineal/Megaphone'
import Target from 'icons/solid-mono/Target'
import SettingsThree from 'icons/lineal/SettingsThree'
import BarChart from 'icons/lineal/BarChart'
import type { Service11Props, Service11Services } from 'components/blocks/services/Services11'
import Server from 'icons/solid-duo/Server'

export const heroProps: HeroProps = {
  subtitle: 'US Tax, Accounting & Business Advisory Services',
  description:
    'Ambit Tax and Accounting Services LLP is a US-focused tax, accounting, and business advisory firm supporting domestic and international businesses across the full business lifecycle.\n With 100+ professionals and 350+ active clients, we advise founders, owner-managed businesses, professional firms, start-ups, and growing companies on business formation, accounting, taxation, payroll, governance, outsourcing, and long-term structuring.'
}

const approachUS: Array<ProcessListItem> = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Free initial consultation and diagnostic review',
    Icon: TeleMarketer
  },
  {
    id: 2,
    title: 'Onboarding',
    Icon: TeleMarketer,
    description: 'Structured onboarding and scope definition'
  },
  {
    id: 3,
    title: 'Oversight',
    Icon: TeleMarketer,
    description: 'Dedicated engagement teams with senior oversight'
  },
  {
    id: 4,
    title: 'Pricing',
    Icon: TeleMarketer,
    description: 'Transparent pricing and defined service levels'
  },
  {
    id: 5,
    title: 'Execution',
    Icon: TeleMarketer,
    description: 'Governance-led, confidential execution'
  },
  {
    id: 6,
    title: 'Client Portal',
    Icon: TeleMarketer,
    description: 'Secure systems and client portals'
  },
  {
    id: 7,
    title: 'Advisory',
    Icon: TeleMarketer,
    description: 'Proactive advisory, not reactive compliance'
  }
]

export const processProps: ProcessProps = {
  title: 'How We Work',
  subtitle:
    'Ambit follows a structured and disciplined engagement framework to ensure accountability, governance, and clarity at every stage.',
  processSectionList: [
    {
      key: 1,
      subtitle:
        'Ambit operates as a trusted extension of your business, providing senior-level oversight without the need for full-time internal resources.',
      processList: approachUS
    }
  ]
}

export const headerProps: HeaderProps = {
  title: 'US Tax & Accounting Services for Businesses | Ambit Tax & Accounting',
  description:
    'Ambit Tax & Accounting Services LLP provides US tax, accounting, payroll, and advisory services for startups, businesses, and international companies. Partner-led, compliant, and scalable solutions.',
  language: true
}

const homeSupportList: string[][] = [
  ['US residents and domestic businesses', 'Non-resident founders and entrepreneurs'],
  ['Foreign-owned US entities', 'International groups entering or operating in the US']
]

export const supportProps: About8Props = {
  title: 'Who We Support',
  subtitle:
    'Ambit partners with businesses across industries and growth stages, delivering reliable finance and compliance support without internal overhead.',
  aboutList: homeSupportList
}

const whyAmbitSet: AmbitService[] = [
  {
    id: 1,
    title: 'Governance-focused, compliance-first approach',
    Icon: User
  },
  {
    id: 2,
    title: 'Partner-led advisory with senior oversight',
    Icon: User
  },
  {
    id: 3,
    title: 'Transparent pricing and clearly defined scopes',
    Icon: User
  },
  {
    id: 4,
    title: 'Secure systems and confidential execution',
    Icon: Server
  },
  {
    id: 5,
    title: 'Audit-ready processes and documentation',
    Icon: User
  },
  {
    id: 6,
    title: 'Long-term partnership mindset',
    Icon: User
  }
]

export const whyUsProps: ServiceCallOutProps = {
  title: 'Why Ambit',
  description:
    'Businesses choose Ambit for disciplined execution, governance-led delivery, and long-term advisory support.',
  ambitServiceSet: whyAmbitSet
}

const whyStayWithUsSet: AmbitService[] = [
  {
    id: 1,
    title: 'Consistent delivery through structured teams',
    Icon: User
  },
  {
    id: 2,
    title: 'Senior review and partner oversight',
    Icon: User
  },
  {
    id: 3,
    title: 'Reduced compliance risk',
    Icon: User
  },
  {
    id: 4,
    title: 'Scalable support as the business grows',
    Icon: User
  },
  {
    id: 5,
    title: 'Clear communication and reporting',
    Icon: User
  }
]

export const whyStayWithUsProps: ServiceCallOutProps = {
  title: 'Why Long-Term Clients Stay with Ambit',
  description: 'Our clients value predictability, accountability, and continuity.',
  ambitServiceSet: whyStayWithUsSet
}

export const usHomeFaqSet: Faq2Item[] = [
  {
    no: 'One',
    expand: false,
    heading: 'Who does Ambit work with?',
    body: 'Ambit works with startups, owner-managed businesses, professional firms, and international companies operating in or entering the US market.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Do you support non-US residents and foreign-owned companies?',
    body: 'Yes. We support non-resident founders, foreign-owned US entities, and international groups with US tax, accounting, compliance, and structuring requirements.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Do you only provide tax filing services?',
    body: 'No. We provide advisory, accounting, payroll, compliance, structuring, and ongoing finance support through monthly retainers and outsourcing models.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'How does your engagement process work?',
    body: 'We begin with a free consultation, followed by a diagnostic review, scope definition, onboarding, and assignment of a dedicated engagement team with senior oversight.'
  },
  {
    no: 'Five',
    expand: false,
    heading: 'How do you ensure data security and confidentiality?',
    body: 'We use secure client portals, encrypted systems, role-based access controls, and governance-led internal reviews to protect client data.'
  },
  {
    no: 'Six',
    expand: false,
    heading: 'Can Ambit act as our extended finance team?',
    body: 'Yes. Through our monthly retainer and remote staffing models, Ambit works as an extension of your internal finance and accounting function.'
  }
]

export const ctaProps: CtaProps = {
  title: 'Start a Conversation',
  description:
    'Whether you are forming a US entity, managing ongoing compliance, or seeking long-term advisory support, Ambit is here to help. Schedule a consultation to discuss your business needs and next steps.'
}

const services: Service11Services[] = [
  { id: 1, Icon: Megaphone, title: 'US business formation and structuring' },
  {
    id: 2,
    Icon: Target,
    title: 'Accounting and bookkeeping services'
  },
  { id: 3, Icon: SettingsThree, title: 'Federal and state tax advisory and compliance' },
  { id: 4, Icon: BarChart, title: 'Payroll and employment tax services' },
  { id: 5, Icon: Megaphone, title: 'Monthly retainer and ongoing support' },
  { id: 6, Icon: Megaphone, title: 'Remote staffing and outsourcing solutions' }
]

export const coreServiceProps: Service11Props = {
  title: 'Our Core Services',
  description: 'Ambit delivers integrated advisory and execution services tailored to your business requirements.',
  serviceSet: services,
  ctaHref: '/services',
  ctaText: 'Explore Our Services'
}

const industries: Service11Services[] = [
  { id: 1, Icon: Megaphone, title: 'E-Commerce and Direct-to-Consumer' },
  {
    id: 2,
    Icon: Target,
    title: 'Construction and Contractors'
  },
  { id: 3, Icon: SettingsThree, title: 'Hospitality (Hotels, Restaurants, Cafes)' },
  { id: 4, Icon: BarChart, title: 'Real Estate and Property Management' },
  { id: 5, Icon: Megaphone, title: 'IT and Professional Services' },
  { id: 6, Icon: Megaphone, title: 'Healthcare and Medical Practices' },
  { id: 7, Icon: Megaphone, title: 'Logistics and Transportation' },
  { id: 8, Icon: Megaphone, title: 'Startups and Venture-Backed Companies' }
]

export const industriesProps: Service11Props = {
  title: 'Industries We Serve',
  description:
    'We provide industry-specific accounting, tax, and compliance solutions tailored to operational realities.',
  serviceSet: industries,
  ctaHref: '/industries',
  ctaText: 'View Industries We Serve'
}
