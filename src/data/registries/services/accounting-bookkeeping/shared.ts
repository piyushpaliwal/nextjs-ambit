import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import type { RegistryFor } from 'types/transformer'

export const commonHeaderProps: RegistryFor<HeaderProps, 'accountingBookkeeping'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Accounting & Bookkeeping Services', href: 'services/accounting-bookkeeping-execution', isActive: true }
]

export const commonHeroProps: RegistryFor<Hero4Props, 'accountingBookkeeping'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const commonCtaProps: RegistryFor<CtaProps, 'accountingBookkeeping'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Assessment'
}
