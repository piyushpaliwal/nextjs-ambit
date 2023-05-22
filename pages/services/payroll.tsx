import SoftwaresPayroll from 'components/blocks/clients/SoftwaresPayroll'
import PageLayout from 'components/layouts/PageLayout'
import { ServiceCard3 } from 'components/reuseable/service-cards'
import { payrollServicesList } from 'data/misc/payrollService'
import { NextPage } from 'next'
import Head from 'next/head'

const PayrollPage: NextPage = () => {
  return (
    <PageLayout
      title="Payroll Services"
      subTitle="Payroll is one of the most regular compliance which the employers need to fulfil, see how Ambit can assist you."
      backgroundUrl="/img/photos/bg2.jpg"
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Top Payroll Outsourcing Services | Best Payroll Outsourcing Companies</title>
        <meta
          name="description"
          content="Outsource payroll services for small businesses in the USA. Ambit Tax & Accounting simplifies payroll processing with expert assistance."
        />
      </Head>

      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <div className="row gx-md-5 gy-5">
                {payrollServicesList.map(({ id, Icon, color, ...item }) => (
                  <ServiceCard3 key={id} Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />} {...item} />
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Why Ambit?</h2>
              <h3 className="display-4 mb-5">Payroll responsibilities, Checked!</h3>
              <p>
                The top payroll management company in India, Ambit, offers its clients a well-organized payroll system
                by making sure that all payroll responsibilities are accurately computed based on their timesheets.
              </p>
              <p>
                We handle your payroll obligations and make sure they are accurately calculated and paid. For your
                company, we monitor timesheets and compute employee compensation as well as any associated payroll
                liabilities.
              </p>
              <p>
                The payroll experts at Ambit have the necessary knowledge to compute, pay, and file your payroll
                returns.
              </p>
              <a
                href="https://calendly.com/ambit-accounting/15min"
                className="btn btn-navy rounded-pill mt-3"
                target="_blank"
                rel="noreferrer"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14">
          <SoftwaresPayroll />
        </div>
      </section>
    </PageLayout>
  )
}

export default PayrollPage
