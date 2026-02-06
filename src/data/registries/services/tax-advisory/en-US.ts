import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type TaxAdvisoryData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

// services props
// use US flag for MapPin
const accountingServiceSet: RegistryFor<AmbitService, 'taxAdvisory'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'MapPin',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'Invoice',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'BriefcaseTwo',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'PieChartTwo',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'services.item5.title',
    iconConfig: {
      icon: 'Profits',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'services.item6.title',
    iconConfig: {
      icon: 'Email3',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'taxAdvisory'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: accountingServiceSet
}

export const usTaxAdvisoryData: TaxAdvisoryData = definePageData<TaxAdvisoryData>({
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: commonHeroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  ctaProps: commonCtaProps as unknown as CtaProps
})

export default usTaxAdvisoryData
