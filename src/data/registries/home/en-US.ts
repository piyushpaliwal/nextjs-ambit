import type { ProcessProps } from 'components/blocks/process/Process'
import type { About8Props } from 'components/blocks/about'
import type { ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { Faq2Props } from 'components/blocks/faq/FAQ2'
import type { Service11Props } from 'components/blocks/services/Services11'
import type { RegistryFor } from 'types/transformer'
import type { ServiceWithListProps } from 'components/blocks/services'
import { definePageData, type HomePageData } from 'types/pages'
import { IconFolder } from 'types/icon'
import {
  commonCoreServiceProps,
  commonFaqProps,
  commonGovernanceProps,
  commonProcessProps,
  commonWhyStayWithUsProps,
  commonWhyUsProps,
  ctaProps,
  headerProps,
  heroProps,
  supportProps
} from './shared'
import type { HeroProps } from 'components/blocks/hero/Hero'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { CtaProps } from 'components/common/cta'

// ------ Why Ambit ------

const whyUsProps: RegistryFor<ServiceCallOutProps, 'home'> = {
  ...commonWhyUsProps,
  ambitServiceSetKey: [
    {
      id: 1,
      titleKey: 'whyUs.ambitServiceSet.id1.title',
      iconConfig: { icon: 'Balance', folder: IconFolder.LINEAL }
    },
    {
      id: 2,
      titleKey: 'whyUs.ambitServiceSet.id2.title',
      iconConfig: { icon: 'User', folder: IconFolder.LINEAL }
    },
    {
      id: 3,
      titleKey: 'whyUs.ambitServiceSet.id3.title',
      iconConfig: { icon: 'Invoice', folder: IconFolder.LINEAL }
    },
    {
      id: 4,
      titleKey: 'whyUs.ambitServiceSet.id4.title',
      iconConfig: { icon: 'BriefcaseTwo', folder: IconFolder.LINEAL }
    },
    {
      id: 5,
      titleKey: 'whyUs.ambitServiceSet.id5.title',
      iconConfig: { icon: 'Clipboard', folder: IconFolder.LINEAL }
    },
    {
      id: 6,
      titleKey: 'whyUs.ambitServiceSet.id6.title',
      iconConfig: { icon: 'Handshake', folder: IconFolder.LINEAL }
    }
  ]
}

// ------ Our Core Services ------
const coreServiceProps: RegistryFor<Service11Props, 'home'> = {
  ...commonCoreServiceProps,
  serviceSetKey: [
    {
      id: 1,
      iconConfig: { icon: 'Workflow', folder: IconFolder.LINEAL },
      titleKey: 'coreServices.serviceSet.id1.title'
    },
    {
      id: 2,
      iconConfig: { icon: 'Calculator', folder: IconFolder.LINEAL },
      titleKey: 'coreServices.serviceSet.id2.title'
    },
    {
      id: 3,
      iconConfig: { icon: 'Invoice', folder: IconFolder.LINEAL },
      titleKey: 'coreServices.serviceSet.id3.title'
    },
    {
      id: 4,
      iconConfig: { icon: 'Coin', folder: IconFolder.LINEAL },
      titleKey: 'coreServices.serviceSet.id4.title'
    },
    {
      id: 5,
      iconConfig: { icon: 'Calendar', folder: IconFolder.LINEAL },
      titleKey: 'coreServices.serviceSet.id5.title'
    },
    {
      id: 6,
      iconConfig: { icon: 'Earth', folder: IconFolder.LINEAL },
      titleKey: 'coreServices.serviceSet.id6.title'
    }
  ]
}

// ------ How we Work ------

const processProps: RegistryFor<ProcessProps, 'home'> = {
  ...commonProcessProps,
  processSectionListKey: [
    {
      key: 1,
      subtitleKey: 'process.processSectionList.item1.subtitle',
      processListKey: [
        {
          id: 1,
          titleKey: 'process.processSectionList.item1.processList.item1.title',
          descriptionKey: 'process.processSectionList.item1.processList.item1.description',
          iconConfig: { icon: 'TeleMarketer', folder: IconFolder.LINEAL }
        },
        {
          id: 2,
          iconConfig: { icon: 'Rocket', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item2.title',
          descriptionKey: 'process.processSectionList.item1.processList.item2.description'
        },
        {
          id: 3,
          iconConfig: { icon: 'Show', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item3.title',
          descriptionKey: 'process.processSectionList.item1.processList.item3.description'
        },
        {
          id: 4,
          iconConfig: { icon: 'PriceTag', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item4.title',
          descriptionKey: 'process.processSectionList.item1.processList.item4.description'
        },
        {
          id: 5,
          iconConfig: { icon: 'SettingsThree', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item5.title',
          descriptionKey: 'process.processSectionList.item1.processList.item5.description'
        },
        {
          id: 6,
          iconConfig: { icon: 'Browser', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item6.title',
          descriptionKey: 'process.processSectionList.item1.processList.item6.description'
        },
        {
          id: 7,
          iconConfig: { icon: 'LightBulb', folder: IconFolder.LINEAL },
          titleKey: 'process.processSectionList.item1.processList.item7.title',
          descriptionKey: 'process.processSectionList.item1.processList.item7.description'
        }
      ]
    }
  ]
}

// ------ Industries we serve ------

const industriesProps: RegistryFor<Service11Props, 'home'> = {
  titleKey: 'industries.title',
  descriptionKey: 'industries.description',
  ctaHref: '/industries/ecommerce',
  ctaTextKey: 'industries.ctaText',
  serviceSetKey: [
    {
      id: 1,
      iconConfig: { icon: 'ShoppingCart', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item1.title'
    },
    {
      id: 2,
      iconConfig: { icon: 'Adjust', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item2.title'
    },
    {
      id: 3,
      iconConfig: { icon: 'CoffeeCup', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item3.title'
    },
    {
      id: 4,
      iconConfig: { icon: 'House', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item4.title'
    },
    {
      id: 5,
      iconConfig: { icon: 'Laptop', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item5.title'
    },
    {
      id: 6,
      iconConfig: { icon: 'Heart', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item6.title'
    },
    {
      id: 7,
      iconConfig: { icon: 'Truck', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item7.title'
    },
    {
      id: 8,
      iconConfig: { icon: 'Rocket', folder: IconFolder.LINEAL },
      titleKey: 'industries.serviceSet.item8.title'
    }
  ]
}

// ------ Governance, Data Security and Compliance ------

const governanceProps: RegistryFor<ServiceWithListProps, 'home'> = {
  ...commonGovernanceProps,
  servicePropertySetKey: [
    {
      id: 1,
      iconConfig: { icon: 'CheckList', folder: IconFolder.LINEAL },
      titleKey: 'governance.governanceSet.item1.title',
      serviceSetKey: [
        'governance.governanceSet.item1.serviceSet.item1',
        'governance.governanceSet.item1.serviceSet.item2',
        'governance.governanceSet.item1.serviceSet.item3'
      ]
    },
    {
      id: 2,
      iconConfig: { icon: 'Lock', folder: IconFolder.LINEAL },
      titleKey: 'governance.governanceSet.item2.title',
      serviceSetKey: [
        'governance.governanceSet.item2.serviceSet.item1',
        'governance.governanceSet.item2.serviceSet.item2',
        'governance.governanceSet.item2.serviceSet.item3'
      ]
    },
    {
      id: 3,
      iconConfig: { icon: 'Balance', folder: IconFolder.LINEAL },
      titleKey: 'governance.governanceSet.item3.title',
      serviceSetKey: [
        'governance.governanceSet.item3.serviceSet.item1',
        'governance.governanceSet.item3.serviceSet.item2',
        'governance.governanceSet.item3.serviceSet.item3',
        'governance.governanceSet.item3.serviceSet.item4'
      ]
    }
  ]
}

// ------ Why Long-term clients stay with ambit ------

const whyStayWithUsProps: RegistryFor<ServiceCallOutProps, 'home'> = {
  ...commonWhyStayWithUsProps,
  serviceClassName: 'gap-4',
  ambitServiceSetKey: [
    {
      id: 1,
      iconConfig: { icon: 'Puzzle', folder: IconFolder.LINEAL },
      titleKey: 'whyStayWithUs.serviceSet.item1.title'
    },
    {
      id: 2,
      titleKey: 'whyStayWithUs.serviceSet.item2.title',
      iconConfig: { icon: 'Medal', folder: IconFolder.LINEAL }
    },
    {
      id: 3,
      titleKey: 'whyStayWithUs.serviceSet.item3.title',
      iconConfig: { icon: 'Shield', folder: IconFolder.LINEAL }
    },
    {
      id: 4,
      titleKey: 'whyStayWithUs.serviceSet.item4.title',
      iconConfig: { icon: 'Profits', folder: IconFolder.LINEAL }
    },
    {
      id: 5,
      titleKey: 'whyStayWithUs.serviceSet.item5.title',
      iconConfig: { icon: 'CheckList', folder: IconFolder.LINEAL }
    }
  ]
}

// ------ CTA ------

const usHomeRegistry: HomePageData = definePageData<HomePageData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as HeroProps,
  supportProps: supportProps as unknown as About8Props,
  whyUsProps: whyUsProps as unknown as ServiceCallOutProps,
  coreServiceProps: coreServiceProps as unknown as Service11Props,
  processProps: processProps as unknown as ProcessProps,
  industriesProps: industriesProps as unknown as Service11Props,
  governanceProps: governanceProps as unknown as ServiceWithListProps,
  whyStayWithUsProps: whyStayWithUsProps as unknown as ServiceCallOutProps,
  faqProps: commonFaqProps as unknown as Faq2Props,
  ctaProps: ctaProps as unknown as CtaProps
})

export default usHomeRegistry
