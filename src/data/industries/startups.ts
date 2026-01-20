import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import CheckList from 'icons/lineal/CheckList'
import Invoice from 'icons/lineal/Invoice'
import Laptop from 'icons/lineal/Laptop'
import MapIcon from 'icons/lineal/MapIcon'
import User from 'icons/lineal/User'
import Workflow from 'icons/lineal/Workflow'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Startup & Venture-Backed Accounting Services | Ambit',
  description:
    'Ambit provides accounting, tax, and compliance solutions for startups and venture-backed companies. Achieve investor-ready reporting and scalable growth.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'From Seed to Scale: Strategic Startup Accounting',
  description: 'Startups need investor-ready reporting, scalable systems, and tax planning.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Investor-ready financial statements',
    Icon: Laptop
  },
  {
    id: 2,
    title: 'Multi-state compliance',
    Icon: MapIcon
  },
  {
    id: 3,
    title: 'Tax planning and growth advisory',
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
    title: 'Entity structuring',
    Icon: Workflow
  },
  {
    id: 2,
    title: 'Accounting setup and reporting',
    Icon: Analytics
  },
  {
    id: 3,
    title: 'Tax and compliance advisory',
    Icon: CheckList
  },
  {
    id: 4,
    title: 'Outsourced finance support',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Start your growth journey with Ambit',
  description:
    'Offload the distraction of back-office operations. Partner with a financial team that understands the startup ecosystem so you can focus entirely on product and growth.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
