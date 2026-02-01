import type { Faq2Props } from 'components/blocks/faq/FAQ2'
import type { RegistryFor } from 'types/transformer'
import type { ServiceListProperty, ServiceWithListProps } from 'components/blocks/services'
import loadIcon, { IconFolder } from 'utils/loadIcon'
import type { BusinessStructureAdvisoryData } from 'types/pages'
import { commonCtaProps, commonHeaderProps, commonHeroProps, commonFaqItems, commonWhatWeDoProps } from './shared'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { CtaProps } from 'components/common/cta'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { TrustBoxProps } from 'components/common/TrustBox'
import type { About17Props } from 'components/blocks/about/About17'
import { gbHeroTitle } from './components'
import type { ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'

// -------- hero section ---------

const heroProps: RegistryFor<Hero4Props, 'businessStructureAdvisory'> = {
  ...commonHeroProps,
  title: gbHeroTitle
}

// ---------- what we do ------------
const whatWeDoProps: RegistryFor<TrustBoxProps, 'businessStructureAdvisory'> = {
  ...commonWhatWeDoProps,
  bgColor: 'bg-light'
}

// who this is for

const whoThisIsForProps: RegistryFor<ServiceCallOutProps, 'businessStructureAdvisory'> = {
  titleKey: 'whoThisIsFor.title',
  canHover: true,
  bgColor: 'bg-soft-primary',
  serviceCardClassName: 'bg-soft-primary',
  ambitServiceSetKey: [
    {
      id: 1,
      titleKey: 'whoThisIsFor.list.item1.title',
      Icon: loadIcon('Rocket', IconFolder.LINEAL)
    },
    {
      id: 2,
      titleKey: 'whoThisIsFor.list.item2.title',
      Icon: loadIcon('Analytics', IconFolder.LINEAL)
    },
    {
      id: 3,
      titleKey: 'whoThisIsFor.list.item3.title',
      Icon: loadIcon('Earth', IconFolder.LINEAL)
    },
    {
      id: 4,
      titleKey: 'whoThisIsFor.list.item4.title',
      Icon: loadIcon('BriefcaseTwo', IconFolder.LINEAL)
    }
  ]
}

// ------ Why Ambit ------

const whyAmbitProps: RegistryFor<ServiceCallOutProps, 'businessStructureAdvisory'> = {
  titleKey: 'whyAmbit.title',
  canHover: true,
  ambitServiceSetKey: [
    {
      id: 1,
      titleKey: 'whyAmbit.list.item1.title',
      Icon: loadIcon('Balance', IconFolder.LINEAL)
    },
    {
      id: 2,
      titleKey: 'whyAmbit.list.item2.title',
      Icon: loadIcon('Invoice', IconFolder.LINEAL)
    },
    {
      id: 3,
      titleKey: 'whyAmbit.list.item3.title',
      Icon: loadIcon('User', IconFolder.LINEAL)
    },
    {
      id: 4,
      titleKey: 'whyAmbit.list.item4.title',
      Icon: loadIcon('Shield', IconFolder.LINEAL)
    },
    {
      id: 5,
      titleKey: 'whyAmbit.list.item5.title',
      Icon: loadIcon('Clipboard', IconFolder.LINEAL)
    }
  ]
}

// -------- Structure we Advise on ----------
const advisoryStructureSet: RegistryFor<ServiceListProperty, 'businessStructureAdvisory'>[] = [
  {
    id: 1,
    titleKey: 'structureAdvise.serviceProperty.item1.title',
    descriptionKey: 'structureAdvise.serviceProperty.item1.description',
    serviceSetKey: [
      'structureAdvise.serviceProperty.item1.serviceSet.item1',
      'structureAdvise.serviceProperty.item1.serviceSet.item2',
      'structureAdvise.serviceProperty.item1.serviceSet.item3'
    ],
    Icon: loadIcon('User', IconFolder.LINEAL)
  },
  {
    id: 2,
    titleKey: 'structureAdvise.serviceProperty.item2.title',
    descriptionKey: 'structureAdvise.serviceProperty.item2.description',
    serviceSetKey: [
      'structureAdvise.serviceProperty.item2.serviceSet.item1',
      'structureAdvise.serviceProperty.item2.serviceSet.item2',
      'structureAdvise.serviceProperty.item2.serviceSet.item3',
      'structureAdvise.serviceProperty.item2.serviceSet.item4'
    ],
    Icon: loadIcon('BriefcaseTwo', IconFolder.LINEAL)
  },
  {
    id: 3,
    titleKey: 'structureAdvise.serviceProperty.item3.title',
    descriptionKey: 'structureAdvise.serviceProperty.item3.description',
    serviceSetKey: [
      'structureAdvise.serviceProperty.item3.serviceSet.item1',
      'structureAdvise.serviceProperty.item3.serviceSet.item2',
      'structureAdvise.serviceProperty.item3.serviceSet.item3',
      'structureAdvise.serviceProperty.item3.serviceSet.item4'
    ],
    Icon: loadIcon('Shop', IconFolder.LINEAL)
  }
]

const structureAdviseProps: RegistryFor<ServiceWithListProps, 'businessStructureAdvisory'> = {
  titleKey: 'structureAdvise.title',
  servicePropertySetKey: advisoryStructureSet,
  hasEvenColumns: false
}

// ------ structure review ---------
const structureReviewProps: RegistryFor<About17Props, 'businessStructureAdvisory'> = {
  titleKey: 'structureReview.title',
  subtitleKey: 'structureReview.subtitle',
  descriptionKey: 'structureReview.description',
  aboutListKey: [
    ['structureReview.aboutList.list1.item1', 'structureReview.aboutList.list1.item2'],
    ['structureReview.aboutList.list2.item1', 'structureReview.aboutList.list2.item2']
  ]
}

// --------- FAQ ------------

const faqProps: RegistryFor<Faq2Props, 'businessStructureAdvisory'> = {
  faqSetKey: [
    ...commonFaqItems,
    {
      no: 'Six',
      expand: false,
      headingKey: 'faq.faqSet.item6.heading',
      bodyKey: 'faq.faqSet.item6.body'
    },
    {
      no: 'Seven',
      expand: false,
      headingKey: 'faq.faqSet.item7.heading',
      bodyKey: 'faq.faqSet.item7.body'
    },
    {
      no: 'Eight',
      expand: false,
      headingKey: 'faq.faqSet.item8.heading',
      bodyKey: 'faq.faqSet.item8.body'
    }
  ]
}

// ------ CTA ------
const ctaProps: CtaProps = { ...commonCtaProps, bgColor: 'bg-gray' }

export const gbBusinessStructureAdvisoryRegistry: BusinessStructureAdvisoryData = {
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  whatWeDoProps: whatWeDoProps as unknown as TrustBoxProps,
  structureAdviseProps: structureAdviseProps as unknown as ServiceWithListProps,
  structureReviewProps: structureReviewProps as unknown as About17Props,
  whyAmbitProps: whyAmbitProps as unknown as ServiceCallOutProps,
  whoThisIsForProps: whoThisIsForProps as unknown as ServiceCallOutProps,
  faqProps: faqProps as unknown as Faq2Props,
  ctaProps: ctaProps as unknown as CtaProps
}
