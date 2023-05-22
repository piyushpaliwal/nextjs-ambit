import Process1 from 'components/blocks/process/Process1'
import PageLayout from 'components/layouts/PageLayout'
import FigureImage from 'components/reuseable/FigureImage'
import ListColumn from 'components/reuseable/ListColumn'
import { invoiceServiceList } from 'data/misc/invoiceServiceList'
import { NextPage } from 'next'
import Head from 'next/head'

const InvoiceProcessingPage: NextPage = () => {
  return (
    <PageLayout title="Invoice Processing" backgroundUrl="/img/photos/bg-invoice-processing.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Invoices Processing Services | Invoice Processing Outsourcing</title>
        <meta
          name="description"
          content="Track and process your invoices accurately for timely approvals and prompt payment dispersal with Invoice Processing Services offered by Ambit"
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14">
          <Process1 />
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <FigureImage
                src="/img/illustrations/invoice-processing-i1.jpg"
                className="shadow p-1 bh-white rounded"
                alt="Our Expertise Illustration"
                width={1555}
                height={1166}
              />
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Expertise</h2>
              <h3 className="display-4 mb-5">Let Ambit handle your invoices</h3>

              <p className="mb-6">Our invoice processing services include:</p>

              <ListColumn list={invoiceServiceList} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default InvoiceProcessingPage
