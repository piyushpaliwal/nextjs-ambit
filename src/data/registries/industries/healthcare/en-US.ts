import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type HealthcareData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'healthcare'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Industries', href: '#', isActive: true },
  { label: 'Healthcare & Medical Practices', href: 'industries/healthcare', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'healthcare'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const ctaProps: RegistryFor<CtaProps, 'healthcare'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Consultation'
}

// Challenge props
const challengeSet: RegistryFor<AmbitService, 'healthcare'>[] = [
  {
    id: 1,
    titleKey: 'challenges.item1.title',
    iconConfig: {
      icon: 'Money',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'challenges.item2.title',
    iconConfig: {
      icon: 'Balance',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'challenges.item3.title',
    iconConfig: {
      icon: 'Earth',
      folder: IconFolder.LINEAL
    }
  }
]

const challengesProps: RegistryFor<ServiceCallOutProps, 'healthcare'> = {
  titleKey: 'challenges.title',
  ambitServiceSetKey: challengeSet
}

// services props
const serviceSet: RegistryFor<AmbitService, 'healthcare'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'Analytics',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'Money',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'Balance',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'healthcare'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: serviceSet
}

export const usHealthcareData: HealthcareData = definePageData<HealthcareData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  challengesProps: challengesProps as unknown as ServiceCallOutProps,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  ctaProps: ctaProps as unknown as CtaProps
})

export default usHealthcareData
