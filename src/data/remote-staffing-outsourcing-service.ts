import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroInnerPagesProps } from 'components/blocks/hero'
import type { CallOut2Services, ServicesCallOut2Props } from 'components/blocks/services'
import type { CtaProps } from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import User from 'icons/lineal/User'
import i8 from '../../public/img/illustrations/i8.png'

const headerProps: HeaderProps = {
  title: 'Remote Staffing & Outsourcing Solutions | US Execution Services – Accounting, Tax & Payroll | Ambit',
  description:
    'Ambit provides dedicated, experienced finance, accounting, and administrative professionals who work as an extension of your team',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Expert Talent. Exclusively Yours.',
  description:
    'Ambit provides dedicated, experienced finance, accounting, and administrative professionals who work as an extension of your team.',
  imgAlt: 'Illustration of a person working on a laptop',
  imgSrc: i8,
  buttonTitle: 'Schedule a 15 Minute Consultation',
  buttonHref: 'https://calendly.com/ambit-accounting/15min'
}

const serviceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Accountants, bookkeepers, tax preparers, finance managers',
    Icon: User
  },
  {
    id: 2,
    title: 'Full-time or part-time engagement',
    Icon: User
  },
  {
    id: 3,
    title: 'Training and integration into client systems',
    Icon: User
  },
  {
    id: 4,
    title: 'Daily or weekly reporting',
    Icon: User
  }
]

const serviceProps: ServicesCallOut2Props = {
  title: 'We Provide',
  serviceSet: serviceSet
}

const governanceSet: CallOut2Services[] = [
  {
    id: 1,
    title: 'Role-based access and audit logs',
    Icon: Analytics
  },
  {
    id: 2,
    title: 'Senior management review and supervision',
    Icon: Analytics
  },
  {
    id: 3,
    title: 'SLA-driven delivery',
    Icon: Analytics
  },
  {
    id: 4,
    title: 'Secure data handling and audit-ready output',
    Icon: Analytics
  }
]

const governanceProps: ServicesCallOut2Props = {
  title: 'Governance and Quality Control',
  serviceSet: governanceSet
}

const ctaProps: CtaProps = {
  title: 'Request a remote staffing proposal',
  description:
    'Tell us the role you need to fill, and we will match you with a vetted professional who fits your culture and workflow.'
}

export { headerProps, heroProps, serviceProps, governanceProps, ctaProps }
