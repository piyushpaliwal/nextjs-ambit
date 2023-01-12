import { Pricing } from 'components/blocks/pricing'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import Head from 'next/head'

const PricePage: NextPage = () => {
  return (
    <PageLayout title="Pricing" backgroundUrl="/img/photos/bg-pricing.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ambit - The Best Bookkeeping Services Starting at $0</title>
        <meta
          name="description"
          content="No matter what your bookkeeping needs are, Ambit has a plan for you. Get started with 3-months free bookkeeping today!"
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <Pricing />
        </div>
      </section>
    </PageLayout>
  )
}

export default PricePage
