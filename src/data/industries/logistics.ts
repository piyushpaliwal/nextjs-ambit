import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import CheckList from 'icons/lineal/CheckList'
import Coin from 'icons/lineal/Coin'
import Invoice from 'icons/lineal/Invoice'
import MapIcon from 'icons/lineal/MapIcon'
import User from 'icons/lineal/User'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Logistics & Transportation Accounting Services | Ambit',
  description:
    'Ambit offers accounting, payroll, and multi-state tax advisory services for logistics and transportation businesses. Optimize compliance and operational efficiency.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Keep Your Fleet Moving & Your Books Balanced',
  description:
    'Logistics and transportation businesses require multi-state compliance, fuel tax tracking, and payroll oversight.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Multi-state reporting',
    Icon: MapIcon
  },
  {
    id: 2,
    title: 'Payroll and contractor compliance',
    Icon: CheckList
  },
  {
    id: 3,
    title: 'Fuel tax exposure and deductions',
    Icon: Invoice
  }
]

const challengesProps: ServiceCallOutProps = {
  title: 'Key Challenges We Solve',
  ambitServiceSet: challengeSet
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Accounting and financial reporting',
    Icon: Analytics
  },
  {
    id: 2,
    title: 'Payroll processing',
    Icon: Coin
  },
  {
    id: 3,
    title: 'Tax compliance and advisory',
    Icon: CheckList
  },
  {
    id: 4,
    title: 'Outsourced finance professionals',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Speak to a logistics accounting advisor',
  description:
    'Streamline your financial operations, from driver payroll structures to accounts receivable. Keep your back office running as smoothly as your fleet.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
