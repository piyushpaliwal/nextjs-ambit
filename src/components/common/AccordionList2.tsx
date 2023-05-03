import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'A Year End Financial Package for every year of catch up',
    body: 'Say goodbye to tax season stress. With our Year End Financial Package for every year of catch up, we provide all necessary documents in one place, so you can file with ease and confidence.'
  },
  {
    no: 'Two',
    expand: true,
    heading: 'All your reports in one place',
    body: 'Get everything you need for stress-free tax filing with our Year End Financial Package. Including income statement, balance sheet, general ledger, trial balance, and journal entry summary—all in one convenient place.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Keep a clean track record',
    body: "Ready to take your business to the next level? Showcase your financial health with tidy income statements and balance sheets. Whether you're applying for a loan or seeking investors, we'll help you prove your business is worth the investment."
  }
]

const AccordionList2: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default AccordionList2
