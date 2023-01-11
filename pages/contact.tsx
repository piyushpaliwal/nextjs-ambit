import { Contact } from 'components/blocks/contact'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import Head from 'next/head'
import { FC } from 'react'

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
      <Contact />
    </PageLayout>
  )
}

export default ContactPage
