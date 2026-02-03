import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type IntegrationData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

// services props
const serviceSet: RegistryFor<AmbitService, 'systemsIntegrationTechSupport'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'CloudComputing',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'ShoppingCart',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'Workflow',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'Server',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'services.item5.title',
    iconConfig: {
      icon: 'Puzzle',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'systemsIntegrationTechSupport'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: serviceSet
}

export const usIntegrationData: IntegrationData = definePageData<IntegrationData>({
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: commonHeroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  ctaProps: commonCtaProps as unknown as CtaProps
})

export default usIntegrationData
