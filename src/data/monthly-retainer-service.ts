import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Balance from 'icons/lineal/Balance'
import BarChart from 'icons/lineal/BarChart'
import Calculator from 'icons/lineal/Calculator'
import Calendar from 'icons/lineal/Calendar'
import Clipboard from 'icons/lineal/Clipboard'
import Coin from 'icons/lineal/Coin'
import Earth from 'icons/lineal/Earth'
import Handshake from 'icons/lineal/Handshake'
import Rocket from 'icons/lineal/Rocket'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Monthly Retainer Services | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit’s monthly retainer model provides ongoing finance, tax, and compliance support without internal headcount overhead.'
}

const heroProps: HeroInnerPagesProps = {
  title: 'Continuous Expertise. Predictable Costs.',
  description:
    'Ambit’s monthly retainer model provides ongoing finance, tax, and compliance support without internal headcount overhead.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const serviceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Bookkeeping, reconciliations, and management reporting',
    Icon: Clipboard
  },
  {
    id: 2,
    title: 'Payroll and sales tax processing',
    Icon: Coin
  },
  {
    id: 3,
    title: 'Tax provisioning and planning',
    Icon: Calculator
  },
  {
    id: 4,
    title: 'Compliance filings and statutory submissions',
    Icon: Balance
  },
  {
    id: 5,
    title: 'Director-level advisory oversight',
    Icon: User
  },
  {
    id: 6,
    title: 'Predictable monthly cost structure',
    Icon: Calendar
  }
]

const serviceProps: ServiceCallOutProps = {
  title: 'What’s Included',
  ambitServiceSet: serviceSet
}

const partnerSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Businesses requiring ongoing finance support',
    Icon: BarChart
  },
  {
    id: 2,
    title: 'Accounting firms seeking reliable delivery partners',
    Icon: Handshake
  },
  {
    id: 3,
    title: 'Founder-led and high-growth businesses',
    Icon: Rocket
  },
  {
    id: 4,
    title: 'International companies operating in the US',
    Icon: Earth
  }
]

const ourPartnerProps: ServicesCallOut2Props = {
  title: 'Who We Partner With',
  serviceSet: partnerSet
}

const ctaProps: CtaProps = {
  title: 'Request a monthly retainer proposal',
  description:
    'Discover how much you can save by replacing internal overhead with our expert, all-inclusive managed services.'
}

export { headerProps, heroProps, serviceProps, ourPartnerProps, ctaProps }
