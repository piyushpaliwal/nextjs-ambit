import { FAQ } from 'components/blocks/faq'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'

const faqPage: NextPage = () => {
  return (
    <PageLayout title="Frequently Asked Questions" backgroundUrl="/img/photos/bg-faq.jpg">
      <section className="wrapper bg-light">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <FAQ />
        </div>
      </section>
    </PageLayout>
  )
}

export default faqPage
