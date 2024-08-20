import { Navbar } from 'components/blocks/navbar'
import FigureImage from 'components/reuseable/FigureImage'
import NextLink from 'components/reuseable/links/NextLink'
import Analytics from 'icons/lineal/Analytics'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import i1 from '../../public/img/photos/tax-service-banner.svg'
import i2 from '../../public/img/photos/income-tax-filing-deadlines.svg'
import i3 from '../../public/img/photos/form-1040.svg'
import i4 from '../../public/img/photos/sole-proprietors-and-c-corporations.svg'
import Footer from 'components/blocks/footer/Footer'
import { slideInDownAnimate } from 'utils/animation'
import Image from 'next/image'
import Check from 'icons/lineal/Check'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import TaxAccordin1 from 'components/common/TaxAccordin1'
import TaxAccordin2 from 'components/common/TaxAccordin2'

const TaxService: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Best USA-Based Accounting & Bookkeeping Services Provider</title>
        <meta
          name="description"
          content="The right tax services at crucial times for your businesses. Get tax prep, year-round advisory and your tax filing done on time with Ambit."
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
                <h1 className="display-2 mb-5 text-white" style={slideInDownAnimate('600ms')}>
                  Tax stress? Ambit saves money and sanity
                </h1>

                <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                  Maximize your business success and minimize your tax burden with Ambit's certified public accountants
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <span style={slideInDownAnimate('1200ms')}>
                    <NextLink title="Start Now" href="/contact" className="btn btn-lg btn-white rounded-pill me-2" />
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
        {/* ========== how it works ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row text-center mb-6">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="display-4 mb-3">How it works</h2>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center">
              <div className="col-md-4">
                <Analytics className="icon-svg-sm text-primary mb-4 w-100" />
                <h4 className="mb-1">Hassle-free Bookkeeping</h4>
                <p>
                  We track your cash flow and expenses to keep your books reconciled and tax-ready. We provide monthly
                  reports so you get an accurate view of your business tax preparedness.
                </p>
              </div>
              <div className="col-md-4">
                <Check className="icon-svg-sm text-primaryv mb-4 w-100" />
                <h4 className="mb-1">Year round tax support</h4>
                <p>
                  With experts in your corner, tax filing is simple. Our year-round tax support means you'll never have
                  to worry about missing a deadline again.
                </p>
              </div>
              <div className="col-md-4">
                <SmartphoneTwo className="icon-svg-sm text-primary mb-4 w-100" />
                <h4 className="mb-1">Your best return ever</h4>
                <p>
                  Our experts help you with the fine details that come from years of tax experience in your industry. No
                  matter your corporate structure, we will claim the right tax deductions to maximize your tax savings.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========== what you get with ambit ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i2} alt="Accurate books done quick" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">What you get with Ambit</h3>
                <TaxAccordin1 />
              </div>
            </div>
          </div>
        </section>
        {/* ========== cta ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row">
              <div className="col-md-9 col-lg-9 col-xl-12 mx-auto text-center">
                <h2 className="display-4 mb-3">Maximize your return with minimal effort</h2>
                <p className="lead fs-lg mb-6">
                  From deadlines to deductions, our tax specialists are well-versed in the tax requirements for every
                  business structure, industry, and location. We'll help you navigate tax season easily and
                  accurately.From deadlines to deductions, our tax specialists are well-versed in the tax requirements
                  for every business structure, industry, and location. We'll help you navigate tax season easily and
                  accurately.
                </p>
                <Link href="https://calendly.com/ambit-accounting/15min" passHref legacyBehavior>
                  <a target="_blank" className="btn btn-primary rounded mb-0 text-nowrap">
                    Book a Consultation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Form 1040 ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Need to file Form 1040?</h3>
                <p className="mb-6">We will take care of everything from your 1040 to your 1120.</p>
                <p className="mb-6">Read on for the information you need for a stress-free tax filing.</p>
                <Link
                  href={{
                    pathname: '/contact',
                    query: {
                      plan: 'Free Trial'
                    }
                  }}
                >
                  <span className="btn btn-primary rounded">Learn More</span>
                </Link>
              </div>
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i3} alt="Accurate books done quick" width={300} height={300} />
              </div>
            </div>
          </div>
        </section>
        {/* ========== tax filing ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i4} alt="Accurate books done quick" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Income Tax filing deadlines</h3>
                <p className="mb-6">
                  Don't wait until the last minute to start prepping your financials for tax filing. Consider this your
                  official filing cheatsheet.
                </p>
                <TaxAccordin2 />
              </div>
            </div>
          </div>
        </section>
        {/* ========== cta ========== */}
        <section className="wrapper bg-gray">
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

export default TaxService
