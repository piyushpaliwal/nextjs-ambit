import { Footer } from 'components/blocks/footer'
import { Navbar } from 'components/blocks/navbar'
import PageProgress from 'components/common/PageProgress'
import NextLink from 'components/reuseable/links/NextLink'
import Link from 'next/link'
import { FC, Fragment, ReactNode } from 'react'
// import { Link } from 'react-scroll'

type PageLayoutProps = {
  children: ReactNode
  backgroundUrl: string
  title: string
  subTitle?: string
}

const PageLayout: FC<PageLayoutProps> = ({ title, children, subTitle, backgroundUrl }) => {
  const getBackgroundUrl = (url: string): string => {
    return `url(${url})`
  }

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
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
      <main className="content-wrapper">
        {/* ========== page heading ========== */}
        {/* <section className="wrapper bg-gray"> */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: getBackgroundUrl(backgroundUrl) }}
        >
          <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-9 mx-auto">
                <h1 className="display-1 text-white mb-3">{title}</h1>
                {subTitle && <p className="lead px-xxl-10">{subTitle}</p>}
              </div>
            </div>
          </div>
        </section>

        {/* ========== main content ========= */}
        {children}
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  )
}
export default PageLayout
