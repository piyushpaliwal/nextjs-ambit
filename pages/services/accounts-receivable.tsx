import PageLayout from 'components/layouts/PageLayout'
import FigureImage from 'components/reuseable/FigureImage'
import ListColumn from 'components/reuseable/ListColumn'
import ServiceCard4 from 'components/reuseable/service-cards/ServiceCard4'
import { accountsReceivableProcess } from 'data/misc/accountsReceivableProcess copy'
import { bookkeepingServiceList } from 'data/misc/bookkeeping'
import { NextPage } from 'next'

const AccountsReceivablePage: NextPage = () => {
  return (
    <PageLayout title="Accounts Receivable" backgroundUrl="/img/photos/bg-accounts-receivable.jpg">
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Strategy</h2>
              <h3 className="display-4 mb-5">4 step simple & effective process</h3>
              <p>
                An efficient Accounts receivable process helps management in monitoring as well as collection of
                payments on time which will eventually help in the reduction of working capital cycle and in turn
                reducing the cost of funds. In addition, the Management may also get insights on their own business
                issues like invoicing errors, delayed collections due to service issues and many other aspects.
              </p>
              <p className="mb-6">
                We at Ambit ensure the simple process stays simple and effective for us and more importantly for you as
                our valuable partners. At every step of the way our team ensures to make the process hassle-free so that
                you can focus on your core business.
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
              {accountsReceivableProcess.map(({ className, no, title, subtitle, color }) => (
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
                src="/img/illustrations/accounts-receivable-i1.jpg"
                className="shadow p-2 bg-white rounded"
                alt="Our Expertise Illustration"
                width={1600}
                height={1955}
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

export default AccountsReceivablePage
