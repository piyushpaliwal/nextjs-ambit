import { FC, Fragment } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
import { faqList } from 'data/faq'

const FAQ: FC = () => {
  return (
    <Fragment>
      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {faqList.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                {items.map((item) => (
                  <Accordion key={item.no} {...item} />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default FAQ
