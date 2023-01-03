import { FC } from 'react'

// =================================================
type TestimonialCard3Props = {
  name: string
  image?: string
  review: string
  shadow?: boolean
  designation?: string
  hideRating?: boolean
}
// =================================================

const TestimonialCard3: FC<TestimonialCard3Props> = (props) => {
  const { name, review, designation } = props

  return (
    <blockquote className="border-0 fs-lg mb-0">
      <p>“{review}”</p>
      <div className="blockquote-details justify-content-center">
        <div className="info">
          <h6 className="mb-1 text-white">{name}</h6>
          <p className="mb-0">{designation}</p>
        </div>
      </div>
    </blockquote>
  )
}

export default TestimonialCard3
