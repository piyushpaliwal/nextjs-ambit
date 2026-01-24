import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import CloudComputing from 'icons/lineal/CloudComputing'
import Puzzle from 'icons/lineal/Puzzle'
import Server from 'icons/lineal/Server'
import ShoppingCart from 'icons/lineal/ShoppingCart'
import Workflow from 'icons/lineal/Workflow'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Systems Integration & Technology Support | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Connect QuickBooks and Xero with Shopify, Amazon, and Stripe. Ambit provides expert system integration, data migration, and automation for seamless financial ops'
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
    Icon: CloudComputing
  },
  {
    id: 2,
    title: 'Payment and marketplace integrations (Shopify, Amazon, Stripe, PayPal)',
    Icon: ShoppingCart
  },
  {
    id: 3,
    title: 'Automation, reconciliations, and reporting dashboards',
    Icon: Workflow
  },
  {
    id: 4,
    title: 'Data migration and system clean-ups',
    Icon: Server
  },
  {
    id: 5,
    title: 'API-led integrations',
    Icon: Puzzle
  }
]

const serviceProps: ServiceCallOutProps = {
  title: 'Our Services',
  ambitServiceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Optimize your accounting systems',
  description:
    'Clean up your historical data and synchronize your current tools for clear, audit-ready financial reporting.'
}

export { headerProps, heroProps, serviceProps, ctaProps }
