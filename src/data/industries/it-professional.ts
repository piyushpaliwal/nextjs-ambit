import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import Balance from 'icons/lineal/Balance'
import Coin from 'icons/lineal/Coin'
import Handshake from 'icons/lineal/Handshake'
import Invoice from 'icons/lineal/Invoice'
import LightBulb from 'icons/lineal/LightBulb'
import User from 'icons/lineal/User'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'IT & Professional Services Accounting | Ambit',
  description:
    'Ambit delivers accounting, partner compensation planning, and multi-state tax advisory for IT and professional services firms. Ensure accurate reporting and compliance.'
}

const heroProps: HeroInnerPagesProps = {
  title: 'Strategic Finance for IT & Professional Services',
  description:
    'IT and professional services firms need partner compensation planning, revenue recognition, and multi-state compliance.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Revenue recognition and contract billing',
    Icon: Invoice
  },
  {
    id: 2,
    title: 'Payroll and contractor compliance',
    Icon: Coin
  },
  {
    id: 3,
    title: 'State and federal tax filings',
    Icon: Balance
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
    title: 'Partner compensation planning',
    Icon: Handshake
  },
  {
    id: 3,
    title: 'Tax advisory',
    Icon: LightBulb
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
  title: 'Request professional services advisory',
  description:
    'Unlock the financial insights needed to scale. Let’s discuss how to optimize your entity structure, pricing models, and cash flow to support your next stage of growth.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
