import { FC, Fragment } from 'react';
import { ServiceCard } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList } from 'data/service';

const Services: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="fs-18 text-uppercase text-primary mb-3">What We Do?</h2>
          <h3 className="display-4 px-xl-10">
            Services designed to meet your needs
          </h3>
          <p className="mb-10">
            Our services are created with a long-term perspective and are specifically catered to your company's demands. We offer comprehensive bookkeeping and accounting services at a cost that will not break your budget.
          </p>
        </div>
      </div>

      <div className="position-relative">
        <div
          className="shape rounded-circle bg-soft-primary rellax w-16 h-16"
          style={{ bottom: '-0.5rem', right: '-2.5rem', zIndex: 0 }}
        />
        <div className="shape bg-dot primary rellax w-16 h-17" style={{ top: '-0.5rem', left: '-2.5rem', zIndex: 0 }} />

        <div className="row gx-md-5 gy-5 text-center">
          {serviceList.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
