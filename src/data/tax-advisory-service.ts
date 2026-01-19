import type { HeaderProps } from 'components/blocks/header/Header'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { ServiceHeroProps } from 'components/blocks/services/ServicesHero'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import CloudComputing from 'icons/lineal/CloudComputing'
import Invoice from 'icons/lineal/Invoice'
import Shield from 'icons/lineal/Shield'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const servicesSet: AmbitService[] = [
  {
    id: 1,
    title: 'Federal, state, and local tax returns',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'Sales and use tax compliance',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Partnership, corporate, and individual filings',
    Icon: User
  },
  {
    id: 4,
    title: 'Owner compensation planning',
    Icon: Shield
  },
  {
    id: 5,
    title: 'Capital gains and dividend strategy',
    Icon: Analytics
  },
  {
    id: 6,
    title: 'IRS correspondence and audit support',
    Icon: CloudComputing
  }
]

const headerProps: HeaderProps = {
  title: 'Tax Advisory and Compliance | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit provides proactive, timely, and defensible federal and state tax advisory and compliance services.',
  language: true
}

const servicesHeroProps: ServiceHeroProps = {
  title: 'Tax Advisory and Compliance',
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
