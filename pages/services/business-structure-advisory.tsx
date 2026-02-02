import Header from 'components/blocks/header/Header'
import type { NextPage } from 'next'
import { Footer } from 'components/blocks/footer'
import { FAQ2 } from 'components/blocks/faq'
import Cta from 'components/common/cta'
import Hero4 from 'components/blocks/hero/Hero4'
import { ServiceWithList } from 'components/blocks/services'
import TrustBox from 'components/common/TrustBox'
import About17 from 'components/blocks/about/About17'
import type { BusinessStructureAdvisoryData } from 'types/pages'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import { useTransformedData } from 'hooks/useTransformedData'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: BusinessStructureAdvisoryData
}

// Step 1: Use the DRY utility
export const getStaticProps = getI18nStaticProps('services/business-structure-advisory', [
  'businessStructureAdvisory',
  'footer',
  'common'
])

const BusinessStructureAdvisory: NextPage<Props> = ({ rawData }) => {
  const data = useTransformedData(rawData, 'businessStructureAdvisory')

  return (
    <>
      <Header {...data.headerProps} />

      <main className="content-wrapper">
        {data.heroProps && <Hero4 {...data.heroProps} />}
        {/*what we do section*/}
        {data.whatWeDoProps && <TrustBox {...data.whatWeDoProps} />}
        {/*------ Structure we advice on ------*/}
        {data.structureAdviseProps && <ServiceWithList {...data.structureAdviseProps} />}
        {/*Ongoing structure review section- US/UK*/}
        {data.structureReviewProps && <About17 {...data.structureReviewProps} />}
        {/*who this is for-UK*/}
        {data.whoThisIsForProps && <ServiceCallOut {...data.whoThisIsForProps} />}
        {/*why ambit-UK*/}
        {data.whyAmbitProps && <ServiceCallOut {...data.whyAmbitProps} />}
        {/*------ CTA ------*/}
        {data.ctaProps && <Cta {...data.ctaProps} />}
        {/*------ FAQ ------*/}
        {data.faqProps && <FAQ2 {...data.faqProps} />}
      </main>
      {/*------ Footer ------*/}
      <Footer />
    </>
  )
}

export default BusinessStructureAdvisory
