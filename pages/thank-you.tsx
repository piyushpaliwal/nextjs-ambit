import { NextPage } from 'next'
import { Fragment } from 'react'
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar'
import { Footer } from 'components/blocks/footer'
import NextLink from 'components/reuseable/links/NextLink'

const ThankYouPage: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          button={<NextLink title="Contact" href="/contact" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Thank you!</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  Let us review your note and we will get back to you shortly.
                </p>

                <NextLink title="Go to Homepage" href="/" className="btn btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  )
}

export default ThankYouPage
