import type { About8Props } from 'components/blocks/about'
import type { Faq2Props } from 'components/blocks/faq/FAQ2'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroProps } from 'components/blocks/hero/Hero'
import type { ProcessProps } from 'components/blocks/process/Process'
import type { ServiceWithListProps } from 'components/blocks/services'
import type { ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { Service11Props } from 'components/blocks/services/Services11'
import type { CtaProps } from 'components/common/cta'

export type HomePageData = {
  headerProps: HeaderProps
  heroProps?: HeroProps
  supportProps?: About8Props
  whyUsProps?: ServiceCallOutProps
  coreServiceProps?: Service11Props
  processProps?: ProcessProps
  industriesProps?: Service11Props
  governanceProps?: ServiceWithListProps
  aboutUsProps?: About8Props
  whyStayWithUsProps?: ServiceCallOutProps
  faqProps?: Faq2Props
  ctaProps?: CtaProps
}
