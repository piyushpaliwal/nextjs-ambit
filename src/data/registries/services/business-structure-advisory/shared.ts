import type { Faq2Item, Faq2Props } from 'components/blocks/faq/FAQ2'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import type { TrustBoxProps } from 'components/common/TrustBox'
import type { RegistryFor } from 'types/transformer'

export const commonHeaderProps: RegistryFor<HeaderProps, 'businessStructureAdvisory'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Business Structure Advisory', href: '/services/business-structure-advisory', isActive: true }
]

export const commonHeroProps: RegistryFor<Hero4Props, 'businessStructureAdvisory'> = {
  subtitleKey: 'hero.subtitle',
  primaryHref: '/contact',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const commonCtaProps: RegistryFor<CtaProps, 'businessStructureAdvisory'> = {
  titleKey: 'cta.title',
  descriptionKey: 'cta.description',
  buttonTitle: 'Request a Assessment'
}

// ------ FAQ ------

export const commonFaqItems: RegistryFor<Faq2Item, 'businessStructureAdvisory'>[] = [
  {
    no: 'One',
    expand: false,
    headingKey: 'faq.faqSet.item1.heading',
    bodyKey: 'faq.faqSet.item1.body'
  },
  {
    no: 'Two',
    expand: false,
    headingKey: 'faq.faqSet.item2.heading',
    bodyKey: 'faq.faqSet.item2.body'
  },
  {
    no: 'Three',
    expand: false,
    headingKey: 'faq.faqSet.item3.heading',
    bodyKey: 'faq.faqSet.item3.body'
  },
  {
    no: 'Four',
    expand: false,
    headingKey: 'faq.faqSet.item4.heading',
    bodyKey: 'faq.faqSet.item4.body'
  },
  {
    no: 'Five',
    expand: false,
    headingKey: 'faq.faqSet.item5.heading',
    bodyKey: 'faq.faqSet.item5.body'
  }
]

export const commonFaqProps: RegistryFor<Faq2Props, 'businessStructureAdvisory'> = {
  faqSetKey: commonFaqItems
}

// ------------ Common Props ---------------

export const commonWhatWeDoProps: RegistryFor<TrustBoxProps, 'businessStructureAdvisory'> = {
  titleKey: 'whatWeDo.title',
  descriptionKey: `whatWeDo.description`,
  featureImageSrc: '/img/photos/accounting.jpg',
  hasCta: false
}
