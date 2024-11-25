import { NextPage } from 'next'
import { Fragment } from "react";
import { Navbar } from 'components/blocks/navbar'
import NextLink from 'components/reuseable/links/NextLink';
import { slideInDownAnimate } from 'utils/animation';
import CPAsHero from 'components/common/CPAsHero';
import ContactPopup from 'components/common/ContactPopup';
import { individual, business, taxPlanning } from "data/tax-services"
import TwoColumnProps from 'types/two-column';
import TwoColumn from 'components/common/TwoColumn';


const TaxServices: NextPage = () => {
  const serviceData: TwoColumnProps[] = [
    {
      title: "Individual Tax Services",
      image: {
        src: "/img/photos/individual-tax.jpg",
        alt: "Individual Tax"
      },
      list: individual,
      description: "Navigating personal taxes can be stressful, but we're here to make it seamless. From straightforward fillings to complex tax scenarios, our team handles every aspect of your individual tax preparation. We ensure accurate returns, maximize deductions and help you navigate credits like earned income and child tax credits.",
      reverse: false,
    },
    {
      title: "Business Tax Services",
      image: {
        src: "/img/photos/business-tax.jpg",
        alt: "Business Tax"
      },
      list: business,
      description: "Stay ahead of your tax obligations with our tailored business tax solutions. From corporate filings like 1120 and 1065 to payroll and sales tax compliance, we help you reduce liabilities and focus on growing your business.",
      reverse: true,
    },
    {
      title: "Tax Planning Services",
      image: {
        src: "/img/photos/tax-planning.jpg",
        alt: "Tax Planning"
      },
      list: taxPlanning,
      description: "Effective tax planning can save you money and avoid surprises. We work with you to develop a strategy that ensures your taxes are as efficient as possible and aligned with your financial goals.",
      reverse: false,
    },
  ]
  
  return (
    <Fragment>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo-dark-1"
          navOtherClass="navbar-other ms-xl-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-light"
          social
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min"
              title="Schedule a Meeting"
              className="btn btn-sm btn-primary rounded-pill fs-sm px-2 py-1"
            >
              Schedule a Meeting
            </a>
          }
        />
      </header>
      <main className="content-wrapper">
        <CPAsHero title='End-to-End Tax Services for All Your Needs.' description='We simplify tax preparation, review, and planning, ensuring accurate returns, maximum deductions, and minimized liabilities.' />
        <TwoColumn serviceData={serviceData} />
        <section
          className="wrapper py-16 bg-light">
          <div className='col-lg-10 col-xl-9 col-xxl-7 mx-auto text-center'>
            <h1 className="display-1 fs-64 mb-5">Get Started Today.</h1>
            <p className="lead fs-24 mb-8 px-8 px-lg-0">
              Streamline your tax needs with expert services tailored to you. Contact us today to learn how we can
              help you simplify, save, and stay compliant year-round
            </p>
            <span style={slideInDownAnimate('200ms')}>
              <NextLink
                title="Get Started"
                href="https://calendly.com/ambit-accounting/15min"
                className="btn btn-lg btn-primary me-2"
              />
            </span>
          </div>
        </section>
        <ContactPopup />
      </main>
    </Fragment>
  )
}

export default TaxServices
