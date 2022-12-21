import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Softwares } from 'components/blocks/clients';
import { Footer } from 'components/blocks/footer';
import { Pricing } from 'components/blocks/pricing';
import { Testimonial } from 'components/blocks/testimonial';
import { Services } from 'components/blocks/services';
import NextLink from 'components/reuseable/links/NextLink';
import { Process } from 'components/blocks/process';

const Index: NextPage = () => {
  return (
    <Fragment>

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={<NextLink href="#" title="Free Trial" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero />

        <section className="wrapper bg-light">
          <div className="container py-5 py-md-8">
            { /* software expertise */}
            <Softwares />

            {/* ========== what we do section ========== */}
            <Services />

            { /* Pricing section */}
            <Pricing />

            { /* How we work */ }
            <Process />

            {/* testimonials */}
            <Testimonial />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default Index;
