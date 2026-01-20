import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Calendar from 'icons/lineal/Calendar'
import CheckList from 'icons/lineal/CheckList'
import Coin from 'icons/lineal/Coin'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Payroll & Employment Tax Services | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit provide comprehensive payroll and employment tax services to help you stay compliant and manage your finances effectively.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Zero Penalties. 100% Peace of Mind.',
  description: 'Payroll compliance is critical to avoid penalties and maintain employee satisfaction.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const serviceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Payroll processing and tax filings',
    Icon: Coin
  },
  {
    id: 2,
    title: 'Federal and state employment tax compliance',
    Icon: CheckList
  },
  {
    id: 3,
    title: 'Contractor classification and 1099 reporting',
    Icon: User
  },
  {
    id: 4,
    title: 'Year-end reporting and reconciliations',
    Icon: Calendar
  }
]

const serviceProps: ServiceCallOutProps = {
  title: 'Our Services',
  description:
    'We offer a range of payroll and employment tax services to help you stay compliant and manage your finances effectively.',
  ambitServiceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Move your payroll to Ambit',
  description:
    "Don't wait for a penalty to upgrade your process. Switch to Ambit to secure your compliance and guarantee the accurate, timely payments your employees rely on.",
  bgColor: 'bg-soft-primary'
}

export { headerProps, heroProps, serviceProps, ctaProps }
