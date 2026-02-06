import type { NextPage } from 'next'
import Footer, { type FooterProps } from 'components/blocks/footer/Footer'
import Cta from 'components/common/cta'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import type { FormationSetupData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'
import { useTransformedData } from 'hooks/useTransformedData'

interface Props {
  rawData: FormationSetupData & { footerData: FooterProps }
}

export const getStaticProps = getI18nStaticProps('services/formation-setup', ['formationAndSetup'])

const FormationAndSetup: NextPage<Props> = ({ rawData }) => {
  const { footerData, ...pageData } = rawData
  const { headerProps, heroProps, serviceProps, whoThisIsForProps, ctaProps } = useTransformedData(
    pageData,
    'formationAndSetup'
  )
  const footerProps = useTransformedData(footerData, 'footer')
  return (
    <>
      <Header {...headerProps} />

      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}

        {serviceProps && <ServiceCallOut {...serviceProps} canHover />}

        {whoThisIsForProps && <ServiceCallOut {...whoThisIsForProps} bgColor="bg-gray" canHover />}

        {ctaProps && <Cta {...ctaProps} />}
      </main>

      <Footer {...footerProps} />
    </>
  )
}

export default FormationAndSetup
