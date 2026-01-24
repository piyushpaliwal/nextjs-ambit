import type { HeaderProps } from 'components/blocks/header/Header'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { ServiceHeroProps } from 'components/blocks/services/ServicesHero'
import type { CtaProps } from 'components/common/cta'
import Balance from 'icons/lineal/Balance'
import BriefcaseTwo from 'icons/lineal/BriefcaseTwo'
import Certificate from 'icons/lineal/Certificate'
import Earth from 'icons/lineal/Earth'
import IdCard from 'icons/lineal/IdCard'
import Invoice from 'icons/lineal/Invoice'
import PieChartTwo from 'icons/lineal/PieChartTwo'
import Rocket from 'icons/lineal/Rocket'
import SettingsThree from 'icons/lineal/SettingsThree'
import Shield from 'icons/lineal/Shield'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const formationServiceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Federal and state entity registration',
    Icon: Certificate
  },
  {
    id: 2,
    title: 'EIN and IRS registrations',
    Icon: IdCard
  },
  {
    id: 3,
    title: 'Operating agreements and corporate bylaws',
    Icon: Invoice
  },
  {
    id: 4,
    title: 'State tax and sales tax setup',
    Icon: Balance
  },
  {
    id: 5,
    title: 'Payroll registrations and compliance',
    Icon: User
  },
  {
    id: 6,
    title: 'Accounting system setup and configuration',
    Icon: SettingsThree
  },
  {
    id: 7,
    title: 'Ownership and equity structuring',
    Icon: PieChartTwo
  },
  {
    id: 8,
    title: 'Governance frameworks and statutory compliance',
    Icon: Shield
  }
]

const clientSet: AmbitService[] = [
  {
    id: 1,
    title: 'Startups and small businesses',
    Icon: Rocket
  },
  {
    id: 2,
    title: 'International groups establishing US presence',
    Icon: Earth
  },
  {
    id: 3,
    title: 'Owner-managed businesses formalizing operations',
    Icon: BriefcaseTwo
  }
]

const serviceHeroProps: ServiceHeroProps = {
  title: 'Beyond Registration: Build a Foundation for Scale',
  description: 'Ambit provides end-to-end US company formation with ongoing compliance and operational support.',
  imageSrc: i8
}

const headerProps: HeaderProps = {
  title: 'Company Formation & Setup Services | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit offers comprehensive company formation and setup services in the US, ensuring legal compliance and operational readiness for startups and businesses.',
  keywords: 'company formation, business setup, legal compliance, US company registration, startup services'
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
