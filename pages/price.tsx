import { Navbar } from 'components/blocks/navbar'
import NextLink from 'components/reuseable/links/NextLink'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { slideInDownAnimate } from 'utils/animation'
import { Footer } from 'components/blocks/footer'
import i1 from '../public/img/photos/financial-reporting-service-banner.svg'
import { Pricing2 } from 'components/blocks/pricing'

const PricePage: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Best USA-Based Accounting & Bookkeeping Services Provider</title>
        <meta
          name="description"
          content="Ambit provides professional bookkeeping and accounting services to businesses of all sizes. From data entry to full financial management, we'll take care of everything so you can focus on what you're good at - running your business!"
        />
      </Head>
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
      </main>
      {/* ========== footer section ========== */}
      <Footer />
    </>
  )
}

export default PricePage
