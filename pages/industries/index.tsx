import { Footer } from 'components/blocks/footer'
import type { FooterProps } from 'components/blocks/footer/Footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { IndustriesData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: IndustriesData & {
    footerData: FooterProps
  }
}

export const getStaticProps = getI18nStaticProps('industries/root', ['industries'])

const Industries: NextPage<Props> = ({ rawData }) => {
  const { footerData, ...pageData } = rawData
  const footerProps = useTransformedData(footerData, 'footer')
  const { headerProps, heroProps, industriesProps } = useTransformedData(pageData, 'industries')

  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}
        {industriesProps && <ServiceCallOut {...industriesProps} canHover />}
      </main>
      <Footer {...footerProps} />
    </>
  )
}

export default Industries
