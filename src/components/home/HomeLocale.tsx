import type { NextPage } from 'next'
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero'
import { Footer } from 'components/blocks/footer'
import { Process } from 'components/blocks/process'
import ContactPopup from 'components/common/ContactPopup'
import Header from 'components/blocks/header/Header'
import { About8 } from 'components/blocks/about'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import { FAQ2 } from 'components/blocks/faq'
import Cta from 'components/common/cta'
import Services11 from 'components/blocks/services/Services11'
import { ServiceWithList } from 'components/blocks/services'
import About9 from 'components/blocks/about/About9'
// ------ data ------
import type { HomePageData } from 'types/pages'
import { useTransformedData } from 'hooks/useTransformedData'
import type { FooterProps } from 'components/blocks/footer/Footer'

interface Props {
  rawData: HomePageData & { footerData: FooterProps }
}

const HomeLocale: NextPage<Props> = ({ rawData }) => {
  const { footerData, ...pageData } = rawData
  const footerProps = useTransformedData(footerData, 'footer')
  const data = useTransformedData(pageData, 'home')

  return (
    <>
      <Header {...data.headerProps} />
      <main className="content-wrapper">
        {data.heroProps && <Hero {...data.heroProps} />}
        <ContactPopup />
        {data.supportProps && <About8 {...data.supportProps} />}
        {data.whyUsProps && <ServiceCallOut {...data.whyUsProps} bgColor="bg-gray" />}
        {data.coreServiceProps && <Services11 {...data.coreServiceProps} />}
        {data.processProps && <Process {...data.processProps} />}
        {data.industriesProps && <Services11 {...data.industriesProps} reverse />}
        {data.governanceProps && <ServiceWithList {...data.governanceProps} />}
        {data.aboutUsProps && <About9 {...data.aboutUsProps} />}
        {data.whyStayWithUsProps && <ServiceCallOut {...data.whyStayWithUsProps} />}
        {data.faqProps && <FAQ2 {...data.faqProps} />}
        {data.ctaProps && <Cta {...data.ctaProps} bgColor="bg-soft-primary" />}
      </main>
      <Footer {...footerProps} />
    </>
  )
}

export default HomeLocale
