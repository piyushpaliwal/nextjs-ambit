import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import { HeroInnerPages } from 'components/blocks/hero'
import { ServicesCallOut2 } from 'components/blocks/services'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { challengesProps, ctaProps, headerProps, heroProps, servicesProps } from 'data/industries/construction'
import type { NextPage } from 'next'

const Construction: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        <HeroInnerPages {...heroProps} />
        <ServiceCallOut {...challengesProps} />
        <ServicesCallOut2 {...servicesProps} bgColor="bg-gray" />
        <Cta {...ctaProps} />
      </main>
      <Footer />
    </>
  )
}

export default Construction
