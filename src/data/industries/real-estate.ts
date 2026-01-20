import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Balance from 'icons/lineal/Balance'
import Files from 'icons/lineal/Files'
import Home from 'icons/lineal/Home'
import Money from 'icons/lineal/Money'
import Profits from 'icons/lineal/Profits'
import User from 'icons/lineal/User'
import Workflow from 'icons/lineal/Workflow'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Real Estate & Property Accounting Services | Ambit',
  description:
    'Ambit provides property-wise bookkeeping, cashflow reporting, and tax compliance for real estate owners, managers, and developers. Maximize ROI and efficiency.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Build a Tax-Efficient Real Estate Empire',
  description:
    'Property owners, managers, and developers require accurate accounting, entity structuring, and federal/state tax planning.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Multi-property accounting',
    Icon: Home
  },
  {
    id: 2,
    title: 'Rental income and expense allocation',
    Icon: Money
  },
  {
    id: 3,
    title: 'Entity structuring for tax efficiency',
    Icon: Workflow
  }
]

const challengesProps: ServiceCallOutProps = {
  title: 'Key Challenges We Solve',
  ambitServiceSet: challengeSet
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Property-wise bookkeeping',
    Icon: Files
  },
  {
    id: 2,
    title: 'Cashflow and ROI reporting',
    Icon: Profits
  },
  {
    id: 3,
    title: 'Federal/state tax compliance',
    Icon: Balance
  },
  {
    id: 4,
    title: 'Outsourced accounting resources',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Speak to a real estate accounting advisor',
  description:
    'Gain crystal-clear visibility into your cash flow and ROI per property. Let’s discuss how to streamline your bookkeeping across your entire portfolio.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
