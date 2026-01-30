import type { Faq2Props } from 'components/blocks/faq/FAQ2'
import type { RegistryFor } from 'types/transformer'
import type { ServiceListProperty, ServiceWithListProps } from 'components/blocks/services'
import loadIcon, { IconFolder } from 'utils/loadIcon'
import type { BusinessStructureAdvisoryData } from 'types/pages'
import { commonCtaProps, commonFaqProps, commonHeaderProps, commonHeroProps, commonWhatWeDoProps } from './shared'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { CtaProps } from 'components/common/cta'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { TrustBoxProps } from 'components/common/TrustBox'
import type { About17Props } from 'components/blocks/about/About17'
import { usHeroTitle } from './components'

// -------- hero section ---------

const heroProps: RegistryFor<Hero4Props, 'businessStructureAdvisory'> = {
  ...commonHeroProps,
  title: usHeroTitle
}

// ---------- what we do ------------
const whatWeDoProps: RegistryFor<TrustBoxProps, 'businessStructureAdvisory'> = {
  ...commonWhatWeDoProps,
  bgColor: 'bg-light'
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
  },
  {
    id: 4,
    titleKey: 'structureAdvise.serviceProperty.item4.title',
    descriptionKey: 'structureAdvise.serviceProperty.item4.description',
    serviceSetKey: [
      'structureAdvise.serviceProperty.item4.serviceSet.item1',
      'structureAdvise.serviceProperty.item4.serviceSet.item2',
      'structureAdvise.serviceProperty.item4.serviceSet.item3',
      'structureAdvise.serviceProperty.item4.serviceSet.item4'
    ],
    Icon: loadIcon('NetworkingTwo', IconFolder.LINEAL)
  }
]

const structureAdviseProps: RegistryFor<ServiceWithListProps, 'businessStructureAdvisory'> = {
  titleKey: 'structureAdvise.title',
  servicePropertySetKey: advisoryStructureSet,
  hasEvenColumns: true
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

// ------ CTA ------
const ctaProps: CtaProps = { ...commonCtaProps, bgColor: 'bg-gray' }

export const usBusinessStructureAdvisoryRegistry: BusinessStructureAdvisoryData = {
  headerProps: commonHeaderProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  whatWeDoProps: whatWeDoProps as unknown as TrustBoxProps,
  structureAdviseProps: structureAdviseProps as unknown as ServiceWithListProps,
  structureReviewProps: structureReviewProps as unknown as About17Props,
  faqProps: commonFaqProps as unknown as Faq2Props,
  ctaProps: ctaProps as unknown as CtaProps
}
