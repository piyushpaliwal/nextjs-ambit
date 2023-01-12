import { FAQ } from 'components/blocks/faq'
import PageLayout from 'components/layouts/PageLayout'
import NextLink from 'components/reuseable/links/NextLink'
import { NextPage } from 'next'
import Head from 'next/head'

const faqPage: NextPage = () => {
  return (
    <PageLayout title="Frequently Asked Questions" backgroundUrl="/img/photos/bg-faq.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frequently Asked Questions | Ambit</title>
        <meta
          name="description"
          content="Wondering about our data security or services? Check out our FAQ section for all the answers to your questions. Still have questions? Book a meeting now!"
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14 text-center">
          <FAQ />
        </div>
      </section>
      <section className="wrapper">
        <div className="container col-xl-8 mx-auto pt-10">
          <div
            style={{ backgroundImage: 'url(/img/photos/bg3.jpg)' }}
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
          >
            <div className="card-body p-9 p-xl-10">
              <div className="row align-items-center counter-wrapper gy-4 text-center">
                <h2 className="text-white">Still got a question?</h2>
                <div className="d-flex justify-content-center text-center">
                  <NextLink href="/contact" title="Drop us a note" className="btn btn-outline-white rounded-pill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default faqPage
