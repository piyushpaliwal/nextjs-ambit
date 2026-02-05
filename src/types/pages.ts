import type { About8Props } from 'components/blocks/about'
import type { About17Props } from 'components/blocks/about/About17'
import type { Faq2Props } from 'components/blocks/faq/FAQ2'
import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroProps } from 'components/blocks/hero/Hero'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { ProcessProps } from 'components/blocks/process/Process'
import type { ServiceWithListProps } from 'components/blocks/services'
import type { ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { Service11Props } from 'components/blocks/services/Services11'
import type { CtaProps } from 'components/common/cta'
import type { TrustBoxProps } from 'components/common/TrustBox'

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

export type BusinessStructureAdvisoryData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  whatWeDoProps?: TrustBoxProps
  structureAdviseProps?: ServiceWithListProps
  structureReviewProps?: About17Props
  whoThisIsForProps?: ServiceCallOutProps
  whyAmbitProps?: ServiceCallOutProps
  faqProps?: Faq2Props
  ctaProps?: CtaProps
}

export type FormationSetupData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  whoThisIsForProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type AccountingBookkeepingExecutionData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type TaxAdvisoryData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type SpecializedTaxData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type PayrollEmploymentTaxData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type MonthlyRetainerData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  whoThisIsForProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type RemoteStaffingData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  serviceListProps?: ServiceWithListProps
  governanceProps?: ServiceCallOutProps
  whoThisProps?: ServiceCallOutProps
  ctaProps?: CtaProps
  processProps?: ProcessProps
}

export type IntegrationData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type InternationalAdvisoryData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type BusinessLifecycleAdvisoryData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceListProps?: ServiceWithListProps
  ctaProps?: CtaProps
}

export type PayrollExecutionData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type ECommerceData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type ConstructionData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type HospitalityData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type RealEstateData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type HealthcareData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type ItProfessionalData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type LogisticsData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type StartupsData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  challengesProps?: ServiceCallOutProps
  serviceProps?: ServiceCallOutProps
  ctaProps?: CtaProps
}

export type IndustriesData = {
  headerProps: HeaderProps
  heroProps?: Hero4Props
  industriesProps?: ServiceCallOutProps
}

// A helper that "checks" the type but returns the value as-is
export const definePageData = <T>(data: T): T => data
