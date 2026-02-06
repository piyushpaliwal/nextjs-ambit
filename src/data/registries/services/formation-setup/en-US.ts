import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type FormationSetupData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

// services props

const formationServiceSet: RegistryFor<AmbitService, 'formationAndSetup'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'Certificate',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'IdCard',
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
      icon: 'Invoice',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'services.item5.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'services.item6.title',
    iconConfig: {
      icon: 'SettingsThree',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 7,
    titleKey: 'services.item7.title',
    iconConfig: {
      icon: 'PieChartTwo',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 8,
    titleKey: 'services.item8.title',
    iconConfig: {
      icon: 'Shield',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'formationAndSetup'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: formationServiceSet
}

// Who this service is for props

const clientSet: RegistryFor<AmbitService, 'formationAndSetup'>[] = [
  {
    id: 1,
    titleKey: 'whoThis.item1.title',
    iconConfig: {
      icon: 'Rocket',
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
      icon: 'BriefcaseTwo',
      folder: IconFolder.LINEAL
    }
  }
]

const whoWeServeProps: RegistryFor<ServiceCallOutProps, 'formationAndSetup'> = {
  titleKey: 'whoThis.title',
  ambitServiceSetKey: clientSet
}

export const usFormationSetupData: FormationSetupData = definePageData<FormationSetupData>({
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: commonHeroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  whoThisIsForProps: whoWeServeProps as unknown as ServiceCallOutProps,
  ctaProps: commonCtaProps as unknown as CtaProps
})

export default usFormationSetupData
