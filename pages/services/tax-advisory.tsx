import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import ServicesHero from 'components/blocks/services/ServicesHero'
import Cta from 'components/common/cta'
import { ctaProps, headerProps, serviceCallOutProps, servicesHeroProps } from 'data/tax-advisory-service'
import type { NextPage } from 'next'

const TaxAdvisory: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        <ServicesHero {...servicesHeroProps} />
        <ServiceCallOut {...serviceCallOutProps} />
        <Cta {...ctaProps} />
      </main>
      <Footer />
    </>
  )
}

export default TaxAdvisory
