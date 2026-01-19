import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Systems Integration & Technology Support | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Connect QuickBooks and Xero with Shopify, Amazon, and Stripe. Ambit provides expert system integration, data migration, and automation for seamless financial ops',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Connected Systems. Trusted Data.',
  description:
    'From API-led integrations to complex data migrations, we unify your financial stack. Get a single source of truth across your payments, marketplaces, and accounting ledgers.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const serviceSet: AmbitService[] = [
  {
    id: 1,
    title: 'QuickBooks, Xero',
    Icon: User
  },
  {
    id: 2,
    title: 'Payment and marketplace integrations (Shopify, Amazon, Stripe, PayPal)',
    Icon: User
  },
  {
    id: 3,
    title: 'Automation, reconciliations, and reporting dashboards',
    Icon: User
  },
  {
    id: 4,
    title: 'Data migration and system clean-ups',
    Icon: User
  },
  {
    id: 5,
    title: 'API-led integrations',
    Icon: User
  }
]

const serviceProps: ServiceCallOutProps = {
  title: 'Our Services',
  ambitServiceSet: serviceSet
}

const governanceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Role-based access and audit logs',
    Icon: Analytics
  },
  {
    id: 2,
    title: 'Senior management review and supervision',
    Icon: Analytics
  },
  {
    id: 3,
    title: 'SLA-driven delivery',
    Icon: Analytics
  },
  {
    id: 4,
    title: 'Secure data handling and audit-ready output',
    Icon: Analytics
  }
]

const governanceProps: ServicesCallOut2Props = {
  title: 'Governance and Quality Control',
  serviceSet: governanceSet
}

const ctaProps: CtaProps = {
  title: 'Optimize your accounting systems',
  description:
    'Clean up your historical data and synchronize your current tools for clear, audit-ready financial reporting.'
}

export { headerProps, heroProps, serviceProps, governanceProps, ctaProps }
