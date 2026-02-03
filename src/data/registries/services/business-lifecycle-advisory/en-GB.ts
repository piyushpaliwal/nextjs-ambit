import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { ServiceWithListProps } from 'components/blocks/services'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { type BusinessLifecycleAdvisoryData, definePageData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'businessLifecycleAdvisory'> = {
  titleKey: 'header.title'
}

export const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Business Lifecycle Advisory', href: '/services/business-lifecycle-advisory', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'businessLifecycleAdvisory'> = {
  titleKey: 'hero.title',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

// services props

const serviceProps: RegistryFor<ServiceWithListProps, 'businessLifecycleAdvisory'> = {
  titleKey: 'services.title',
  servicePropertySetKey: [
    {
      id: 1,
      iconConfig: { icon: 'Rocket', folder: IconFolder.LINEAL },
      titleKey: 'services.serviceSet.item1.title',
      serviceSetKey: [
        'services.serviceSet.item1.serviceSet.item1',
        'services.serviceSet.item1.serviceSet.item2',
        'services.serviceSet.item1.serviceSet.item3'
      ]
    },
    {
      id: 2,
      iconConfig: { icon: 'Profits', folder: IconFolder.LINEAL },
      titleKey: 'services.serviceSet.item2.title',
      serviceSetKey: [
        'services.serviceSet.item2.serviceSet.item1',
        'services.serviceSet.item2.serviceSet.item2',
        'services.serviceSet.item2.serviceSet.item3',
        'services.serviceSet.item2.serviceSet.item4'
      ]
    },
    {
      id: 3,
      iconConfig: { icon: 'AwardTwo', folder: IconFolder.LINEAL },
      titleKey: 'services.serviceSet.item3.title',
      serviceSetKey: [
        'services.serviceSet.item3.serviceSet.item1',
        'services.serviceSet.item3.serviceSet.item2',
        'services.serviceSet.item3.serviceSet.item3',
        'services.serviceSet.item3.serviceSet.item4'
      ]
    },
    {
      id: 4,
      iconConfig: { icon: 'Handshake', folder: IconFolder.LINEAL },
      titleKey: 'services.serviceSet.item4.title',
      serviceSetKey: [
        'services.serviceSet.item4.serviceSet.item1',
        'services.serviceSet.item4.serviceSet.item2',
        'services.serviceSet.item4.serviceSet.item3'
      ]
    }
  ]
}

export const ctaProps: RegistryFor<CtaProps, 'businessLifecycleAdvisory'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Consultation'
}

export const ukBusinessLifecycleAdvisoryData: BusinessLifecycleAdvisoryData =
  definePageData<BusinessLifecycleAdvisoryData>({
    headerProps: headerProps as unknown as HeaderProps,
    heroProps: heroProps as unknown as Hero4Props,
    serviceListProps: serviceProps as unknown as ServiceWithListProps,
    ctaProps: ctaProps as unknown as CtaProps
  })

export default ukBusinessLifecycleAdvisoryData
