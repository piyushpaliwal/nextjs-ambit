import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'S Corporation and Partnerships',
    body: 'A team of tax professionals who can help individuals or businesses with their tax-related needs. They are knowledgeable and experienced in handling various tax forms and can ensure accurate and timely filing. This allows their clients to focus on their core business activities without worrying about taxes.'
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Sole Proprietors and C Corporations',
    body: 'Time passes quickly and tax deadlines can sneak up on people. However, a team of skilled tax professionals is available to help individuals or businesses prepare for tax season. They can handle a range of tax forms and stay up-to-date with any new regulations. The professionals are trusted to file taxes accurately and on time, allowing clients to focus on other important matters.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Personal Taxes',
    body: 'We are here to support all of your tax needs. Leave your personal tax return to our experienced tax professionals so you can focus on growing your business.'
  }
]

const TaxAccordin2: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default TaxAccordin2
