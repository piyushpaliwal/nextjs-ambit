import type { ProcessProps } from 'components/blocks/process/Process'
import type { About8Props } from 'components/blocks/about'
import type { ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { Faq2Props } from 'components/blocks/faq/FAQ2'
import type { Service11Props } from 'components/blocks/services/Services11'
import type { RegistryFor } from 'types/transformer'
import type { ServiceWithListProps } from 'components/blocks/services'
import loadIcon, { IconFolder } from 'utils/loadIcon'
import type { HomePageData } from 'types/pages'
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
      Icon: loadIcon('Balance', IconFolder.LINEAL)
    },
    {
      id: 2,
      titleKey: 'whyUs.ambitServiceSet.id2.title',
      Icon: loadIcon('User', IconFolder.LINEAL)
    },
    {
      id: 3,
      titleKey: 'whyUs.ambitServiceSet.id3.title',
      Icon: loadIcon('Invoice', IconFolder.LINEAL)
    },
    {
      id: 4,
      titleKey: 'whyUs.ambitServiceSet.id4.title',
      Icon: loadIcon('BriefcaseTwo', IconFolder.LINEAL)
    },
    {
      id: 5,
      titleKey: 'whyUs.ambitServiceSet.id5.title',
      Icon: loadIcon('Clipboard', IconFolder.LINEAL)
    },
    {
      id: 6,
      titleKey: 'whyUs.ambitServiceSet.id6.title',
      Icon: loadIcon('Handshake', IconFolder.LINEAL)
    }
  ]
}

// ------ Our Core Services ------
const coreServiceProps: RegistryFor<Service11Props, 'home'> = {
  ...commonCoreServiceProps,
  serviceSetKey: [
    {
      id: 1,
      Icon: loadIcon('Workflow', IconFolder.LINEAL),
      titleKey: 'coreServices.serviceSet.id1.title'
    },
    {
      id: 2,
      Icon: loadIcon('Calculator', IconFolder.LINEAL),
      titleKey: 'coreServices.serviceSet.id2.title'
    },
    {
      id: 3,
      Icon: loadIcon('Invoice', IconFolder.LINEAL),
      titleKey: 'coreServices.serviceSet.id3.title'
    },
    {
      id: 4,
      Icon: loadIcon('Coin', IconFolder.LINEAL),
      titleKey: 'coreServices.serviceSet.id4.title'
    },
    {
      id: 5,
      Icon: loadIcon('Calendar', IconFolder.LINEAL),
      titleKey: 'coreServices.serviceSet.id5.title'
    },
    {
      id: 6,
      Icon: loadIcon('Earth', IconFolder.LINEAL),
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
          Icon: loadIcon('TeleMarketer', IconFolder.LINEAL)
        },
        {
          id: 2,
          Icon: loadIcon('Rocket', IconFolder.LINEAL),
          titleKey: 'process.processSectionList.item1.processList.item2.title',
          descriptionKey: 'process.processSectionList.item1.processList.item2.description'
        },
        {
          id: 3,
          Icon: loadIcon('Show', IconFolder.LINEAL),
          titleKey: 'process.processSectionList.item1.processList.item3.title',
          descriptionKey: 'process.processSectionList.item1.processList.item3.description'
        },
        {
          id: 4,
          Icon: loadIcon('PriceTag', IconFolder.LINEAL),
          titleKey: 'process.processSectionList.item1.processList.item4.title',
          descriptionKey: 'process.processSectionList.item1.processList.item4.description'
        },
        {
          id: 5,
          Icon: loadIcon('SettingsThree', IconFolder.LINEAL),
          titleKey: 'process.processSectionList.item1.processList.item5.title',
          descriptionKey: 'process.processSectionList.item1.processList.item5.description'
        },
        {
          id: 6,
          Icon: loadIcon('Browser', IconFolder.LINEAL),
          titleKey: 'process.processSectionList.item1.processList.item6.title',
          descriptionKey: 'process.processSectionList.item1.processList.item6.description'
        },
        {
          id: 7,
          Icon: loadIcon('LightBulb', IconFolder.LINEAL),
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
      Icon: loadIcon('ShoppingCart', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item1.title'
    },
    {
      id: 2,
      Icon: loadIcon('Adjust', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item2.title'
    },
    {
      id: 3,
      Icon: loadIcon('CoffeeCup', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item3.title'
    },
    {
      id: 4,
      Icon: loadIcon('House', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item4.title'
    },
    {
      id: 5,
      Icon: loadIcon('Laptop', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item5.title'
    },
    {
      id: 6,
      Icon: loadIcon('Heart', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item6.title'
    },
    {
      id: 7,
      Icon: loadIcon('Truck', IconFolder.LINEAL),
      titleKey: 'industries.serviceSet.item7.title'
    },
    {
      id: 8,
      Icon: loadIcon('Rocket', IconFolder.LINEAL),
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
      Icon: loadIcon('CheckList', IconFolder.LINEAL),
      titleKey: 'governance.governanceSet.item1.title',
      serviceSetKey: [
        'governance.governanceSet.item1.serviceSet.item1',
        'governance.governanceSet.item1.serviceSet.item2',
        'governance.governanceSet.item1.serviceSet.item3'
      ]
    },
    {
      id: 2,
      Icon: loadIcon('Lock', IconFolder.LINEAL),
      titleKey: 'governance.governanceSet.item2.title',
      serviceSetKey: [
        'governance.governanceSet.item2.serviceSet.item1',
        'governance.governanceSet.item2.serviceSet.item2',
        'governance.governanceSet.item2.serviceSet.item3'
      ]
    },
    {
      id: 3,
      Icon: loadIcon('Balance', IconFolder.LINEAL),
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
  ambitServiceSetKey: [
    {
      id: 1,
      titleKey: 'whyStayWithUs.serviceSet.item1.title',
      Icon: loadIcon('Puzzle', IconFolder.LINEAL)
    },
    {
      id: 2,
      titleKey: 'whyStayWithUs.serviceSet.item2.title',
      Icon: loadIcon('Medal', IconFolder.LINEAL)
    },
    {
      id: 3,
      titleKey: 'whyStayWithUs.serviceSet.item3.title',
      Icon: loadIcon('Shield', IconFolder.LINEAL)
    },
    {
      id: 4,
      titleKey: 'whyStayWithUs.serviceSet.item4.title',
      Icon: loadIcon('Profits', IconFolder.LINEAL)
    },
    {
      id: 5,
      titleKey: 'whyStayWithUs.serviceSet.item5.title',
      Icon: loadIcon('CheckList', IconFolder.LINEAL)
    }
  ]
}

// ------ CTA ------

export const usHomeRegistry: HomePageData = {
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
}
