import { FC } from 'react'
import { slideInDownAnimate } from 'utils/animation'
import Image from 'next/image'
import HeroImage from '../../../../public/img/photos/accounting-and-bookkeeping-banner.svg' //  /img/photos/carousel1.jpg';

// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel'
import NextLink from 'components/reuseable/links/NextLink'
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox'

const HeroInnerPages: FC = () => {
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
              Life's too short to worry about Bookkeeping
            </h1>

            <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
              We know you're pretty busy, so getting straight to the point. Bookkeeping sucks. Trying to find a good
              bookkeeper sucks even more!
            </p>
            <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
              We're here to help you with that.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title="Talk to us" href="/contact" className="btn btn-lg btn-white rounded-pill me-2" />
              </span>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="swiper-container shadow-lg">
              <Image alt="Experts in your corner" className="rounded" src={HeroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroInnerPages
