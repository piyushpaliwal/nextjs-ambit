import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import type { RegistryFor } from 'types/transformer'

export const commonHeaderProps: RegistryFor<HeaderProps, 'monthlyRetainer'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Monthly Retainer', href: 'services/monthly-retainer', isActive: true }
]

export const commonHeroProps: RegistryFor<Hero4Props, 'monthlyRetainer'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const commonCtaProps: RegistryFor<CtaProps, 'monthlyRetainer'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Proposal'
}
