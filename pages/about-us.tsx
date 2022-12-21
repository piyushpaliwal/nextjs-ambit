import { NextPage } from 'next';
import PageLayout from 'components/layouts/PageLayout';
import { About } from 'components/blocks/about';

const AboutPage: NextPage = () => {
  return (
    <PageLayout title="About us" subTitle="This is about us">
      <About />
    </PageLayout>
  );
};

export default AboutPage;
