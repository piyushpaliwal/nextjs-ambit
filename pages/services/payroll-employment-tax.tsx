import { Footer } from 'components/blocks/footer'
import type { FooterProps } from 'components/blocks/footer/Footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { PayrollEmploymentTaxData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: PayrollEmploymentTaxData & { footerData: FooterProps }
}

export const getStaticProps = getI18nStaticProps('services/payroll-employment-tax', ['payrollEmploymentTax'])

const PayrollEmploymentTaxPage: NextPage<Props> = ({ rawData }) => {
  const { footerData, ...pageData } = rawData
  const footerProps = useTransformedData(footerData, 'footer')
  const { headerProps, heroProps, serviceProps, ctaProps } = useTransformedData(pageData, 'payrollEmploymentTax')

  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}
        {serviceProps && <ServiceCallOut {...serviceProps} canHover />}
        {ctaProps && <Cta {...ctaProps} bgColor="bg-soft-primary" />}
      </main>
      <Footer {...footerProps} />
    </>
  )
}

export default PayrollEmploymentTaxPage
