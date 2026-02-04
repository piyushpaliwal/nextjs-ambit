import { Footer } from 'components/blocks/footer'
import type { FooterProps } from 'components/blocks/footer/Footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import { ServiceWithList } from 'components/blocks/services'
import Cta from 'components/common/cta'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { BusinessLifecycleAdvisoryData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: BusinessLifecycleAdvisoryData & { footerData: FooterProps }
}

export const getStaticProps = getI18nStaticProps('services/business-lifecycle-advisory', ['businessLifecycleAdvisory'])

const BusinessLifecycleAdvisory: NextPage<Props> = ({ rawData }) => {
  const { footerData, ...pageData } = rawData

  const { headerProps, heroProps, serviceListProps, ctaProps } = useTransformedData(
    pageData,
    'businessLifecycleAdvisory'
  )
  const footerProps = useTransformedData(footerData, 'footer')

  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}
        {serviceListProps && <ServiceWithList {...serviceListProps} canHover hasEvenColumns />}
        {ctaProps && <Cta {...ctaProps} bgColor="bg-soft-primary" />}
      </main>
      <Footer {...footerProps} />
    </>
  )
}

export default BusinessLifecycleAdvisory
