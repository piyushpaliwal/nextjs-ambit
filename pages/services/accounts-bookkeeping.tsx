import PageLayout from 'components/layouts/PageLayout'
import ListColumn from 'components/reuseable/ListColumn'
import { ServiceCard2 } from 'components/reuseable/service-cards'
import { bookkeepingServiceList } from 'data/misc/bookkeeping'
import { bookkeepingBenefitsList } from 'data/misc/bookkeepingBenefits'
import { NextPage } from 'next'
import Image from 'next/image'

const BookkeepingPage: NextPage = () => {
  return (
    <PageLayout
      title="Accounts & Bookkeeping"
      subTitle="Outsource the whole or a part of your finance function and see how you can create a dramatic improvement in business performance and profitability"
      backgroundUrl="/img/photos/bg1.jpg"
    >
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <Image src="/img/illustrations/i8@2x.png" alt="Our Expertise Illustration" width="1600" height="1118" />
            </div>

            <div className="col-lg-5">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Our Expertise</h2>
              <h3 className="display-4 mb-5">Let Ambit be your accounts department</h3>

              <p className="mb-6">
                Our specialist consultants help you assess the most viable option for your business needs and our
                dedicated local account managers ensure the smooth functioning of the assigned services.
              </p>

              <ListColumn list={bookkeepingServiceList} />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-14">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fs-18 text-uppercase text-primary mb-3">Build your own team</h2>
              <h3 className="display-4 mb-9">
                We allow for customizations, you tell us who you need, and we'll make it happen
              </h3>
              <p className="mb-3">
                For larger organisations with a higher volume requirement, we're able to use the same premise of Map -
                Design - Implement - Manage of our Resource offerings, with a custom team. We are able to design a team
                based on the requirements for each client.
              </p>
              <p className="mb-6">
                Building your own team involves structuring your outsourced solution with differing seniority levels and
                differing skill-sets to have a well rounded accounts function. This can lead to even more savings by
                having a senior, experienced Accounts Manager with Junior Processing staff beneath them. It can also
                achieve much greater specialisation.
              </p>
            </div>
          </div>
          <div className="row gx-md-8 gy-8 mb-14 mb-md-18">
            {bookkeepingBenefitsList.map((item) => (
              <ServiceCard2
                {...item}
                key={item.id}
                iconBoxClassNames="icon btn btn-block btn-lg btn-soft-primary pe-none mb-6"
                hiddenBtn
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default BookkeepingPage
