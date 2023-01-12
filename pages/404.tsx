import { NextPage } from 'next'
import { Fragment } from 'react'
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar'
import { Footer } from 'components/blocks/footer'
import FigureImage from 'components/reuseable/FigureImage'
import NextLink from 'components/reuseable/links/NextLink'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          stickyBox={false}
          logoAlt="logo-dark"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-light"
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

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <FigureImage
                  width={800}
                  height={316}
                  src="/img/illustrations/404@2x.png"
                  alt="404 Image"
                  className="mb-10"
                />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  The page you are looking for is not available or has been moved. Try a different page or go to
                  homepage with the button below.
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

export default NotFound
