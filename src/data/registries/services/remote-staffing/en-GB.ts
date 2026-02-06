import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { ProcessProps } from 'components/blocks/process/Process'
import type { ServiceWithListProps } from 'components/blocks/services'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type RemoteStaffingData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { breadcrumbs, commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

const breadcrumbUS: BreadcrumbItem[] = [
  ...breadcrumbs,
  { label: 'Remote Staffing', href: '/services/remote-staffing', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'remoteStaffing'> = {
  ...commonHeroProps,
  breadcrumbs: breadcrumbUS
}

// services props

const serviceProps: RegistryFor<ServiceWithListProps, 'home'> = {
  titleKey: 'services.title',
  servicePropertySetKey: [
    {
      id: 1,
      iconConfig: { icon: 'Laptop', folder: IconFolder.LINEAL },
      titleKey: 'services.serviceSet.item1.title',
      serviceSetKey: [
        'services.serviceSet.item1.serviceSet.item1',
        'services.serviceSet.item1.serviceSet.item2',
        'services.serviceSet.item1.serviceSet.item3',
        'services.serviceSet.item1.serviceSet.item4'
      ]
    },
    {
      id: 2,
      iconConfig: { icon: 'Puzzle', folder: IconFolder.LINEAL },
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
      iconConfig: { icon: 'LinkIcon', folder: IconFolder.LINEAL },
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
      iconConfig: { icon: 'Balance', folder: IconFolder.LINEAL },
      titleKey: 'services.serviceSet.item4.title',
      serviceSetKey: [
        'services.serviceSet.item4.serviceSet.item1',
        'services.serviceSet.item4.serviceSet.item2',
        'services.serviceSet.item4.serviceSet.item3',
        'services.serviceSet.item4.serviceSet.item4'
      ]
    }
  ]
}
// Who this service is for props

const whoThisSet: RegistryFor<AmbitService, 'remoteStaffing'>[] = [
  {
    id: 1,
    titleKey: 'whoThis.item1.title',
    iconConfig: {
      icon: 'Handshake',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'whoThis.item2.title',
    iconConfig: {
      icon: 'Earth',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'whoThis.item3.title',
    iconConfig: {
      icon: 'Rocket',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'whoThis.item4.title',
    iconConfig: {
      icon: 'Calendar',
      folder: IconFolder.LINEAL
    }
  }
]

const whoThisProps: RegistryFor<ServiceCallOutProps, 'remoteStaffing'> = {
  titleKey: 'whoThis.title',
  ambitServiceSetKey: whoThisSet
}

// ------ How we Work ------

const processProps: RegistryFor<ProcessProps, 'remoteStaffing'> = {
  titleKey: 'process.title',
  processSectionListKey: [
    {
      key: 1,
      processListKey: [
        {
          id: 1,
          titleKey: 'process.processSectionList.item1.processList.item1.title',
          descriptionKey: 'process.processSectionList.item1.processList.item1.description',
          iconConfig: { icon: 'TeleMarketer', folder: IconFolder.LINEAL }
        },
        {
          id: 2,
          iconConfig: { icon: 'User', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item2.title',
          descriptionKey: 'process.processSectionList.item1.processList.item2.description'
        },
        {
          id: 3,
          iconConfig: { icon: 'Rocket', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item3.title',
          descriptionKey: 'process.processSectionList.item1.processList.item3.description'
        },
        {
          id: 4,
          iconConfig: { icon: 'SettingsThree', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item4.title',
          descriptionKey: 'process.processSectionList.item1.processList.item4.description'
        },
        {
          id: 5,
          iconConfig: { icon: 'Browser', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item5.title',
          descriptionKey: 'process.processSectionList.item1.processList.item5.description'
        }
      ]
    }
  ]
}

export const ukRemoteStaffingData: RemoteStaffingData = definePageData<RemoteStaffingData>({
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  serviceListProps: serviceProps as unknown as ServiceWithListProps,
  whoThisProps: whoThisProps as unknown as ServiceCallOutProps,
  processProps: processProps as unknown as ProcessProps,
  ctaProps: commonCtaProps as unknown as CtaProps
})

export default ukRemoteStaffingData
