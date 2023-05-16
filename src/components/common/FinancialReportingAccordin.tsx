import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Data Visualization',
    body: 'Let your data tell a story with our visualization.'
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Highly Customizable',
    body: 'Save time with our customizable and industry-specific templates.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Group Consolidation',
    body: 'Consolidate upto 75 entities with our consolidated Reporting tool.'
  }
]

const FinancialReportingAccordin: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default FinancialReportingAccordin
