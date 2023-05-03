import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Consistent Check-ins',
    body: "We'll reach out regularly with bookkeeping updates. Have pressing questions that can't wait? We'll get back to you in one business day or less"
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Easy to schedule review calls',
    body: "Book a call with your bookkeeper directly with the Ambit experts. Whether it's a year-end review call or a monthly check-in, we're always happy to talk shop."
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Year-round support',
    body: 'Have complex questions? Our in-house research team is on hand year-round for expert small business advice—at no extra cost.'
  }
]

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default AccordionList
