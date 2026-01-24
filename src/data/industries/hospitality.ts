import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Calendar from 'icons/lineal/Calendar'
import CheckList from 'icons/lineal/CheckList'
import Coin from 'icons/lineal/Coin'
import MapPin from 'icons/lineal/MapPin'
import Shop from 'icons/lineal/Shop'
import User from 'icons/lineal/User'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Hospitality Accounting & Payroll Services | Ambit',
  description:
    'Ambit delivers accounting, payroll, and compliance solutions for hotels, restaurants, and cafes. Manage multi-location finances and high-volume operations efficiently.'
}

const heroProps: HeroInnerPagesProps = {
  title: 'Control the Chaos of Hospitality Finance',
  description:
    'Hospitality businesses operate with thin margins, multi-location complexities, and high-volume payroll and sales tax.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Multi-location accounting',
    Icon: MapPin
  },
  {
    id: 2,
    title: 'Payroll compliance including tips',
    Icon: Coin
  },
  {
    id: 3,
    title: 'Daily sales and cash reconciliation',
    Icon: CheckList
  }
]

const challengesProps: ServiceCallOutProps = {
  title: 'Key Challenges We Solve',
  ambitServiceSet: challengeSet
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Daily/weekly bookkeeping',
    Icon: Calendar
  },
  {
    id: 2,
    title: 'Revenue tracking by location',
    Icon: Shop
  },
  {
    id: 3,
    title: 'Payroll and sales tax compliance',
    Icon: Coin
  },
  {
    id: 4,
    title: 'Outsourced hospitality accounting',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Request hospitality accounting support',
  description:
    'Offload the burden of daily sales reconciliation, tip reporting, and sales tax. Spend less time in spreadsheets and more time with your guests.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
