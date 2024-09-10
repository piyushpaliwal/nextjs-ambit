import { Navbar } from 'components/blocks/navbar'
import FigureImage from 'components/reuseable/FigureImage'
import NextLink from 'components/reuseable/links/NextLink'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import i1 from '../../public/img/photos/financial-reporting-service-banner.svg'
import i2 from '../../public/img/photos/data-visualisation.svg'
import i3 from '../../public/img/photos/benefits-for-you.svg'
import i4 from '../../public/img/photos/three-way-forecasting.svg'
import i5 from '../../public/img/photos/seamless-integration.svg'
import i6 from '../../public/img/photos/software-integration.svg'
import Footer from 'components/blocks/footer/Footer'
import { slideInDownAnimate } from 'utils/animation'
import Image from 'next/image'
import FinancialReportingAccordin from 'components/common/FinancialReportingAccordin'
import FinancialReportingAccordin2 from 'components/common/FinancialReportingAccordin2'
import FinancialReportingAccordin1 from 'components/common/FinancialReportingAccordin1'
import FinancialReportingAccordin3 from 'components/common/FinancialReportingAccordin3'

const FinancialReporting: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Financial Reporting | All-in-One Reporting & Forecasting</title>
        <meta
          name="description"
          content="The comprehensive solution for all your reporting and cash flow forecasting needs. Fast, flexible, and visual insights for your businesses."
        />
      </Head>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-xl-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          social
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min"
              title="Schedule a Meeting"
              className="btn btn-sm btn-primary rounded-pill fs-sm px-2 py-1"
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
                  Reporting, Forecasting, and Consolidation, all in one place.
                </h1>

                <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                  Ambit is an all-in-one place for financial reporting, forecasting, and KPI tracking. Perfect for
                  presenting to the business, the bank, or the board.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <span style={slideInDownAnimate('1200ms')}>
                    <NextLink
                      title="Get a free demo"
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
        {/* ========== Data visualization ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i2} alt="Visualization" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Engaging Reports</h3>
                <FinancialReportingAccordin />
              </div>
            </div>
          </div>
        </section>
        {/* ========== forecasting ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i4} alt="Visualization" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Powerful Forecasts</h3>
                <FinancialReportingAccordin1 />
              </div>
            </div>
          </div>
        </section>
        {/* ========== cta ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
                <h2 className="display-4 mb-3">Move beyond Spreadsheets</h2>
                <p className="lead fs-lg mb-6">
                  Is your company growing? More complexity, more data, more questions to answer? Are you dependent on
                  spreadsheets, which have become too complex? Ambit combines all your data and gives you the right
                  numbers at the right time.
                </p>
                <Link href="https://calendly.com/ambit-accounting/15min" passHref legacyBehavior>
                  <a target="_blank" className="btn btn-primary rounded mb-0 text-nowrap">
                    Book a call
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ========== benefits ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i3} alt="Benefits" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Benefits for you</h3>
                <FinancialReportingAccordin2 />
              </div>
            </div>
          </div>
        </section>
        {/* ========== seamless integration ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5 order-lg-2">
                <FigureImage className="w-auto" src={i6} alt="Seamless Integration" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h2 className="fs-16 text-uppercase text-primary mb-3">Seamless Integration</h2>
                <h3 className="display-4 mb-5">We integrate with the best software</h3>
                <p>
                  Seamlessly Integrates with Leading Financial and Analytical Systems. Xero, Quickbooks, MYOB, Sage 50,
                  Google Analytics, Excel
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Why choose us ========== */}
        <section className="wrapper bg-light">
          <div className="container">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i5} alt="Visualization" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Why Choose Ambit's Financial Reporting</h3>
                <FinancialReportingAccordin3 />
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
                  Join hundreds of small business owners who trust Ambit with their Reporting
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
                  <span className="btn btn-primary rounded">Get a free demo</span>
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

export default FinancialReporting
