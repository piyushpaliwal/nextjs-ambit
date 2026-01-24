import type { HeaderProps } from 'components/blocks/header/Header'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { ServiceHeroProps } from 'components/blocks/services/ServicesHero'
import type { CtaProps } from 'components/common/cta'
import BriefcaseTwo from 'icons/lineal/BriefcaseTwo'
import Email3 from 'icons/lineal/Email3'
import MapIcon from 'icons/lineal/MapIcon'
import PieChartTwo from 'icons/lineal/PieChartTwo'
import PriceTag from 'icons/lineal/PriceTag'
import Profits from 'icons/lineal/Profits'
import i8 from '../../public/img/illustrations/i8.png'

const servicesSet: AmbitService[] = [
  {
    id: 1,
    title: 'Federal, state, and local tax returns',
    Icon: MapIcon
  },
  {
    id: 2,
    title: 'Sales and use tax compliance',
    Icon: PriceTag
  },
  {
    id: 3,
    title: 'Partnership, corporate, and individual filings',
    Icon: BriefcaseTwo
  },
  {
    id: 4,
    title: 'Owner compensation planning',
    Icon: PieChartTwo
  },
  {
    id: 5,
    title: 'Capital gains and dividend strategy',
    Icon: Profits
  },
  {
    id: 6,
    title: 'IRS correspondence and audit support',
    Icon: Email3
  }
]

const headerProps: HeaderProps = {
  title: 'Tax Advisory and Compliance | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit provides proactive, timely, and defensible federal and state tax advisory and compliance services.'
}

const servicesHeroProps: ServiceHeroProps = {
  title: 'Defensible Strategies. Timely Execution.',
  description:
    'Ambit provides proactive, timely, and defensible federal and state tax advisory and compliance services.',
  imageSrc: i8
}

const serviceCallOutProps: ServiceCallOutProps = {
  title: 'Our Services',
  ambitServiceSet: servicesSet
}

const ctaProps: CtaProps = {
  title: 'Speak to a US tax advisor',
  description: 'Our tax advisors are available to help you navigate the complex tax landscape and ensure compliance.',
  bgColor: 'bg-soft-primary'
}

export { headerProps, servicesHeroProps, serviceCallOutProps, ctaProps }
