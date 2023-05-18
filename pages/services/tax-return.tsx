import PageLayout from 'components/layouts/PageLayout'
import FigureImage from 'components/reuseable/FigureImage'
import Image from 'next/image'
import ListColumn from 'components/reuseable/ListColumn'
import { ServiceCard2 } from 'components/reuseable/service-cards'
import { taxReturnList } from 'data/misc/taxReturnList'
import { taxReturnServices } from 'data/misc/taxReturnServices'
import { NextPage } from 'next'
import Head from 'next/head'

const TaxReturnPage: NextPage = () => {
  return (
    <PageLayout
      title="Tax Return Preparation"
      subTitle="Ambit has a ready team of tax professionals who can assist you to prepare your taxes on software of your choice"
      backgroundUrl="/img/photos/bg-tax-return.jpg"
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tax Preparation for Businesses | Ambit Tax & Accounting</title>
        <meta
          name="description"
          content="Full tax prep service, a dedicated tax professional, and a streamlined online process. Your Ambit team works seamlessly behind the scenes to get all your filings done on time."
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <Image
                src="/img/illustrations/tax-page-i1.jpg"
                alt="Our Expertise Illustration"
                width={800}
                height={533}
              />
              {/* <FigureImage
                src="/img/illustrations/tax-page-i1.jpg"
                className="shadow p-2 bg-gray rounded"
                alt="Our Expertise Illustration"
                width={800}
                height={533}
              /> */}
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Expertise</h2>
              <h3 className="display-4 mb-5">We Provide Federal & State Tax Solutions</h3>

              <p className="mb-6">
                We ensure compliance with USA Federal & State Tax laws while providing accurate and timely tax
                preparation services to our clients. In addition to individual Tax returns, we specialize in Partnership
                Tax, Small Corporation Tax, Corporation Tax, Non-Profit, Trust and Payroll Tax Return. Our in-depth
                knowledge of latest tax laws supports clients in mitigation of risk related to non-compliance.
              </p>

              <ListColumn list={taxReturnList} />
              <a
                href="https://calendly.com/ambit-accounting/15min"
                className="btn btn-navy rounded-pill mb-0 mt-6"
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
        <div className="container py-14 py-md-14">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Services</h2>
              <h3 className="display-4 mb-9">Tax Preparation Solutions for CPAs/Accounting Firm across USA</h3>
            </div>
          </div>
          <div className="row gx-md-8 gy-8 mb-6 mb-md-6">
            {taxReturnServices.map((item) => (
              <ServiceCard2
                {...item}
                key={item.id}
                iconBoxClassNames="icon btn btn-block btn-lg btn-soft-primary pe-none mb-6"
                hiddenBtn
              />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-7">
              <p className="mb-3">
                We support our customer with our methodical and detail-oriented approach specialized staff to process
                the tax return and well explained work processes and papers irrespective of whether you use Lacerte,
                UltraTax, CCH, Pro connect, Drake or any other tax software. We are highly confident in reducing our
                review time significantly which allow you to focus on adding more customers to your work profile and
                enhancing the size of your business.
              </p>
              <p className="mb-6">
                Our internal organization processes make sure the continuous learning of our staff so that we can remain
                u to date while offering tax return preparation services to our customers. Our professionals are aware
                of the recent tax law changes due to the Job Acts and The Tax Cuts of 2017. Our sleek training work
                procedure ensure that our experts remain in pace with the latest software, technology and workflow
                processes to increase on-the-job efficiency for tax processing.
              </p>
            </div>
            <div className="col-lg-5 mt-n10 shadow-sm p-2 bg-white rounded">
              <FigureImage
                src="/img/illustrations/meeting.jpg"
                alt="Our Expertise Illustration"
                width={1600}
                height={1118}
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default TaxReturnPage
