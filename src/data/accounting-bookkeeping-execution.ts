import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import Balance from 'icons/lineal/Balance'
import BarChart from 'icons/lineal/BarChart'
import Certificate from 'icons/lineal/Certificate'
import CheckList from 'icons/lineal/CheckList'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Accounting & Bookkeeping Services | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Accurate accounting is the foundation of compliance, decision-making, and business growth. Ambit delivers structured accounting services aligned with US GAAP and state requirements.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Build Your Business on Solid Numbers.',
  description:
    'Accurate, structured accounting services aligned with US GAAP. We provide the financial foundation you need for compliance and confident decision-making.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const serviceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Monthly or quarterly bookkeeping',
    Icon: CheckList
  },
  {
    id: 2,
    title: 'Management accounts preparation',
    Icon: BarChart
  },
  {
    id: 3,
    title: 'Balance sheet reconciliation and review controls',
    Icon: Balance
  },
  {
    id: 4,
    title: 'Cashflow monitoring and variance analysis',
    Icon: Analytics
  },
  {
    id: 5,
    title: 'Audit-ready documentation and reporting',
    Icon: Certificate
  }
]

const serviceProps: ServiceCallOutProps = {
  title: 'Our Services',
  ambitServiceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Outsource your accounting to Ambit',
  description:
    'Secure a solid financial foundation with managed accounting services tailored to your specific industry requirements.'
}

export { headerProps, heroProps, serviceProps, ctaProps }
