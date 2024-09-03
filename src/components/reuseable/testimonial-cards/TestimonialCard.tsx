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
    <div className="item-inner">
      <div className="card border-0 bg-white-900">
        <div className="card-body">
          <span className="ratings five mb-3" />
          <blockquote className="border-0 mb-0">
            <p>“{review}”</p>
            <div className="blockquote-details">
              <div className="info p-0">
                <h5 className="mb-0">{name}</h5>
                <p className="mb-0">{designation}</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard3
