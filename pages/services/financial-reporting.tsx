import PageLayout from 'components/layouts/PageLayout'
import FigureImage from 'components/reuseable/FigureImage'
import ListColumn from 'components/reuseable/ListColumn'
import { financialReportingList } from 'data/misc/financialReportingList'
import { NextPage } from 'next'

const FinancialReportingPage: NextPage = () => {
  return (
    <PageLayout title="Monthly Financial Reporting" backgroundUrl="/img/photos/bg-financial-reporting.jpg">
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <FigureImage
                src="/img/illustrations/reporting-i1.jpg"
                className="shadow p-2 bg-gray rounded"
                alt="Our Expertise Illustration"
                width={1920}
                height={1280}
              />
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Expertise</h2>
              <h3 className="display-4 mb-5">Reporting on your fingertips</h3>

              <p className="mb-6">
                Ambit provides a wide range of reporting services to meet your needs. To provide you with an accurate
                picture of your organization's financial situation, our reporting service department may provide a set
                of reports as and when you need them. Our services for financial reporting includes
              </p>

              <ListColumn list={financialReportingList} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default FinancialReportingPage
