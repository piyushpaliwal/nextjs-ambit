import { FC } from 'react'
import NextLink from 'components/reuseable/links/NextLink'
// -------- data -------- //
import { invoiceProcess } from 'data/misc/invoiceProcess'
import ProcessList1 from 'components/reuseable/process/ProcessList'

const Process1: FC = () => {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
      <div className="col-lg-6 order-lg-2">
        {invoiceProcess.map((item) => {
          return <ProcessList1 shadow {...item} key={item.no} />
        })}
      </div>

      <div className="col-lg-6">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2>
        <h3 className="display-4 mb-5">3 working steps to our Invoice Processing Service</h3>

        <p className="mb-6">
          If not kept under control, the manual nature of invoice processing can have a major negative influence on a
          company's bottom line. Every year, businesses spend hundreds of dollars only to fix processing errors, manage
          vendor inquiries, and match orders with purchases. Our services not only assist you in avoiding such issues,
          but also provide greater quality and absolute correctness when processing bills.
        </p>

        <a
          href="https://calendly.com/ambit-accounting/15min"
          className="btn btn-navy rounded-pill mb-0"
          target="_blank"
          rel="noreferrer"
        >
          Book a Meeting
        </a>
      </div>
    </div>
  )
}

export default Process1
