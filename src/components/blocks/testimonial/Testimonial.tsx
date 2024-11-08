import { FC, Fragment } from 'react'
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel'
import carouselBreakpoints from 'utils/carouselBreakpoints'
import { TestimonialCard } from 'components/reuseable/testimonial-cards'
// -------- data -------- //
import { testimonialList } from 'data/testimonial-list'

const Testimonial4: FC = () => {
  return (
    <Fragment>
      <h2 className="display-4 mb-5 text-white text-center">What Our Clients Say</h2>
      <div className="swiper-container dots-closer dots-light dots-light-75">
        <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
          {testimonialList.map((item, i) => (
              <TestimonialCard {...item} key={i} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  )
}

export default Testimonial4
