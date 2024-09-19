import { Contact } from 'components/blocks/contact'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const ContactPage: NextPage = () => {
  return (
    <PageLayout title="Get in touch" backgroundUrl="/img/photos/bg-contact.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us | Get a Quote from Ambit</title>
        <meta
          name="description"
          content="Need to get in touch with Ambit? You've come to the right place! Our contact information is listed here, and we're always happy to help."
        />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      ></Script>
      <Contact />
    </PageLayout>
  )
}

export default ContactPage
