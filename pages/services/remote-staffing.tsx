import { Footer } from 'components/blocks/footer'
import type { FooterProps } from 'components/blocks/footer/Footer'
import Header from 'components/blocks/header/Header'
import Hero4 from 'components/blocks/hero/Hero4'
import { Process } from 'components/blocks/process'
import { ServiceWithList } from 'components/blocks/services'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { useTransformedData } from 'hooks/useTransformedData'
import type { NextPage } from 'next'
import type { RemoteStaffingData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: RemoteStaffingData & { footerData: FooterProps }
}

export const getStaticProps = getI18nStaticProps('services/remote-staffing', ['remoteStaffing'])

const RemoteStaffingOutsourcing: NextPage<Props> = ({ rawData }) => {
  const { footerData, ...pageData } = rawData
  const footerProps = useTransformedData(footerData, 'footer')
  const {
    headerProps,
    heroProps,
    serviceProps,
    serviceListProps,
    governanceProps,
    whoThisProps,
    ctaProps,
    processProps
  } = useTransformedData(pageData, 'remoteStaffing')

  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        {heroProps && <Hero4 {...heroProps} />}
        {serviceProps && <ServiceCallOut {...serviceProps} canHover />}
        {serviceListProps && <ServiceWithList {...serviceListProps} canHover hasEvenColumns />}
        {governanceProps && <ServiceCallOut {...governanceProps} bgColor="bg-gray" canHover />}
        {whoThisProps && <ServiceCallOut {...whoThisProps} bgColor="bg-light" canHover />}
        {processProps && <Process {...processProps} bgColor="bg-gray" />}
        {ctaProps && <Cta {...ctaProps} bgColor="bg-soft-primary" />}
      </main>
      <Footer {...footerProps} />
    </>
  )
}

export default RemoteStaffingOutsourcing
