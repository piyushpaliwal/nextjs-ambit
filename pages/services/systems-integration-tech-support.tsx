import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import { HeroInnerPages } from 'components/blocks/hero'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { ctaProps, headerProps, heroProps, serviceProps } from 'data/systems-integration-tech-support-services'
import type { NextPage } from 'next'

const SystemsIntegrationTechSupport: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        <HeroInnerPages {...heroProps} />
        <ServiceCallOut {...serviceProps} />
        <Cta {...ctaProps} />
      </main>
      <Footer />
    </>
  )
}

export default SystemsIntegrationTechSupport
