import type { FC, ReactNode } from 'react'
import NextLink from 'components/reuseable/links/NextLink'
import type { WithImg } from 'types/common'
import Breadcrumbs, { type BreadcrumbItem } from 'components/common/Breadcrumbs'

export type HeroProps = {
  title?: ReactNode
  subtitle?: string
  primaryBtnText?: string
  primaryHref?: string
  breadcrumbs?: BreadcrumbItem[]
} & Omit<WithImg, 'imgSrcSet'>

const Hero4: FC<HeroProps> = ({
  title = (
    <>
      Elevate your digital presence with <span className="text-primary">precision.</span>
    </>
  ),
  subtitle = 'We combine data-driven insights with world-class design to help your brand scale effectively in a competitive global market.',
  imgSrc = '/img/photos/about10.jpg',
  imgAlt = 'Hero Visual',
  primaryBtnText = 'Start Consultation',
  primaryHref = '/contact',
  breadcrumbs
}) => {
  return (
    <section className="wrapper bg-ambit image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white">
      <div className="container pt-14 pb-12">
        <div className="row gx-0 gy-12 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

            {title && (
              <h1
                className="display-1 fw-bolder mb-5 text-white animate__animated animate__fadeInUp animate__delay-1s"
                style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
              >
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="lead fs-lg lh-sm mb-7 pe-xl-10 text-white-50 animate__animated animate__fadeInUp animate__delay-1s">
                {subtitle}
              </p>
            )}

            {(primaryBtnText || primaryHref) && (
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 animate__animated animate__fadeInUp animate__delay-2s">
                <NextLink title={primaryBtnText} href={primaryHref} className="btn btn-lg btn-white rounded me-2" />
              </div>
            )}
          </div>

          <div className="col-lg-5 offset-lg-1 animate__animated animate__fadeInRight">
            <div className="hero-image-card shadow-lg">
              {imgSrc && <img src={imgSrc} alt={imgAlt} className="hero-img" />} <div className="overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero4
