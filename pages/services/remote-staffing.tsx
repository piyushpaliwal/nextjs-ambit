import { Footer } from 'components/blocks/footer'
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
  rawData: RemoteStaffingData
}

export const getStaticProps = getI18nStaticProps('services/remote-staffing', ['common', 'footer', 'remoteStaffing'])

const RemoteStaffingOutsourcing: NextPage<Props> = ({ rawData }) => {
  const {
    headerProps,
    heroProps,
    serviceProps,
    serviceListProps,
    governanceProps,
    whoThisProps,
    ctaProps,
    processProps
  } = useTransformedData(rawData, 'remoteStaffing')

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
      <Footer />
    </>
  )
}

export default RemoteStaffingOutsourcing
