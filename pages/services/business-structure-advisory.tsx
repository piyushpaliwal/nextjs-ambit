import Header from 'components/blocks/header/Header'
import type { GetStaticProps, NextPage } from 'next'
import { Footer } from 'components/blocks/footer'
import { FAQ2 } from 'components/blocks/faq'
import Cta from 'components/common/cta'
import Hero4 from 'components/blocks/hero/Hero4'
import { ServiceWithList } from 'components/blocks/services'
import TrustBox from 'components/common/TrustBox'
import About17 from 'components/blocks/about/About17'
import { usePageData } from 'hooks/usePageData'
import type { BusinessStructureAdvisoryData } from 'types/pages'
import { businessStructureAdvisoryRegistryMap } from 'data/registries/services/business-structure-advisory'
import type { I18nNamespaces } from '../../@types/i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LocaleEnum } from 'types/locale'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'

const BusinessStructureAdvisory: NextPage = () => {
  const data = usePageData<BusinessStructureAdvisoryData>(
    businessStructureAdvisoryRegistryMap,
    'businessStructureAdvisory'
  )

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const ns: (keyof I18nNamespaces)[] = ['businessStructureAdvisory', 'footer']
  const currentLocale = (locale as LocaleEnum) || LocaleEnum.Global
  const pageDataExist = businessStructureAdvisoryRegistryMap[currentLocale]

  if (!pageDataExist) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ns as unknown as 'common'[]))
    }
  }
}

export default BusinessStructureAdvisory
