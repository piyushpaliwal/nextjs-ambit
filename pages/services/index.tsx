import { NextPage } from 'next'
import PageLayout from 'components/layouts/PageLayout'
import { About } from 'components/blocks/about'
import { Services } from 'components/blocks/services'

const ServicesPage: NextPage = () => {
  return (
    <PageLayout title="Services" subTitle="">
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <Services />
        </div>
      </section>
    </PageLayout>
  )
}

export default ServicesPage
