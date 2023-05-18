import PageLayout from 'components/layouts/PageLayout'
import FigureImage from 'components/reuseable/FigureImage'
import ListColumn from 'components/reuseable/ListColumn'
import ServiceCard4 from 'components/reuseable/service-cards/ServiceCard4'
import { accountsPayableProcess } from 'data/misc/accountsPayableProcess'
import { bookkeepingServiceList } from 'data/misc/bookkeeping'
import { NextPage } from 'next'
import Head from 'next/head'

const AccountsPayablePage: NextPage = () => {
  return (
    <PageLayout title="Accounts Payable" backgroundUrl="/img/photos/bg-accounts-payable.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Accounts Payable Services | Ambit Tax & Accounting</title>
        <meta
          name="description"
          content="Manage payments, minimize discrepancies, and enhance your working capital with Accounts Payable Services offered by Ambit."
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Strategy</h2>
              <h3 className="display-4 mb-5">4 step simple & effective process</h3>
              <p>
                We can take full control of your accounts payable function right from the root level, automate it to
                avoid human intervention and make the cumbersome process error free. We take access and accountability
                of your accounts inbox, escalate urgent matters for prompt actioning and even reply to supplier payable
                queries.
              </p>
              <p className="mb-6">
                Not only reconciling the supplier statements, we issue weekly aged payable listings so you know who to
                pay, how much and when to pay! On your go ahead, we set up the batch payment on your banking website for
                you to review and authorize!
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

            <div className="col-lg-6">
              {accountsPayableProcess.map(({ className, no, title, subtitle, color }) => (
                <ServiceCard4
                  key={no}
                  title={title}
                  description={subtitle}
                  className={'d-flex flex-row ' + className}
                  Icon={
                    <span className={`icon btn btn-block btn-lg btn-soft-${color} pe-none mt-1 me-5`}>
                      <span className="number fs-22">{no}</span>
                    </span>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <FigureImage
                src="/img/illustrations/accounts-payable-i1.jpg"
                className="shadow p-1 bg-white rounded"
                alt="Our Expertise Illustration"
                width={1203}
                height={871}
              />
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Expertise</h2>
              <h3 className="display-4 mb-5">Let Ambit be your accounts department</h3>

              <p className="mb-6">
                Our specialist consultants help you assess the most viable option for your business needs and our
                dedicated local account managers ensure the smooth functioning of the assigned services.
              </p>

              <ListColumn list={bookkeepingServiceList} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default AccountsPayablePage
