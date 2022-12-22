import { NextPage } from 'next';
import PageLayout from 'components/layouts/PageLayout';
import { About } from 'components/blocks/about';
import { Services } from 'components/blocks/services';

const ServicesPage: NextPage = () => {
  return (
    <PageLayout title="Services" subTitle="">
      <section className="wrapper bg-light">
        <div className="container mt-n16">
          <Services />
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
