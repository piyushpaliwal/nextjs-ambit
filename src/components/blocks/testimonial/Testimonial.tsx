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
      <h2 className="display-4 mb-5 text-white text-center">Happy Customers</h2>
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <Carousel slidesPerView={1} className="dots-light dots-closer text-center" navigation={false} grabCursor>
            {testimonialList.map((item, i) => (
              <TestimonialCard {...item} key={i} />
            ))}
          </Carousel>
        </div>
      </div>
    </Fragment>
  )
}

export default Testimonial4
