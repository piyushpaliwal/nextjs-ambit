import type { NextPage } from 'next'
import { Fragment } from 'react'
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero'
import { Softwares } from 'components/blocks/clients'
import { Footer } from 'components/blocks/footer'
import { Testimonial } from 'components/blocks/testimonial'
import { Services } from 'components/blocks/services'
import { Process } from 'components/blocks/process'
import Services1 from 'components/blocks/services/Services1'
import ContactPopup from 'components/common/ContactPopup'
import type { ProcessProps } from 'components/blocks/process/Process'
import { processOutsourcingList } from 'data/process-outsourcing'
import { processStaffingList } from 'data/process-staffing'
import Header from 'components/blocks/header/Header'
import type { HomePageData } from 'types/pages'
import { useTransformedData } from 'hooks/useTransformedData'

const processProps: ProcessProps = {
  title: 'Our Working Process',
  subtitle: 'Simple, and Smooth 4 pointer delivery process',
  processSectionList: [
    {
      key: 1,
      title: 'Outsourcing Services',
      subtitle: 'Streamline Your Operations: Outsource with Ease',
      processList: processOutsourcingList
    },
    {
      key: 2,
      title: 'Dedicated Offshore Staffing',
      subtitle: 'Find Your Perfect Match: Offshore Staffing',
      processList: processStaffingList
    }
  ]
}
interface Props {
  rawData: HomePageData
}
const HomeDefault: NextPage<Props> = ({ rawData }) => {
  const { headerProps, heroProps } = useTransformedData(rawData, 'home')

  return (
    <Fragment>
      <Header {...headerProps} />
      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        {heroProps && <Hero {...heroProps} />}
        <ContactPopup />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            {/* ========== Services ========== */}
            <Services1 />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            {/* ========== How we work ========== */}
            <Services />
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            {/* software expertise */}
            <Softwares />
          </div>
        </section>
        {/* <section className="wrapper bg-light">
          <div className="container py-14 py-md-14">
            <Pricing />
          </div>
        </section> */}
        {/* working process */}
        <Process {...processProps} bgColor="bg-gray" />

        <section
          className="wrapper image-wrapper bg-image bg-overlay"
          style={{ backgroundImage: 'url(/img/photos/bg-testimonial.jpg)' }}
        >
          <div className="container py-14">
            {/* testimonials */}
            <Testimonial />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  )
}

export default HomeDefault
