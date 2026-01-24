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
import SettingsThree from 'icons/lineal/SettingsThree'
import type { Service11Props, Service11Services } from 'components/blocks/services/Services11'
import type { GovernanceProperty } from 'components/home/HomeUS'
import Balance from 'icons/lineal/Balance'
import Invoice from 'icons/lineal/Invoice'
import BriefcaseTwo from 'icons/lineal/BriefcaseTwo'
import Clipboard from 'icons/lineal/Clipboard'
import Handshake from 'icons/lineal/Handshake'
import Workflow from 'icons/lineal/Workflow'
import Calculator from 'icons/lineal/Calculator'
import Calendar from 'icons/lineal/Calendar'
import Earth from 'icons/lineal/Earth'
import Coin from 'icons/lineal/Coin'
import Rocket from 'icons/lineal/Rocket'
import Browser from 'icons/lineal/Browser'
import PriceTag from 'icons/lineal/PriceTag'
import Show from 'icons/lineal/Show'
import LightBulb from 'icons/lineal/LightBulb'
import ShoppingCart from 'icons/lineal/ShoppingCart'
import CoffeeCup from 'icons/lineal/CoffeeCup'
import Adjust from 'icons/lineal/Adjust'
import House from 'icons/lineal/House'
import Laptop from 'icons/lineal/Laptop'
import Heart from 'icons/lineal/Heart'
import Truck from 'icons/lineal/Truck'
import Lock from 'icons/lineal/Lock'
import CheckList from 'icons/lineal/CheckList'
import Shield from 'icons/lineal/Shield'
import Profits from 'icons/lineal/Profits'
import Medal from 'icons/lineal/Medal'
import Puzzle from 'icons/lineal/Puzzle'

const headerProps: HeaderProps = {
  title: 'US Tax & Accounting Services for Businesses | Ambit Tax & Accounting',
  description:
    'Ambit Tax & Accounting Services LLP provides US tax, accounting, payroll, and advisory services for startups, businesses, and international companies. Partner-led, compliant, and scalable solutions.'
}

const heroProps: HeroProps = {
  subtitle: 'US Tax, Accounting & Business Advisory Services',
  description:
    'Ambit Tax and Accounting Services LLP is a US-focused tax, accounting, and business advisory firm supporting domestic and international businesses across the full business lifecycle.\n With 100+ professionals and 350+ active clients, we advise founders, owner-managed businesses, professional firms, start-ups, and growing companies on business formation, accounting, taxation, payroll, governance, outsourcing, and long-term structuring.'
}
// ------ Who we Support ------
const homeSupportList: string[][] = [
  ['US residents and domestic businesses', 'Non-resident founders and entrepreneurs'],
  ['Foreign-owned US entities', 'International groups entering or operating in the US']
]

const supportProps: About8Props = {
  title: 'Who We Support',
  subtitle:
    'Ambit partners with businesses across industries and growth stages, delivering reliable finance and compliance support without internal overhead.',
  aboutList: homeSupportList
}

// ------ Why Ambit ------

const whyAmbitSet: AmbitService[] = [
  {
    id: 1,
    title: 'Governance-focused, compliance-first approach',
    Icon: Balance
  },
  {
    id: 2,
    title: 'Partner-led advisory with senior oversight',
    Icon: User
  },
  {
    id: 3,
    title: 'Transparent pricing and clearly defined scopes',
    Icon: Invoice
  },
  {
    id: 4,
    title: 'Secure systems and confidential execution',
    Icon: BriefcaseTwo
  },
  {
    id: 5,
    title: 'Audit-ready processes and documentation',
    Icon: Clipboard
  },
  {
    id: 6,
    title: 'Long-term partnership mindset',
    Icon: Handshake
  }
]

const whyUsProps: ServiceCallOutProps = {
  title: 'Why Ambit',
  description:
    'Businesses choose Ambit for disciplined execution, governance-led delivery, and long-term advisory support.',
  ambitServiceSet: whyAmbitSet
}

// ------ Our Core Services ------
const services: Service11Services[] = [
  {
    id: 1,
    Icon: Workflow,
    title: 'US business formation and structuring'
  },
  {
    id: 2,
    Icon: Calculator,
    title: 'Accounting and bookkeeping services'
  },
  {
    id: 3,
    Icon: Invoice,
    title: 'Federal and state tax advisory and compliance'
  },
  {
    id: 4,
    Icon: Coin,
    title: 'Payroll and employment tax services'
  },
  {
    id: 5,
    Icon: Calendar,
    title: 'Monthly retainer and ongoing support'
  },
  {
    id: 6,
    Icon: Earth,
    title: 'Remote staffing and outsourcing solutions'
  }
]

