import { NextPage } from 'next'
import PageLayout from 'components/layouts/PageLayout'
import { About } from 'components/blocks/about'

const AboutPage: NextPage = () => {
  return (
    <PageLayout title="This is us!" backgroundUrl="/img/photos/bg-about.jpg">
      <About />
    </PageLayout>
  )
}

export default AboutPage
