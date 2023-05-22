import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Flexible',
    body: 'Ambit offers customizable templates as well as enabling you to create any business structure you wish. This means you will never outgrow Ambit and you always have the solution you need.'
  },
  {
    no: 'Two',
    expand: true,
    heading: 'All in One',
    body: 'Ambit can connect to any data source, so all your data is in one place. You can control what your users can see or do, which enables everyone to work with the same data, automatically updated, reducing the risk of errors.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Value for Money',
    body: 'Ambit can compete with any enterprise solution without the need for an army of fancy tools and high investments. It is extremely good value for money and also offers “out of the box” options for the smaller budget.'
  }
]

const FinancialReportingAccordin3: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default FinancialReportingAccordin3
