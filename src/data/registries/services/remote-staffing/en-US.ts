import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type RemoteStaffingData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { breadcrumbs, commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

const breadcrumbUS: BreadcrumbItem[] = [
  ...breadcrumbs,
  { label: 'Remote Staffing & Outsourcing', href: '/services/remote-staffing', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'remoteStaffing'> = {
  ...commonHeroProps,
  breadcrumbs: breadcrumbUS
}

// services props

const formationServiceSet: RegistryFor<AmbitService, 'remoteStaffing'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'ClockThree',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'Puzzle',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'Calendar',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'remoteStaffing'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: formationServiceSet
}

// Who this service is for props

const governanceSet: RegistryFor<AmbitService, 'remoteStaffing'>[] = [
  {
    id: 1,
    titleKey: 'governance.item1.title',
    iconConfig: {
      icon: 'IdCard',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'governance.item2.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'governance.item3.title',
    iconConfig: {
      icon: 'ClockThree',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'governance.item4.title',
    iconConfig: {
      icon: 'Shield',
      folder: IconFolder.LINEAL
    }
  }
]

const governanceProps: RegistryFor<ServiceCallOutProps, 'remoteStaffing'> = {
  titleKey: 'governance.title',
  ambitServiceSetKey: governanceSet
}

export const usRemoteStaffingData: RemoteStaffingData = definePageData<RemoteStaffingData>({
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  governanceProps: governanceProps as unknown as ServiceCallOutProps,
  ctaProps: commonCtaProps as unknown as CtaProps
})

export default usRemoteStaffingData
