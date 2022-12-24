import { FC, Fragment } from 'react';
import Image from 'next/image';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList } from 'data/about';

const About6: FC = () => {
  return (
    <Fragment>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
            <div className="col-lg-6 position-relative order-lg-2">
              <Tiles />
            </div>

            <div className="col-lg-6">
              <Megaphone className="icon-svg-md mb-4" />

              <h2 className="display-4 mb-3">Who Are We?</h2>

              <p className="lead fs-lg">
                We are an experienced team of accounting professionals, we offer businesses a full range of accounting
                services, from bookkeeping to part-time CFO and accounting systems integration.
              </p>

              <p className="mb-6">
                Business owners are increasingly asking themselves which services they should be delivering themselves
                and which are better off done by an outsourcing partner.
              </p>

              <p className="mb-6">
                Our experts can augment your existing team, work with you to streamline and optimize accounting
                processes, and help manage accounting work overflow during peak periods. You have 24/7 access to
                accurate, timely financial data and reporting, which positions your business with the agility to react
                quickly to changes, positively impacting decision-making.
              </p>

              <p className="mb-6">
                Some of the values that we have inculcated over <span className="underline-3 style-3">20 decades</span>{' '}
                of working in the industry include
              </p>
              <ListColumn rowClass="gx-xl-8" list={aboutList} />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-14">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-1">
                <Image height={750} width={1000} src="/img/photos/nishant-sharma.jpg" alt="Nishant Sharma" />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="display-5 mb-3">From the Director's desk</h2>
              <h3 className='display-6 mb-3 text-primary'>Nishant Sharma</h3>
              <p>
                Ambit is a family of professional team members who have taken it to the level and scale which people
                always dream in a very short span of time. As the Founder & CEO of Ambit, I have a vision of creating a
                world class services firm with focus on creating value in everything we do for our clients and
                delivering WOW experiences.
              </p>
              <p>
                Our Work Culture and our Team is the Core Foundation on which we are growing rapidly and Ambit will
                create waves in the market in the years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About6;
