import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Accurate books done quick',
    body: "Missing months or even years of bookkeeping? No bookkeeping whatsoever? We'll get you back on track. Wherever your bookkeeping is at, we'll do your overdue books with total accuracy—fast."
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Leave the heavy lifting to us',
    body: 'Our expert Ambit bookkeepers work with a supporting team to efficiently complete your overdue books. Every month of historical bookkeeping is peer-reviewed to ensure total, tax-ready accuracy.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Straightforward Pricing',
    body: 'With any Ambit bundle, Catch Up Bookkeeping costs $199/month. No hourly rates, up-charges, or hidden fees—just accurate, worry-free bookkeeping done quick.'
  }
]

const AccordionList1: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default AccordionList1
