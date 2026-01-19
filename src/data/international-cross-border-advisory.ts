import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'International / Cross-Border Advisory | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit advises foreign-owned US entities, global investors, and international groups on US inbound tax, compliance, and cross-border operations.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Enter the US Market with Confidence.',
  description:
    'Ambit advises foreign-owned US entities, global investors, and international groups on US inbound tax, compliance, and cross-border operations.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const serviceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Transfer pricing compliance and documentation',
    Icon: User
  },
  {
    id: 2,
    title: 'US inbound tax planning for foreign entities',
    Icon: User
  },
  {
    id: 3,
    title: 'Foreign entity registration and reporting obligations',
    Icon: User
  },
  {
    id: 4,
    title: 'Multi-jurisdictional tax advisory and mitigation strategies',
    Icon: User
  },
  {
    id: 5,
    title: 'Cross-border corporate structuring',
    Icon: User
  }
]

const serviceProps: ServiceCallOutProps = {
  title: 'Our Services',
  ambitServiceSet: serviceSet
}

const ctaProps: CtaProps = {
  title: 'Discuss International Advisory',
  description:
    'Navigate the complexities of cross-border taxation with a clear roadmap tailored to your specific US expansion goals.'
}

export { headerProps, heroProps, serviceProps, ctaProps }
