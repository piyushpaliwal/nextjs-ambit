import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import Balance from 'icons/lineal/Balance'
import CheckList from 'icons/lineal/CheckList'
import Coin from 'icons/lineal/Coin'
import Invoice from 'icons/lineal/Invoice'
import MapIcon from 'icons/lineal/MapIcon'
import User from 'icons/lineal/User'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Healthcare Accounting & Payroll Services | Ambit',
  description:
    'Ambit provides accounting, payroll, and regulatory compliance solutions for healthcare practices and medical offices. Maintain accurate reporting and streamline operations.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Vital Signs: Precision Accounting for Healthcare',
  description: 'Healthcare practices face compliance requirements, payroll complexity, and regulatory reporting.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Payroll and employment tax',
    Icon: Invoice
  },
  {
    id: 2,
    title: 'Regulatory compliance',
    Icon: Balance
  },
  {
    id: 3,
    title: 'Multi-location operations',
    Icon: MapIcon
  }
]

const challengesProps: ServiceCallOutProps = {
  title: 'Key Challenges We Solve',
  ambitServiceSet: challengeSet
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Accounting and reporting',
    Icon: Analytics
  },
  {
    id: 2,
    title: 'Payroll processing and filings',
    Icon: Coin
  },
  {
    id: 3,
    title: 'Entity structuring and governance',
    Icon: CheckList
  },
  {
    id: 4,
    title: 'Outsourced healthcare accounting',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Discuss healthcare accounting needs',
  description:
    'Schedule a consultation to streamline your revenue cycle and payroll. Let’s ensure your back office runs smoothly so you can focus entirely on patient care.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
