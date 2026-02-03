import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { InternationalAdvisoryData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: InternationalAdvisoryData
}

export const getStaticProps = getI18nStaticProps('services/international-advisory', [
  'common',
  'footer',
  'internationalAdvisory'
])
const InternationalCrossBorderAdvisory: NextPage<Props> = ({ rawData }) => {
  const { headerProps, heroProps, serviceProps, ctaProps } = useTransformedData(rawData, 'internationalAdvisory')
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

export default InternationalCrossBorderAdvisory
