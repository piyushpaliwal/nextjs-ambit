import { FC, Fragment } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { faqList } from 'data/faq';

const FAQ: FC = () => {
  return (
    <Fragment>
      <section className="wrapper bg-light">
        <div className="container py-5 py-md-8">
          <div className="accordion-wrapper" id="accordion">
            <div className="row">
              {faqList.map((items, i) => {
                return (
                  <div className="col-md-6" key={i}>
                    {items.map((item) => (
                      <Accordion key={item.no} {...item} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FAQ;
