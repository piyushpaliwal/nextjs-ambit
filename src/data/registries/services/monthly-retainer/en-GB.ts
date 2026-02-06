import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type MonthlyRetainerData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'
import { commonCtaProps, commonHeaderProps, commonHeroProps } from './shared'

// services props

const serviceSet: RegistryFor<AmbitService, 'monthlyRetainer'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'CheckList',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'Clipboard',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'Invoice',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'Coin',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'services.item5.title',
    iconConfig: {
      icon: 'Calculator',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'services.item6.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 7,
    titleKey: 'services.item7.title',
    iconConfig: {
      icon: 'BriefcaseTwo',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 8,
    titleKey: 'services.item8.title',
    iconConfig: {
      icon: 'Handshake',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'monthlyRetainer'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: serviceSet
}

// Who this service is for props

const clientSet: RegistryFor<AmbitService, 'monthlyRetainer'>[] = [
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
      icon: 'ClockThree',
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
  },
  {
    id: 4,
    titleKey: 'whoThis.item4.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'whoThis.item5.title',
    iconConfig: {
      icon: 'Rocket',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'whoThis.item6.title',
    iconConfig: {
      icon: 'Earth',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 7,
    titleKey: 'whoThis.item7.title',
    iconConfig: {
      icon: 'Shop',
      folder: IconFolder.LINEAL
    }
  }
]

const whoWeServeProps: RegistryFor<ServiceCallOutProps, 'monthlyRetainer'> = {
  titleKey: 'whoThis.title',
  ambitServiceSetKey: clientSet
}

export const ukMonthlyRetainerData: MonthlyRetainerData = definePageData<MonthlyRetainerData>({
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: commonHeroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  whoThisIsForProps: whoWeServeProps as unknown as ServiceCallOutProps,
  ctaProps: commonCtaProps as unknown as CtaProps
})

export default ukMonthlyRetainerData
