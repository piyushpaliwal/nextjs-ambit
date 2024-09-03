import { Navbar } from 'components/blocks/navbar'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { slideInDownAnimate } from 'utils/animation'
import { Footer } from 'components/blocks/footer'
import i1 from '../public/img/photos/catch-up-bookkeeping-pricing.svg'
import i2 from '../public/img/photos/tax-preparation-pricing.svg'
import { Pricing2 } from 'components/blocks/pricing'
import FigureImage from 'components/reuseable/FigureImage'
import Accordion from 'components/reuseable/accordion'

export const faqList = [
  {
    no: 'One',
    expand: true,
    heading: 'How do I know which pricing plan is right for my business?',
    body: `After signing up, a member of our team will personally reach out to learn more about your business and provide a detailed walkthrough of our platform and service offerings.
    Our Core plan is tailored to small business owners who require professional bookkeeping services and typically have an existing CPA.
    Whatever your business needs may be, our team will work with you to discover the plan that best fits your requirements.`
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Can I change my plan anytime?',
    body: `Yes! Plan modifications take effect on the first of the following month. Check out our plan options here`
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Do you offer custom plans?',
    body: `We understand that every customer's situation is unique. If necessary, we can work with you to customize a plan to suit your specific needs.`
  }
]

const PricePage: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bookkeeping Pricing Packages & Plans | Ambit Tax & Accounting</title>
        <meta
          name="description"
          content="Ambit's financial solutions are built for your growing business. Discover the right finance, accounting, and tax services for your business."
        />
      </Head>
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo"
          navOtherClass="navbar-other ms-auto w-100 d-none d-lg-flex justify-content-end align-items-center gap-4"
          bgClass="bg-ambit bg-opacity-75"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min"
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
          <div className="container pt-18 pb-20">
            <div className="row gx-0 gy-12 align-items-center justify-content-center">
              <div className="flex col-md-10 offset-md-1 offset-lg-0 col-lg-8 content text-lg-start">
                <h1 className="display-3 mb-7 text-white text-center" style={slideInDownAnimate('600ms')}>
                  Ambit Pricing
                </h1>

                <p className="lead fs-lg lh-sm mb-12 pe-xl-10 text-center" style={slideInDownAnimate('900ms')}>
                  Discover transparent pricing for all your business needs. No hidden fees, no complicated contracts,
                  just straightforward pricing for everything you require.
                </p>

                <p className="fs-sm lh-sm mb-7 pe-xl-10 text-center" style={slideInDownAnimate('900ms')}>
                  Free up your time and grow your biz with Ambit's trusted accounting, bookkeeping, and tax services.
                  Join hundreds of happy customers and get started today!"
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <Pricing2 />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h3 className="display-3 px-xxl-10">Add-ons that will go with any Ambit plans</h3>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 d-flex align-items-end justify-content-around">
              <div className="col-lg-5">
                <div className="px-md-15 px-lg-3">
                  <FigureImage
                    className="w-auto img-fluid"
                    src={i1}
                    alt="Catch-up Bookkeeping Pricing"
                    width={50}
                    height={50}
                  />
                  <h3 className="mb-3 mt-n10">Catch-up Bookkeeping</h3>
                  <p className="mb-3 font-weight-bold">
                    <span className="fs-lg text-pink">$995/year</span>
                  </p>
                  <p className="mb-3">
                    Behind on your bookkeeping? Not to worry, we can catch you up timely and accurately ensuring you are
                    tax ready with financial peace of mind. Whether a few months or a few years, we get you caught up.
                  </p>
                  <Link
                    href={{
                      pathname: '/contact',
                      query: {
                        plan: 'Catch-up Bookkeeping'
                      }
                    }}
                  >
                    <span className={`btn btn-primary rounded`}>Learn More</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="px-md-15 px-lg-3">
                  <FigureImage
                    className="w-auto mb-3 img-fluid"
                    src={i2}
                    alt="Catch-up Bookkeeping Pricing"
                    width={50}
                    height={50}
                  />
                  <h3 className="mb-3 mt-n11">Tax Preparation</h3>
                  <p className="mb-3">
                    <span className="badge badge-lg bg-pink rounded-pill">Free Consultation</span>
                  </p>
                  <p className="mb-3">
                    Simplify tax season with our expert team and streamlined processes.No matter your software, we
                    guarantee efficient and thorough tax return processing.Focus on growing your business and let us
                    handle the rest. Contact us today!
                  </p>
                  <Link
                    href={{
                      pathname: '/contact',
                      query: {
                        plan: 'Tax Preparation'
                      }
                    }}
                  >
                    <span className={`btn btn-primary rounded`}>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row">
              <div className="col-lg-11 col-xxl-10 mx-auto text-center">
                <h3 className="display-4 mb-10 px-lg-12 px-xl-10 px-xxl-15">Frequently Asked Questions</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="accordion-wrapper" id="accordion">
                  {faqList.map((item) => (
                    <Accordion key={item.no} {...item} />
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
                <h2 className="display-4 mb-3">Bookkeeping just got more affordable</h2>
                <p className="lead fs-lg mb-6">Still waiting on a callback from your accountant?</p>
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

export default PricePage
