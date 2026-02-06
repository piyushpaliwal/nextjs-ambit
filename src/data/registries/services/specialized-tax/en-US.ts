import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type SpecializedTaxData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'specializedTax'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Specialized Tax', href: 'services/specialized-tax', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'specializedTax'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const ctaProps: RegistryFor<CtaProps, 'specializedTax'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Assessment'
}

const taxServiceSet: RegistryFor<AmbitService, 'specializedTax'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'LightBulb',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'Medal',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'Earth',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'Puzzle',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'services.item5.title',
    iconConfig: {
      icon: 'Shield',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'specializedTax'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: taxServiceSet
}

export const usSpecializedTaxData: SpecializedTaxData = definePageData<SpecializedTaxData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  ctaProps: ctaProps as unknown as CtaProps
})

export default usSpecializedTaxData
