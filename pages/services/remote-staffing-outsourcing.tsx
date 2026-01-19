import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import { HeroInnerPages } from 'components/blocks/hero'
import { ServicesCallOut2 } from 'components/blocks/services'
import Cta from 'components/common/cta'
import {
  ctaProps,
  governanceProps,
  headerProps,
  heroProps,
  serviceProps
} from 'data/remote-staffing-outsourcing-service'
import type { NextPage } from 'next'

const RemoteStaffingOutsourcing: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        <HeroInnerPages {...heroProps} />
        <ServicesCallOut2 {...serviceProps} />
        <ServicesCallOut2 {...governanceProps} bgColor="bg-gray" />
        <Cta {...ctaProps} />
      </main>
      <Footer />
    </>
  )
}

export default RemoteStaffingOutsourcing
