import type { NextPage } from 'next'
import { Fragment } from 'react'
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero'
import { Footer } from 'components/blocks/footer'
import { Process } from 'components/blocks/process'
import ContactPopup from 'components/common/ContactPopup'
import Header from 'components/blocks/header/Header'
import {
  coreServiceProps,
  ctaProps,
  headerProps,
  heroProps,
  industriesProps,
  processProps,
  supportProps,
  usHomeFaqSet,
  whyStayWithUsProps,
  whyUsProps
} from 'data/home-US'
import { About8 } from 'components/blocks/about'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import { FAQ2 } from 'components/blocks/faq'
import Cta from 'components/common/cta'
import Analytics from 'icons/lineal/Analytics'
import Target from 'icons/solid-mono/Target'
import Savings from 'icons/lineal/Savings'
import Services11 from 'components/blocks/services/Services11'

const HomeUS: NextPage = () => {
  return (
    <Fragment>
      <Header {...headerProps} />
      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero {...heroProps} />
        <ContactPopup />

        {/*--- who we support ---*/}
        <About8 {...supportProps} />

        {/*--- why ambit ---*/}
        <ServiceCallOut {...whyUsProps} bgColor="bg-gray" />
        {/* our services */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <Services11 {...coreServiceProps} />
          </div>
        </section>

        {/* how we work */}
        <section className="wrapper bg-soft-primary">
          <div className="container py-14 py-md-14">
            {/* working process */}
            <Process {...processProps} />
          </div>
        </section>
        {/* industries we serve */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <Services11 {...industriesProps} reverse />
          </div>
        </section>
        {/* Governanace, Data Security and Compliance */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="display-4">Governance, Data Security & Compliance</h2>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-8 mt-9">
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <Target className="icon-svg-sm text-primary me-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">Data Protection</h4>
                    <ul className="mb-0">
                      <li>GDPR-compliant and US privacy-aligned data handling</li>
                      <li>Role-based access and audit logs</li>
                      <li>Secure client portals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <Analytics className="icon-svg-sm text-primary me-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">Information Security</h4>
                    <ul className="mb-0">
                      <li>ISO-aligned security principles</li>
                      <li>Encrypted data transfer and storage</li>
                      <li>Multi-factor authentication and monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <Savings className="icon-svg-sm text-primary me-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">Governance and Internal Controls</h4>
                    <ul className="mb-0">
                      <li>Segregation of duties</li>
                      <li>Partner review and sign-off</li>
                      <li>Statutory compliance checklists</li>
                      <li>Audit-ready documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why long-term Client Stay with ambit */}
        <ServiceCallOut {...whyStayWithUsProps} />
        {/*--- faq ---*/}
        <FAQ2 faqSet={usHomeFaqSet} />
        {/*--- CTA ---*/}
        <Cta {...ctaProps} />
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  )
}

export default HomeUS
