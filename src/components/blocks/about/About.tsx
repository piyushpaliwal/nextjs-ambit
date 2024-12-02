import { FC, Fragment } from 'react'
import Image from 'next/image'
import Megaphone from 'icons/lineal/Megaphone'
import { Tiles } from 'components/elements/tiles'
import ListColumn from 'components/reuseable/ListColumn'
// -------- data -------- //
import { aboutList } from 'data/about'

const About6: FC = () => {
  return (
    <Fragment>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 position-relative order-lg-2">
              <Tiles />
            </div>

            <div className="col-lg-6">
              <Megaphone className="icon-svg-md mb-4" />

              <h2 className="display-4 mb-3">Who Are We?</h2>

              <p className="lead fs-lg">
                At Ambit, we're a leading outsourcing firm with over 20 years of experience in accounting. We offer a full suite of services including bookkeeping, accounting, tax planning, tax preparation, and financial reporting. Trusted by over 350 clients worldwide, we boast a 96% client retention rate, reflecting our commitment to exceptional service.
              </p>

              <p className="mb-6">
                Navigating the balance between in-house and outsourced tasks can be tough. At Ambit, we make it easy. Our team seamlessly integrates with your operations to enhance accounting processes, manage peak-period overflow, and deliver top-quality results.
              </p>

              <p className="mb-6">
                Our flexible offshore staffing solutions let you hire skilled bookkeepers, accountants, tax preparers, and virtual assistants starting at just $10 per hour. Enjoy the freedom of no long-term contracts and test candidates before you commit—no cost or obligation involved.
              </p>

              <p className="mb-6">
                With 24/7 access to accurate and timely financial data, we help you make quick, informed decisions that drive business success.
              </p>

              <p className="mb-6">
                Our core values include:
              </p>
              <ListColumn rowClass="gx-xl-8 mb-6" list={aboutList} />
              <p className="mb-6 fst-italic fw-semibold">
                At Ambit, we’re not just an accounting service provider—we’re your trusted partner for financial clarity and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-14">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-1">
                <Image height={564} width={825} src="/img/photos/director.jpg" alt="Nishant Sharma" />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="display-5 mb-3">From Founder & CEO's Outlook</h2>
              <h3 className="display-6 mb-3 text-primary">Nishant Sharma</h3>
              <p>
                At Ambit, we're not just a team—we’re a family that’s rapidly set new standards in the accounting industry. As the Founder & CEO, my vision is to build a top-tier firm dedicated to delivering outstanding value and creating remarkable experiences for our clients.
              </p>
              <p>
                Our dynamic work culture and dedicated team are at the heart of our growth. We’re committed to making a significant impact on the accounting industry and setting new benchmarks for excellence. Join us on this journey as Ambit continues to shape the future of the industry.
              </p>
            </div>
          </div>
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center pt-12">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-1">
                <Image height={564} width={825} src="/img/photos/greg.png" alt="Greg Johnson CPA" />
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="display-6 mb-3 text-primary">Greg Johnson CPA</h3>
              <p>
                Greg Johnson, Co-Founder and CPA at Ambit Tax & Accounting LLP and founding partner of Dental Profits Institute, has worked with over 250 dental practices across the U.S., Canada, Europe, and Australia.
              </p>
              <p>
                With expertise in financial analysis, tax strategy, and business growth, Greg's vision at Ambit is to provide comprehensive solutions from offshore staffing to tax planning that help business owners optimize financial operations and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About6
