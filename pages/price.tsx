import { Pricing } from 'components/blocks/pricing'
import ContactForm from 'components/common/ContactForm'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import { Fragment, useState } from 'react'

const PricePage: NextPage = () => {
  const [showForm, setShowForm] = useState(true)

  return (
    <PageLayout title="Ambit Pricing" backgroundUrl="/img/photos/bg-pricing.jpg">
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <Pricing />
        </div>
      </section>
      {showForm && (
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row text-center">
              <div className="col-md-10 col-lg-8 col-xl-9 col-xxl-8 mx-auto">
                <h2 className="fs-18 text-uppercase text-primary mb-3">Lets Connect</h2>
                <h3 className="display-3 ls-sm mb-10 px-xl-15">
                  Tell us a little more about your requirements and we'll do our best to accomodate them
                </h3>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      )}
    </PageLayout>
  )
}

export default PricePage
