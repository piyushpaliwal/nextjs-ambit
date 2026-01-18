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

const formationServiceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Federal and state entity registration',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'EIN and IRS registrations',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Operating agreements and corporate bylaws',
    Icon: User
  },
  {
    id: 4,
    title: 'State tax and sales tax setup',
    Icon: Shield
  },
  {
    id: 5,
    title: 'Payroll registrations and compliance',
    Icon: Analytics
  },
  {
    id: 6,
    title: 'Accounting system setup and configuration',
    Icon: CloudComputing
  },
  {
    id: 7,
    title: 'Ownership and equity structuring',
    Icon: CloudComputing
  },
  {
    id: 8,
    title: 'Governance frameworks and statutory compliance',
    Icon: CloudComputing
  }
]

const clientSet: AmbitService[] = [
  {
    id: 1,
    title: 'Startups and small businesses',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'International groups establishing US presence',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Owner-managed businesses formalizing operations',
    Icon: User
  }
]

const serviceHeroProps: ServiceHeroProps = {
  title: 'Beyond Registration: Build a Foundation for Scale',
  description:
    'Company formation is more than registration; it defines governance, tax efficiency, and scalability. Ambit provides end-to-end US company formation with ongoing compliance and operational support.',
  imageSrc: i8
}

const headerProps: HeaderProps = {
  title: 'Company Formation & Setup Services | Ambit Accounting - Ambit',
  description:
    'Ambit offers comprehensive company formation and setup services in the US, ensuring legal compliance and operational readiness for startups and businesses.',
  keywords: 'company formation, business setup, legal compliance, US company registration, startup services',
  language: true
}

const serviceCallOutProps: ServiceCallOutProps = {
  title: 'How Ambit helps',
  ambitServiceSet: formationServiceSet
}
const whoWeServeProps: ServiceCallOutProps = {
  title: 'Who We Serve',
  ambitServiceSet: clientSet
}

const ctaProps: CtaProps = {
  title: 'Start your US company with Ambit',
  description: 'Company formation is more than registration; it determines governance, tax efficiency, and scalability.'
}

export { headerProps, serviceHeroProps, serviceCallOutProps, whoWeServeProps, ctaProps }
