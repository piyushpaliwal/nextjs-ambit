import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import { ServiceWithList } from 'components/blocks/services'
import Cta from 'components/common/cta'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { BusinessLifecycleAdvisoryData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: BusinessLifecycleAdvisoryData
}

export const getStaticProps = getI18nStaticProps('services/business-lifecycle-advisory', [
  'common',
  'footer',
  'businessLifecycleAdvisory'
])

const BusinessLifecycleAdvisory: NextPage<Props> = ({ rawData }) => {
  const { headerProps, heroProps, serviceListProps, ctaProps } = useTransformedData(
    rawData,
    'businessLifecycleAdvisory'
  )

  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}
        {serviceListProps && <ServiceWithList {...serviceListProps} canHover hasEvenColumns />}
        {ctaProps && <Cta {...ctaProps} bgColor="bg-soft-primary" />}
      </main>
      <Footer />
    </>
  )
}

export default BusinessLifecycleAdvisory
