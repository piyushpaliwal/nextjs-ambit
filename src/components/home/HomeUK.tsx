import { NextPage } from 'next'
import { Fragment } from 'react'
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero'
import { Softwares } from 'components/blocks/clients'
import { Footer } from 'components/blocks/footer'
import { Testimonial } from 'components/blocks/testimonial'
import { Services } from 'components/blocks/services'
import { Process } from 'components/blocks/process'
import Services1 from 'components/blocks/services/Services1'
import ContactPopup from 'components/common/ContactPopup'
import Header, { HeaderProps } from 'components/blocks/header/Header'

const headerProps: HeaderProps = {
  title: 'Online Bookkeeping and Accounting Services | Ambit Tax & Accounting',
  description:
    'Let Ambit handle all of your online bookkeeping and accounting needs including weekly bookkeeping, month-end financials, tax prep, and more.',
  language: true
}
const HomeUK: NextPage = () => {
  return (
    <Fragment>
      <Header {...headerProps} />
      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero />
        <ContactPopup />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            {/* ========== Services ========== */}
            <Services1 />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            {/* ========== How we work ========== */}
            <Services />
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            {/* software expertise */}
            <Softwares />
          </div>
        </section>
        {/* <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <Pricing />
          </div>
        </section> */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            {/* working process */}
            <Process />
          </div>
        </section>
        <section
          className="wrapper image-wrapper bg-image bg-overlay"
          style={{ backgroundImage: 'url(/img/photos/bg-testimonial.jpg)' }}
        >
          <div className="container py-14">
            {/* testimonials */}
            <Testimonial />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  )
}

export default HomeUK
