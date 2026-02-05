import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import { IconFolder } from 'types/icon'
import { definePageData, type IndustriesData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'industries'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Industries', href: '#', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'industries'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

const industriesSet: RegistryFor<AmbitService, 'industries'>[] = [
  {
    id: 1,
    titleKey: 'industries.item1.title',
    iconConfig: {
      icon: 'ShoppingCart',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'industries.item2.title',
    iconConfig: {
      icon: 'Adjust',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'industries.item3.title',
    iconConfig: {
      icon: 'House',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'industries.item4.title',
    iconConfig: {
      icon: 'CoffeeCup',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'industries.item5.title',
    iconConfig: {
      icon: 'Laptop',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'industries.item6.title',
    iconConfig: {
      icon: 'Heart',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 7,
    titleKey: 'industries.item7.title',
    iconConfig: {
      icon: 'Truck',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 8,
    titleKey: 'industries.item8.title',
    iconConfig: {
      icon: 'BriefcaseTwo',
      folder: IconFolder.LINEAL
    }
  }
]

const industriesProps: RegistryFor<ServiceCallOutProps, 'industries'> = {
  titleKey: 'industries.title',
  descriptionKey: 'industries.subtitle',
  ambitServiceSetKey: industriesSet
}

export const gbIndustriesData: IndustriesData = definePageData<IndustriesData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  industriesProps: industriesProps as unknown as ServiceCallOutProps
})

export default gbIndustriesData
