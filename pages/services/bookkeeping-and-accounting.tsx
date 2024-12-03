import { NextPage } from 'next'
import { Fragment } from "react";
import { Navbar } from 'components/blocks/navbar'
import { slideInDownAnimate } from 'utils/animation';
import CPAsHero from 'components/common/CPAsHero';
import ContactPopup from 'components/common/ContactPopup';
import { accounting, bookkeeping, quickbooks, payroll, financials } from "data/bookkeeping-accounting";
import TwoColumn from 'components/common/TwoColumn';
import TwoColumnProps from 'types/two-column';


const BookkeepingAndAccounting: NextPage = () => {
  const serviceData: TwoColumnProps[] = [
    {
      title: "Accounting Services",
      image: { src: "/img/photos/accounting.jpg", alt: "Accounting" },
      list: accounting,
      description: "Our accounting services provide a complete picture of your business’s financial health. From preparing financial statements to assisting with audits, we ensure compliance and accuracy every step of the way.",
      reverse: false,
    },
    {
      title: "Bookkeeping Services",
      image: { src: "/img/photos/bookkeeping.jpg", alt: "Bookkeeping" },
      list: bookkeeping,
      description: "Stay organized and stress-free with accurate bookkeeping services tailored to your business. We manage your day-to-day financial transactions and ensure your books are up-to-date and error-free.",
      reverse: true,
    },
    {
      title: "QuickBooks Consulting",
      image: { src: "/img/photos/tax-planning.jpg", alt: "QuickBooks Consulting" },
      list: quickbooks,
      description: "Ambit’s QuickBooks Certified Experts bring efficiency to your business finances. Whether you’re new to QuickBooks or need ongoing management, our team is here to guide you every step of the way.",
      reverse: false,
    },
    {
      title: "Payroll Management",
      image: { src: "/img/photos/payroll.jpg", alt: "Payroll" },
      list: payroll,
      description: "Streamline your payroll processes with our reliable and compliant solutions. We ensure your employees are paid accurately and on time while keeping up with tax and labor regulations.",
      reverse: true,
    },
    {
      title: "Financial Reporting and Analysis",
      image: { src: "/img/photos/financials.jpg", alt: "Financials" },
      list: financials,
      description: "Transform raw data into actionable insights with detailed financial reporting. Our analysis helps you make informed decisions, identify trends, and plan for sustainable growth.",
      reverse: false,
    },
  ]

  return (
    <Fragment>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-xl-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
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
        <CPAsHero title='Reliable Accounting and Bookkeeping Services' description='At Ambit we handle all your accounting and bookkeeping needs, ensuring accurate, streamlined, and tax-ready finances.' />
        <TwoColumn serviceData={serviceData} />
        <section
          className="wrapper py-16 bg-light">
          <div className='col-lg-10 col-xl-9 col-xxl-7 mx-auto text-center'>
            <h1 className="display-1 fs-64 mb-5">Get Started Today.</h1>
            <p className="lead fs-22 mb-8 px-8 px-lg-0">
              Take control of your finances with Ambit’s comprehensive accounting and bookkeeping services.
              From routine bookkeeping to advanced QuickBooks consulting, we have the tools and expertise to
              simplify your financial management.
            </p>
            <span style={slideInDownAnimate('200ms')}>
              <button
                className="btn btn-lg btn-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#contact-form-popup"
              >Get Started</button>
            </span>
          </div>
        </section>
        <ContactPopup />
      </main>
    </Fragment>
  )
}

export default BookkeepingAndAccounting
