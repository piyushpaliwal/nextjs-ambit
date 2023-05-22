import PageLayout from 'components/layouts/PageLayout'
import ServiceCard5 from 'components/reuseable/service-cards/ServiceCard5'
import { ertcBenefitsList } from 'data/misc/ertcBenefitsList'
import { ertcServiceList } from 'data/misc/ertcServiceList'
import { NextPage } from 'next'
import Head from 'next/head'

const ERTCPage: NextPage = () => {
  return (
    <PageLayout title="ERTC (Employee Retention Tax Credit)" backgroundUrl="/img/photos/bg-ertc.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Employee Retention Tax Credit</title>
        <meta
          name="description"
          content="Ambit Energy is excited to offer the Employee Retention Tax Credit (ERTC). This tax credit rewards businesses who kept employees during the COVID-19 pandemic, up to $26,000 per employee. Learn more about how you can qualify and apply for the ERTC today!"
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="fs-18 text-uppercase text-primary mb-3">What makes us great?</h2>
              <h3 className="display-4 mb-10 px-xl-10">
                You'll be surprised with our efficiency and hassle-free working style
              </h3>
            </div>
          </div>

          <div className="position-relative">
            <div
              className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
              style={{ zIndex: 0, right: '-2.2rem', bottom: '-0.5rem' }}
            />

            <div
              className="shape bg-dot primary rellax w-16 h-17"
              style={{ zIndex: 0, top: '-0.5rem', left: '-2.2rem' }}
            />

            <div className="row gx-md-5 gy-5 text-center">
              {ertcBenefitsList.map((item) => (
                <ServiceCard5 key={item.id} Icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            {/* <div className="col-lg-7 order-lg-2">
              <FigureImage
                src="/img/illustrations/i13@2x.png"
                alt="Our Expertise Illustration"
                width={1600}
                height={1118}
              />
            </div> */}

            <div className="col-lg-12">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Why Us</h2>
              <h3 className="display-4 mb-5">Reduce Risk by Letting Us Work Through the Guidelines with You</h3>

              <p className="mb-6">
                We have successfully claimed the ERTC for numerous firms, obtaining millions of dollars in tax credits.
                We can help you find out if you qualify and then manage the tax credit process for you. Let us provide a
                complimentary analysis of your organization to determine if the ERTC credits can be claimed. Our
                comprehensive ERTC study includes
              </p>

              <ul className="icon-list bullet-bg bullet-soft-primary">
                {ertcServiceList.map((item) => (
                  <li key={item}>
                    <i className="uil uil-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
    </PageLayout>
  )
}

export default ERTCPage
