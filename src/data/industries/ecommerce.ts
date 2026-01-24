import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { CtaProps } from 'components/common/cta'
import Calendar from 'icons/lineal/Calendar'
import CheckList from 'icons/lineal/CheckList'
import Clipboard from 'icons/lineal/Clipboard'
import Levels from 'icons/lineal/Levels'
import MapPin from 'icons/lineal/MapPin'
import Profits from 'icons/lineal/Profits'
import Shop from 'icons/lineal/Shop'
import User from 'icons/lineal/User'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'E-Commerce & DTC Accounting Services | Ambit',
  description:
    'Ambit provides accounting, multi-state sales tax compliance, and financial management for e-commerce and direct-to-consumer businesses. Optimize operations and reporting.'
}

const heroProps: HeroInnerPagesProps = {
  title: 'Scale Your Store. We’ll Handle the Tax & Books.',
  description:
    'Ambit supports e-commerce businesses with structured accounting, multi-state sales tax compliance, and operational finance management.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Multi-channel transaction reconciliation',
    Icon: Levels
  },
  {
    id: 2,
    title: 'Sales tax nexus compliance',
    Icon: MapPin
  },
  {
    id: 3,
    title: 'Inventory tracking and COGS',
    Icon: CheckList
  },
  {
    id: 4,
    title: 'High-volume revenue reporting',
    Icon: Clipboard
  }
]

const challengesProps: ServicesCallOut2Props = {
  title: 'Key Challenges We Solve',
  serviceSet: challengeSet
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Daily, weekly, or monthly bookkeeping',
    Icon: Calendar
  },
  {
    id: 2,
    title: 'Marketplace reconciliation (Shopify, Amazon, Stripe, PayPal)',
    Icon: Shop
  },
  {
    id: 3,
    title: 'Cashflow and margin analysis',
    Icon: Profits
  },
  {
    id: 4,
    title: 'Outsourced dedicated accounting professionals',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Speak to an e-commerce accounting specialist',
  description:
    'Unlock the financial clarity you need to scale. Let’s discuss how our specialized teams can streamline your back-office, optimize margins, and ensure compliance while you focus on selling.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
