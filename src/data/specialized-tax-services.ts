import type { HeaderProps } from 'components/blocks/header/Header'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { ServiceHeroProps } from 'components/blocks/services/ServicesHero'
import type { CtaProps } from 'components/common/cta'
import AwardTwo from 'icons/lineal/AwardTwo'
import Laptop from 'icons/lineal/Laptop'
import NetworkingTwo from 'icons/lineal/NetworkingTwo'
import Puzzle from 'icons/lineal/Puzzle'
import Search from 'icons/lineal/Search'
import i8 from '../../public/img/illustrations/i8.png'

const servicesSet: AmbitService[] = [
  {
    id: 1,
    title: 'R&D Tax Credit Advisory',
    Icon: Laptop
  },
  {
    id: 2,
    title: 'State-specific tax incentives and credits',
    Icon: AwardTwo
  },
  {
    id: 3,
    title: 'Multi-state compliance and nexus advisory',
    Icon: NetworkingTwo
  },
  {
    id: 4,
    title: 'Tax planning for complex entity structures',
    Icon: Puzzle
  },
  {
    id: 5,
    title: 'IRS and state audit support for specialized claims',
    Icon: Search
  }
]

const headerProps: HeaderProps = {
  title: 'Specialized Tax Services | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit offers high-value, proactive tax advisory beyond standard filings to optimize incentives, minimize liabilities, and ensure compliance.'
}

const servicesHeroProps: ServiceHeroProps = {
  title: 'Stop Just Filing. Start Optimizing.',
  description:
    'Ambit offers high-value, proactive tax advisory beyond standard filings to optimize incentives, minimize liabilities, and ensure compliance.',
  imageSrc: i8
}

const serviceCallOutProps: ServiceCallOutProps = {
  title: 'Our Services',
  ambitServiceSet: servicesSet
}

const ctaProps: CtaProps = {
  title: 'Speak to a Specialized Tax Advisor',
  description: 'Get personalized tax advice tailored to your business needs.',
  bgColor: 'bg-soft-primary'
}

export { headerProps, servicesHeroProps, serviceCallOutProps, ctaProps }
