import { NextPage } from 'next'
import PageLayout from 'components/layouts/PageLayout'
import { About } from 'components/blocks/about'
import Head from 'next/head'

const AboutPage: NextPage = () => {
  return (
    <PageLayout title="This is us!" backgroundUrl="/img/photos/bg-about.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Ambit</title>
        <meta
          name="description"
          content="At Ambit, we are a client-focused professional services firm that provides tax and accounting services to individuals and businesses all over the world. Our goal is to provide our clients with the highest quality of service possible. Visit our website to learn more!"
        />
      </Head>
      <About />
    </PageLayout>
  )
}

export default AboutPage
