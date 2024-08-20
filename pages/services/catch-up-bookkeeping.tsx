import { Navbar } from 'components/blocks/navbar'
import FigureImage from 'components/reuseable/FigureImage'
import NextLink from 'components/reuseable/links/NextLink'
import Analytics from 'icons/lineal/Analytics'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import i1 from '../../public/img/photos/catch-up-bookkeeping-banner.svg'
import i2 from '../../public/img/photos/accurate-books-done-quick.svg'
import i3 from '../../public/img/photos/one-tidy-year-end-financial-package.svg'
import Footer from 'components/blocks/footer/Footer'
import { slideInDownAnimate } from 'utils/animation'
import Image from 'next/image'
import Check from 'icons/lineal/Check'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import Shield from 'icons/lineal/Shield'
import AccordionList1 from 'components/common/AccordionList1'
import AccordionList2 from 'components/common/AccordionList2'

const CatchupBookkeeping: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catch Up Bookkeeping and Tax Services For Small Business | Ambit</title>
        <meta
          name="description"
          content="Our catch up bookkeeping service will bring your financial up to date, giving you peace of mind to make decisions based on real numbers."
        />
      </Head>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min?month=2024-08"
              title="Schedule a Meeting"
              className="btn btn-sm btn-primary rounded-pill"
            >
              Schedule a Meeting
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
          style={{ backgroundColor: '#131a40' }}
        >
          <div className="container pt-18 pb-16">
            <div className="row gx-0 gy-12 align-items-center">
              <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
                <h1 className="display-3 mb-5 text-white" style={slideInDownAnimate('600ms')}>
                  Don't let your finances play catch-up with you. Let Catch Up Bookkeeping keep them in line!
                </h1>

                <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                  Behind on your bookkeeping and feeling lost at sea? No worries, Ambit's here to steer your finances
                  back on course. We'll bring your financials up to date so you can set sail to a brighter future!
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <span style={slideInDownAnimate('1200ms')}>
                    <NextLink
                      title="Get Caught up now"
                      href="/contact"
                      className="btn btn-lg btn-white rounded-pill me-2"
                    />
                  </span>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="swiper-container shadow-lg">
                  <Image alt="Experts in your corner" className="rounded" src={i1} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== services ========== */}'
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            {/* <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="display-4 mb-3">How Ambit works</h2>
              </div>
            </div> */}
            <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center">
              <div className="col-md-3">
                <Analytics className="icon-svg-sm text-primary mb-4 w-100" />
                <h4 className="mb-1">Get organized with tidy tax-ready financial</h4>
                <p>
                  We provide a comprehensive financial package for each year of catch up, including every document you
                  need to get organized and ready to file.
                </p>
              </div>
              <div className="col-md-3">
                <Check className="icon-svg-sm text-primaryv mb-4 w-100" />
                <h4 className="mb-1">Quick turnaround times for overdue Bookkeeping</h4>
                <p>
                  Our team completes months or years of overdue bookkeeping quickly and efficiently, saving you time and
                  allowing you to focus on running your business.
                </p>
              </div>
              <div className="col-md-3">
                <SmartphoneTwo className="icon-svg-sm text-primary mb-4 w-100" />
                <h4 className="mb-1">Expert Bookkeepers at your service</h4>
                <p>
                  Our experienced bookkeepers are well-equipped to handle even the toughest of historical bookkeeping
                  tasks, ensuring your finances are accurate and up-to-date.
                </p>
              </div>
              <div className="col-md-3">
                <Shield className="icon-svg-sm text-primary mb-4 w-100" />
                <h4 className="mb-1">Financial relief made easy</h4>
                <p>
                  We provide the supporting documents needed to apply for Paycheck Protection or an SBA Disaster Loan
                  for any Catch Up Bookkeeping work we complete, giving you peace of mind during challenging times.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========== expert support ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i2} alt="Accurate books done quick" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Get your books back on-track (without the stress)</h3>
                <AccordionList1 />
              </div>
            </div>
          </div>
        </section>
        {/* ========== catch up bookkeeping - cta ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
                <h2 className="display-4 mb-3">The right team and expert bookkeeping for your business</h2>
                <p className="lead fs-lg mb-6">
                  No matter your business situation or how far behind you are, Ambit's Catch-Up Bookkeeping offers a
                  specialized team of experts to help you get caught up.
                </p>
                <Link href="https://calendly.com/ambit-accounting/15min" passHref legacyBehavior>
                  <a target="_blank" className="btn btn-primary rounded mb-0 text-nowrap">
                    Schedule a Consultation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ========== one package ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i3} alt="Accurate books done quick" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">All in one financial package</h3>
                <AccordionList2 />
              </div>
            </div>
          </div>
        </section>
        {/* ========== cta ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
                <h2 className="display-4 mb-3">
                  It takes longer to brush your teeth than it does to get set up with us for absolutely nothing. Yes,
                  $0!
                </h2>
                <p className="lead fs-lg mb-6">
                  Spend time doing what you love to do. Run your business. Go on a date. Get more sleep. Have some fun!
                  You deserve it.
                </p>
                <Link
                  href={{
                    pathname: '/contact',
                    query: {
                      plan: 'Free Trial'
                    }
                  }}
                >
                  <span className="btn btn-primary rounded">Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </>
  )
}

export default CatchupBookkeeping
