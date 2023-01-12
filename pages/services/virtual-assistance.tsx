import PageLayout from 'components/layouts/PageLayout'
import FigureImage from 'components/reuseable/FigureImage'
import ListColumn from 'components/reuseable/ListColumn'
import { virtualAssistantList } from 'data/misc/virtualAssistantList'
import { NextPage } from 'next'
import Head from 'next/head'

const virtualAssistancePage: NextPage = () => {
  return (
    <PageLayout title="Virtual Assistance" backgroundUrl="/img/photos/bg-virtual-assistant.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Professional Virtual Assistants to Take Care of Your Tasks | Ambit</title>
        <meta
          name="description"
          content="With Ambit, you can get professional virtual assistants to take care of all the tedious tasks for you or your business. From bookkeeping to social media management, we can do it all! Visit our website today to learn more."
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <FigureImage
                src="/img/illustrations/virtual-assistance-i1.jpg"
                className="shadow p-1 bg-gray rounded"
                alt="Our Expertise Illustration"
                width={1478}
                height={984}
              />
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Service</h2>
              <h3 className="display-4 mb-5">Ambit Virtual Assistant</h3>

              <p className="mb-6">What you get with an Ambit Virtual Assistant is as follows</p>

              <ul className="icon-list bullet-bg bullet-soft-primary">
                {virtualAssistantList.map((item) => (
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

export default virtualAssistancePage
