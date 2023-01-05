import { Pricing } from 'components/blocks/pricing'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'

const PricePage: NextPage = () => {
  return (
    <PageLayout title="Pricing" backgroundUrl="/img/photos/bg-pricing.jpg">
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <Pricing />
        </div>
      </section>
    </PageLayout>
  )
}

export default PricePage
