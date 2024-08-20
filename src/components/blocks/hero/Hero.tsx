import { FC } from 'react'
import { slideInDownAnimate } from 'utils/animation'
import Image from 'next/image'
import Carousel1 from '../../../../public/img/photos/carousel1.jpg' //  /img/photos/carousel1.jpg';
import Carousel2 from '../../../../public/img/photos/carousel2.jpg'
import Carousel3 from '../../../../public/img/photos/carousel3.jpg'

// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel'
import NextLink from 'components/reuseable/links/NextLink'
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox'

const Hero: FC = () => {
  // use video popup
  useLightBox()

  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
      style={{ backgroundColor: '#131a40' }}
    >
      <div className="container pt-18 pb-16">
        <div className="row gx-0 gy-12 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
            <h1 className="display-2 mb-5 text-white" style={slideInDownAnimate('600ms')}>
            Welcome to <br />
              <span style={{ color: '#d8b572' }}>Ambit!</span>
              <br /> <span className='fs-25'>Your One-Stop Solution for All Accounting Needs!</span>
            </h1>

            <p className="lead fs-sm lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
              Join 280+ clients across the country who trust in us for top-notch, budget-friendly outsource accounting, bookkeeping, tax planning, and tax preparation services.
              <br />
              Choose from full-time, part-time, or on-demand staff, and test candidates before committing—at no cost to you.
            </p>
            <p className="lead fs-16 lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink
                  title="Explore Our Services"
                  href="/services/accounting-bookkeeping"
                  className="btn btn-lg btn-white rounded-pill me-2"
                />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <a
                  href="https://calendly.com/ambit-accounting/15min"
                  className="btn btn-lg btn-outline-white rounded-pill"
                  target="_blank"
                  rel="noreferrer"
                >
                  Let's Talk
                </a>
              </span>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="swiper-container shadow-lg">
              <Carousel slidesPerView={1} className="dots-over">
                <Image alt="Carousel 1" className="rounded" src={Carousel1} />
                <Image alt="Carousel 2" className="rounded" src={Carousel2} />
                <Image alt="Carousel 3" className="rounded" src={Carousel3} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
