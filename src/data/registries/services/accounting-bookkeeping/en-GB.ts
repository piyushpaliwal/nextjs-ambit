import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { type AccountingBookkeepingExecutionData, definePageData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

// services props

const accountingServiceSet: RegistryFor<AmbitService, 'accountingBookkeeping'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'Calendar',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'CheckList',
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
      icon: 'Profits',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'services.item6.title',
    iconConfig: {
      icon: 'Files',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'accountingBookkeeping'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: accountingServiceSet
}

export const usAccountingBookkeepingExecutionData: AccountingBookkeepingExecutionData =
  definePageData<AccountingBookkeepingExecutionData>({
    headerProps: commonHeaderProps as unknown as HeaderProps,
    heroProps: commonHeroProps as unknown as Hero4Props,
    serviceProps: serviceProps as unknown as ServiceCallOutProps,
    ctaProps: commonCtaProps as unknown as CtaProps
  })

export default usAccountingBookkeepingExecutionData
