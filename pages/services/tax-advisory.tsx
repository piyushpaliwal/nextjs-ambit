import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { TaxAdvisoryData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: TaxAdvisoryData
}

export const getStaticProps = getI18nStaticProps('services/tax-advisory', ['taxAdvisory', 'footer', 'common'])

const TaxAdvisory: NextPage<Props> = ({ rawData }) => {
  const { headerProps, heroProps, serviceProps, ctaProps } = useTransformedData(rawData, 'taxAdvisory')
  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}
        {serviceProps && <ServiceCallOut {...serviceProps} canHover />}
        {ctaProps && <Cta {...ctaProps} bgColor="bg-soft-primary" />}
      </main>
      <Footer />
    </>
  )
}

export default TaxAdvisory
