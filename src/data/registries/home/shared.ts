import type { About8Props } from 'components/blocks/about'
import type { Faq2Item, Faq2Props } from 'components/blocks/faq/FAQ2'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroProps } from 'components/blocks/hero/Hero'
import type { ProcessProps } from 'components/blocks/process/Process'
import type { ServiceWithListProps } from 'components/blocks/services'
import type { ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { Service11Props } from 'components/blocks/services/Services11'
import type { CtaProps } from 'components/common/cta'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'home'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

export const heroProps: RegistryFor<HeroProps, 'home'> = {
  subtitleKey: 'hero.subtitle',
  descriptionKey: 'hero.description'
}

export const ctaProps: RegistryFor<CtaProps, 'home'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Get Started'
}

// ------ FAQ ------

export const commonFaqItems: RegistryFor<Faq2Item, 'home'>[] = [
  {
    no: 'One',
    expand: false,
    headingKey: 'faq.faqSet.item1.heading',
    bodyKey: 'faq.faqSet.item1.body'
  },
  {
    no: 'Two',
    expand: false,
    headingKey: 'faq.faqSet.item2.heading',
    bodyKey: 'faq.faqSet.item2.body'
  },
  {
    no: 'Three',
    expand: false,
    headingKey: 'faq.faqSet.item3.heading',
    bodyKey: 'faq.faqSet.item3.body'
  },
  {
    no: 'Four',
    expand: false,
    headingKey: 'faq.faqSet.item4.heading',
    bodyKey: 'faq.faqSet.item4.body'
  },
  {
    no: 'Five',
    expand: false,
    headingKey: 'faq.faqSet.item5.heading',
    bodyKey: 'faq.faqSet.item5.body'
  },
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
  }
]

export const commonFaqProps: RegistryFor<Faq2Props, 'home'> = {
  faqSetKey: commonFaqItems
}

// ------ Who we Support ------
export const supportProps: RegistryFor<About8Props, 'home'> = {
  titleKey: 'support.title',
  subtitleKey: 'support.subtitle',
  aboutListKey: [
    ['support.aboutList.list1.item1', 'support.aboutList.list1.item2'],
    ['support.aboutList.list2.item1', 'support.aboutList.list2.item2']
  ],
  imgSrc: `/img/illustrations/i9.png`,
  imgSrcSet: [`/img/illustrations/i9@2x.png 2x`],
  imgAlt: 'Support Image'
}

// ------------ Common Props ---------------

export const commonWhyUsProps: RegistryFor<ServiceCallOutProps, 'home'> = {
  titleKey: 'whyUs.title',
  descriptionKey: 'whyUs.description',
  canHover: true
}

// ------ Our Core Services ------
export const commonCoreServiceProps: RegistryFor<Service11Props, 'home'> = {
  titleKey: 'coreServices.title',
  descriptionKey: 'coreServices.description',
  ctaHref: '/services/business-structure-advisory',
  ctaTextKey: 'coreServices.ctaText'
}

// ------ How we Work ------

export const commonProcessProps: RegistryFor<ProcessProps, 'home'> = {
  titleKey: 'process.title',
  subtitleKey: 'process.subtitle'
}

// ------ Governance, Data Security and Compliance ------

export const commonGovernanceProps: RegistryFor<ServiceWithListProps, 'home'> = {
  titleKey: 'governance.title'
}

// ------ Why Long-term clients stay with ambit ------

export const commonWhyStayWithUsProps: RegistryFor<ServiceCallOutProps, 'home'> = {
  titleKey: 'whyStayWithUs.title',
  descriptionKey: 'whyStayWithUs.description',
  canHover: true
}
