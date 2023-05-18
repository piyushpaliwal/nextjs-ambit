import { NextPage } from 'next'
import { Fragment } from 'react'
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero'
import { Navbar } from 'components/blocks/navbar'
import { Softwares } from 'components/blocks/clients'
import { Footer } from 'components/blocks/footer'
import { Testimonial } from 'components/blocks/testimonial'
import { Services } from 'components/blocks/services'
import { Process } from 'components/blocks/process'
import Link from 'next/link'
import Services1 from 'components/blocks/services/Services1'
import Head from 'next/head'
// import { Link } from 'react-scroll'

const Index: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Bookkeeping and Accounting Services | Ambit Tax & Accounting</title>
        <meta
          name="description"
          content="Let Ambit handle all of your online bookkeeping and accounting needs including weekly bookkeeping, month-end financials, tax prep, and more."
        />
      </Head>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={
            <Link
              href={{
                pathname: '/contact',
                query: {
                  plan: 'Free Trial'
                }
              }}
              title="Free Trial"
            >
              <span className="btn btn-sm btn-primary rounded-pill">Free Trial</span>
            </Link>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            {/* software expertise */}
            <Softwares />
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
            {/* ========== Services ========== */}
            <Services1 />
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
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
          style={{ backgroundImage: 'url(/img/photos/bg3.jpg)' }}
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

export default Index
