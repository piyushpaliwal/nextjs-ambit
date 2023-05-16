import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: '3-way forecasting',
    body: 'Accurately map your budget, balance sheet, and cash flow.'
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Build Scenarios',
    body: 'Plan for best and worst case scenarios and reduce uncertainty.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Driver Based',
    body: 'Use drivers to see how until-based cost affect your future.'
  }
]

const FinancialReportingAccordin1: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default FinancialReportingAccordin1
