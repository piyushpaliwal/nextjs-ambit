import { NextPage } from 'next'
import PageLayout from 'components/layouts/PageLayout'
import { About } from 'components/blocks/about'
import { Services } from 'components/blocks/services'
import Head from 'next/head'

const ServicesPage: NextPage = () => {
  return (
    <PageLayout title="Services" subTitle="" backgroundUrl="/img/photos/bg-services.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>U.S. Accounting & Bookkeeping Services starting at $0</title>
        <meta
          name="description"
          content="Looking for quality, affordable accounting and bookkeeping services in the U.S.? Look no further than Ambit! We offer a wide range of services starting at just $0 per month. Contact us today to get started!"
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <Services />
        </div>
      </section>
    </PageLayout>
  )
}

export default ServicesPage
