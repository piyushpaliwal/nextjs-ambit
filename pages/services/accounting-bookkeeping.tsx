import HeroInnerPages from 'components/blocks/hero/HeroInnerPages'
import { Navbar } from 'components/blocks/navbar'
import { Services } from 'components/blocks/services'
import FigureImage from 'components/reuseable/FigureImage'
import NextLink from 'components/reuseable/links/NextLink'
import Analytics from 'icons/lineal/Analytics'
import Savings from 'icons/lineal/Savings'
import Target from 'icons/lineal/Target'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import i1 from '../../public/img/photos/one-on-one-expert.svg'
import AccordionList from 'components/common/AccordionList'
import { condensedSoftwareList } from 'data/client'
import Footer from 'components/blocks/footer/Footer'

const BookkeepingPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ambit Tax & Bookkeeping | Accounting & Bookkeeping</title>
        <meta
          name="description"
          content="One team for all your accounting needs. Ambit handles your bookkeeping, taxes, forecasting and more. See why thousands of businesses trust Ambit."
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
        <HeroInnerPages />
        {/* ========== services ========== */}'
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <Services />
          </div>
        </section>
        {/* ========== catch up bookkeeping ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
                <h2 className="display-4 mb-3">Need catch up Bookkeeping?</h2>
                <p className="lead fs-lg mb-6">
                  No matter your business situation or how far behind you are, Ambit's Catch-Up Bookkeeping offers a
                  specialized team of experts to help you get caught up.
                </p>
                <NextLink
                  href="/services/catch-up-bookkeeping"
                  title="Learn More"
                  className="btn btn-primary rounded mb-0 text-nowrap"
                />
              </div>
            </div>
          </div>
        </section>
        {/* ========== why ambit ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="display-4">What you get with Ambit</h2>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-8 mt-9">
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <Target className="icon-svg-sm text-primary me-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">Monthly statements delivered on time</h4>
                    <p className="mb-1">Get on-time reports for your business each month</p>
                    <ul className="mb-0">
                      <li>Monthly balanace sheet</li>
                      <li>Monthly profit & loss statement</li>
                      <li>Easily access reports from our experts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <Analytics className="icon-svg-sm text-primary me-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">Data on your business financial health</h4>
                    <p className="mb-1">
                      We digitally reconcile your expenses each week and provide you with financial reports so you have
                      clear visibility of your business's financial health.
                    </p>
                    <ul className="mb-0">
                      <li>Monthly profit and revenue trend graphs</li>
                      <li>Top Expenses - an interactive dashboard</li>
                      <li>24/7 access to your financials</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <Savings className="icon-svg-sm text-primary me-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">All-in-one online bookkeeping and tax solution</h4>
                    <p className="mb-1">
                      Your dedicated team of expert bookkeepers, accountants, and CPA's provide year round planning and
                      tax consultation to all Ambit customers.
                    </p>
                    <ul className="mb-0">
                      <li>Tax Consulting and Advising</li>
                      <li>Filing State and Federal tax returns</li>
                      <li>Annual tax planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== expert support ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5">
                <FigureImage className="w-auto" src={i1} alt="Experts in your corner" width={700} height={700} />
              </div>
              <div className="col-lg-7">
                <h3 className="display-4 mb-7">Monthly Bookkeeping and unlimited expert support</h3>
                <AccordionList />
              </div>
            </div>
          </div>
        </section>
        {/* ========== software ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
              <div className="col-lg-4 mt-lg-2">
                <h2 className="fs-16 text-uppercase text-primary mb-3">Our Expertise</h2>
                <h3 className="display-3 mb-3 pe-xxl-5">We integrate with the best software</h3>
                <p className="lead fs-lg mb-0 pe-xxl-7">
                  We sync up with your other accounts to save time, improve accuracy, and keep your books up to date at
                  all times.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
                  {condensedSoftwareList.map((item) => (
                    <div className="col" key={item}>
                      <FigureImage
                        width={450}
                        height={301}
                        src={item}
                        className="px-0 px-md-0 px-xxl-2"
                        alt="software-icon"
                      />
                    </div>
                  ))}
                </div>
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
                  Join hundreds of small business owners who trust Ambit with their books
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
                  <span className="btn btn-primary rounded">Start Free Trial</span>
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

export default BookkeepingPage