const coreServiceProps: Service11Props = {
  title: 'Our Core Services',
  description: 'Ambit delivers integrated advisory and execution services tailored to your business requirements.',
  serviceSet: services,
  ctaHref: '/services',
  ctaText: 'Explore Our Services'
}

// ------ How we Work ------
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
    Icon: Rocket,
    description: 'Structured onboarding and scope definition'
  },
  {
    id: 3,
    title: 'Oversight',
    Icon: Show,
    description: 'Dedicated engagement teams with senior oversight'
  },
  {
    id: 4,
    title: 'Pricing',
    Icon: PriceTag,
    description: 'Transparent pricing and defined service levels'
  },
  {
    id: 5,
    title: 'Execution',
    Icon: SettingsThree,
    description: 'Governance-led, confidential execution'
  },
  {
    id: 6,
    title: 'Client Portal',
    Icon: Browser,
    description: 'Secure systems and client portals'
  },
  {
    id: 7,
    title: 'Advisory',
    Icon: LightBulb,
    description: 'Proactive advisory, not reactive compliance'
  }
]

const processProps: ProcessProps = {
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

// ------ Industries we serve ------
const industries: Service11Services[] = [
  {
    id: 1,
    Icon: ShoppingCart,
    title: 'E-Commerce and Direct-to-Consumer'
  },
  {
    id: 2,
    Icon: Adjust,
    title: 'Construction and Contractors'
  },
  {
    id: 3,
    Icon: CoffeeCup,
    title: 'Hospitality (Hotels, Restaurants, Cafes)'
  },
  {
    id: 4,
    Icon: House,
    title: 'Real Estate and Property Management'
  },
  {
    id: 5,
    Icon: Laptop,
    title: 'IT and Professional Services'
  },
  {
    id: 6,
    Icon: Heart,
    title: 'Healthcare and Medical Practices'
  },
  {
    id: 7,
    Icon: Truck,
    title: 'Logistics and Transportation'
  },
  {
    id: 8,
    Icon: Rocket,
    title: 'Startups and Venture-Backed Companies'
  }
]

const industriesProps: Service11Props = {
  title: 'Industries We Serve',
  description:
    'We provide industry-specific accounting, tax, and compliance solutions tailored to operational realities.',
  serviceSet: industries,
  ctaHref: '/industries',
  ctaText: 'View Industries We Serve'
}

// ------ Governance, Data Security and Compliance ------
const governanceSet: GovernanceProperty[] = [
  {
    id: 1,
    Icon: CheckList,
    title: 'Data Protection',
    offeringSet: [
      'GDPR-compliant and US privacy-aligned data handling',
      'Role-based access and audit logs',
      'Secure client portals'
    ]
  },
  {
    id: 2,
    Icon: Lock,
    title: 'Information Security',
    offeringSet: [
      'ISO-aligned security principles',
      'Encrypted data transfer and storage',
      'Multi-factor authentication and monitoring'
    ]
  },
  {
    id: 3,
    Icon: Balance,
    title: 'Governance and Internal Controls',
    offeringSet: [
      'Segregation of duties',
      'Partner review and sign-off',
      'Statutory compliance checklists',
      'Audit-ready documentation'
    ]
  }
]

// ------ Why Long-term clients stay with ambit ------
const whyStayWithUsSet: AmbitService[] = [
  {
    id: 1,
    title: 'Consistent delivery through structured teams',
    Icon: Puzzle
  },
  {
    id: 2,
    title: 'Senior review and partner oversight',
    Icon: Medal
  },
  {
    id: 3,
    title: 'Reduced compliance risk',
    Icon: Shield
  },
  {
    id: 4,
    title: 'Scalable support as the business grows',
    Icon: Profits
  },
  {
    id: 5,
    title: 'Clear communication and reporting',
    Icon: CheckList
  }
]

const whyStayWithUsProps: ServiceCallOutProps = {
  title: 'Why Long-Term Clients Stay with Ambit',
  description: 'Our clients value predictability, accountability, and continuity.',
  ambitServiceSet: whyStayWithUsSet
}

// ------ FAQ ------
const usHomeFaqSet: Faq2Item[] = [
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

// ------ CTA ------
const ctaProps: CtaProps = {
  title: 'Start a Conversation',
  description:
    'Whether you are forming a US entity, managing ongoing compliance, or seeking long-term advisory support, Ambit is here to help. Schedule a consultation to discuss your business needs and next steps.'
}

export {
  heroProps,
  headerProps,
  processProps,
  industriesProps,
  coreServiceProps,
  ctaProps,
  supportProps,
  usHomeFaqSet,
  whyStayWithUsProps,
  whyUsProps,
  governanceSet
}
