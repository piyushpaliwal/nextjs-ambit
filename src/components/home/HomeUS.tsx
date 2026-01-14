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
import { HeroProps } from 'components/blocks/hero/Hero'
import { approachUS } from 'data/approachUS'
import { ProcessProps } from 'components/blocks/process/Process'
import Header, { HeaderProps } from 'components/blocks/header/Header'

const heroProps: HeroProps = {
  subtitle: 'Your One-Stop Solution for All Accounting Needs!',
  description:
    'Ambit is a US-focused tax, accounting, and business advisory firm supporting domestic and international businesses across the full business lifecycle. \n With 100+ professionals and 350+ active clients, we advise founders, owner-managed businesses, professional firms, start-ups, and growing companies on business formation, accounting, taxation, payroll, governance, outsourcing, and long-term structuring.'
}

const processProps: ProcessProps = {
  title: 'Our Approach',
  subtitle: 'Structured and disciplined framework for every engagement',
  processSectionList: [
    {
      title: 'Our Approach',
      subtitle: 'Our approach ensures governance, accountability, and clarity',
      processList: approachUS
    }
  ]
}

const headerProps: HeaderProps = {
  title: 'Online Bookkeeping and Accounting Services | Ambit Tax & Accounting',
  description:
    'Let Ambit handle all of your online bookkeeping and accounting needs including weekly bookkeeping, month-end financials, tax prep, and more.',
  language: true
}

const HomeUS: NextPage = () => {
  return (
    <Fragment>
      <Header {...headerProps} />
      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero {...heroProps} />
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
            <Process {...processProps} />
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

export default HomeUS
