import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Adjust from 'icons/lineal/Adjust'
import Analytics from 'icons/lineal/Analytics'
import Balance from 'icons/lineal/Balance'
import BarChart from 'icons/lineal/BarChart'
import Coin from 'icons/lineal/Coin'
import Profits from 'icons/lineal/Profits'
import User from 'icons/lineal/User'
import i8 from '../../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Construction & Contractor Accounting Services | Ambit',
  description:
    'Ambit offers project-based accounting, payroll compliance, and multi-state tax advisory for construction firms and contractors. Ensure accurate costing and reporting.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Build on Solid Ground: Specialized Construction Accounting',
  description:
    'Construction firms and contractors require project-based accounting, payroll compliance, and multi-state tax advisory.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const challengeSet: AmbitService[] = [
  {
    id: 1,
    title: 'Job costing and project profitability',
    Icon: Profits
  },
  {
    id: 2,
    title: 'Payroll compliance including subcontractors',
    Icon: Coin
  },
  {
    id: 3,
    title: 'Cashflow across projects',
    Icon: BarChart
  }
]

const challengesProps: ServiceCallOutProps = {
  title: 'Key Challenges We Solve',
  ambitServiceSet: challengeSet
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Project accounting and job costing',
    Icon: Analytics
  },
  {
    id: 2,
    title: 'Contractor payroll and 1099 compliance',
    Icon: Adjust
  },
  {
    id: 3,
    title: 'Federal and state tax filings',
    Icon: Balance
  },
  {
    id: 4,
    title: 'Outsourced accounting professionals',
    Icon: User
  }
]

const servicesProps: ServicesCallOut2Props = {
  title: 'Services We Offer',
  serviceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Discuss construction accounting and compliance',
  description:
    'Connect with a construction finance specialist to review your current setup and identify opportunities to streamline your payroll and job reporting.'
}

export { headerProps, heroProps, challengesProps, servicesProps, ctaProps }
