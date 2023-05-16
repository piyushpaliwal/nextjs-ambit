import { FC } from 'react'
import Accordion from 'components/reuseable/accordion'
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Analyze the past',
    body: 'Automate your reporting and analysis and combine all your data in one place. Get the right numbers at the right time. Use our customizable reports or make your own.'
  },
  {
    no: 'Two',
    expand: true,
    heading: 'Forecast the future',
    body: 'Manage your budget and forecast process across your organization with budget models that support your business. Customize our standard models or create your own.'
  },
  {
    no: 'Three',
    expand: true,
    heading: 'Consolidate with Ease',
    body: 'Ambit can consolidate actuals directly from your accounting systems and budgets. Financial data as well as non-financial data. Free up your time for better things.'
  }
]

const FinancialReportingAccordin2: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  )
}

export default FinancialReportingAccordin2
