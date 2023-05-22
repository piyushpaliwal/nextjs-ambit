import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'We do your Bookkeeping',
    body: "Each month, your bookkeeper organizes your business transactions and gets to work on your books. Come year-end, they'll compile a tidy tax package that contains everything we need to file and gives you a year-in-review snapshot of your business."
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Tax Consultant',
    body: 'Our tax professionals make your business tax preparation look easy. We file your taxes for you with accuracy and save you money with the right tax strategies and deductions.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Accountants and CFOs',
    body: "When you're ready to file, your dedicated Tax Coordinator will collect all necessary documents and forms. Then we connect you to a trusted Tax Professional to get your taxes filed on time, every time."
  }
]

const TaxAccordin1: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default TaxAccordin1
