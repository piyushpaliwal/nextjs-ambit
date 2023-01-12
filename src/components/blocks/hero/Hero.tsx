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
              Remote <br />
              <span style={{ color: '#d8b572' }}>Accounting & Bookkeeping</span>
              <br /> at Ambit
            </h1>

            <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
              Focus on running your business and let us worry about maintaining your books and accounts
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink
                  title="Explore Possibilities"
                  href="/services"
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
                <Image alt="Director" className="rounded" src={Carousel1} />
                <Image alt="Carousel 2" className="rounded" src={Carousel2} />
                <Image alt="Carousel 3" className="rounded" src={Carousel3} />
                {/* <img alt="" className="rounded" src="/img/photos/carousel-1.jpg" srcSet="/img/photos/carousel-1@2x.jpg 2x" />
                <img
                    alt=""
                    className="rounded"
                    src="/img/photos/carousel-2.jpg"
                    srcSet="/img/photos/carousel-2@2x.jpg 2x"
                  />
                <img alt="" className="rounded" src="/img/photos/carousel-3.jpg" srcSet="/img/photos/carousel-3@2x.jpg 2x" /> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
