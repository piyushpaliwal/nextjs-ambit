import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import { HeroInnerPages } from 'components/blocks/hero'
import { ServicesCallOut2 } from 'components/blocks/services'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { ctaProps, headerProps, heroProps, ourPartnerProps, serviceProps } from 'data/monthly-retainer-service'
import type { NextPage } from 'next'

const MonthlyRetainer: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />

      <main className="content-wrapper">
        <HeroInnerPages {...heroProps} />
        <ServiceCallOut {...serviceProps} />
        <ServicesCallOut2 {...ourPartnerProps} bgColor="bg-gray" />
        <Cta {...ctaProps} />
      </main>
      <Footer />
    </>
  )
}

export default MonthlyRetainer
