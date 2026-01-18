import type { NextPage } from 'next'
import Footer from 'components/blocks/footer/Footer'
import Cta from 'components/common/cta'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import ServicesHero from 'components/blocks/services/ServicesHero'
import Header from 'components/blocks/header/Header'
import { ctaProps, headerProps, serviceCallOutProps, serviceHeroProps, whoWeServeProps } from 'data/formation-and-setup'

const FormationAndSetup: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero ========== */}
        <ServicesHero {...serviceHeroProps} />

        {/* ========== services ========== */}
        <ServiceCallOut {...serviceCallOutProps} />
        {/* ========== Trust box ========== */}

        <ServiceCallOut {...whoWeServeProps} bgColor="bg-gray" />

        {/* ========== cta ========== */}
        <Cta {...ctaProps} />
        {/* ========== FAQ ========== */}
      </main>
      {/* ========== footer section ========== */}
      <Footer />
    </>
  )
}

export default FormationAndSetup
