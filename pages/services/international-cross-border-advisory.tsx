import { Footer } from 'components/blocks/footer'
import Header from 'components/blocks/header/Header'
import { HeroInnerPages } from 'components/blocks/hero'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import Cta from 'components/common/cta'
import { ctaProps, headerProps, heroProps, serviceProps } from 'data/international-cross-border-advisory'
import type { NextPage } from 'next'

const InternationalCrossBorderAdvisory: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />
      <main className="content-wrapper">
        <HeroInnerPages {...heroProps} />
        <ServiceCallOut {...serviceProps} />
        <Cta {...ctaProps} bgColor="bg-soft-primary" />
      </main>
      <Footer />
    </>
  )
}

export default InternationalCrossBorderAdvisory
