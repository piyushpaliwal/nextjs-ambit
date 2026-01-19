import type { NextPage } from 'next'
import type { FC } from 'react'
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero'
import { Footer } from 'components/blocks/footer'
import { Process } from 'components/blocks/process'
import ContactPopup from 'components/common/ContactPopup'
import Header from 'components/blocks/header/Header'
import { About8 } from 'components/blocks/about'
import ServiceCallOut from 'components/blocks/services/ServiceCallOut'
import { FAQ2 } from 'components/blocks/faq'
import Cta from 'components/common/cta'
import Services11 from 'components/blocks/services/Services11'
// ------ data ------
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
  whyUsProps,
  governanceSet
} from 'data/home-US'

import type IconProps from 'types/icon'

export type GovernanceProperty = {
  id: number
  Icon?: FC<IconProps>
  title?: string
  offeringSet?: string[]
}

const HomeUS: NextPage = () => {
  return (
    <>
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
            {governanceSet && (
              <div className="row gx-lg-8 gx-xl-12 gy-8 mt-9">
                {governanceSet.map(({ id, title, Icon, offeringSet }) => (
                  <div key={id} className="col-md-6 col-lg-4">
                    <div className="d-flex flex-row">
                      {Icon && (
                        <div>
                          <Icon className="icon-svg-sm text-primary me-4" />
                        </div>
                      )}
                      <div>
                        {title && <h4 className="mb-1">{title}</h4>}
                        <ul className="mb-0">
                          {offeringSet?.map((offering, index) => (
                            <li key={index}>{offering}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
    </>
  )
}

export default HomeUS
