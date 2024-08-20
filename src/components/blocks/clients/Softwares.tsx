import { FC } from 'react'
import FigureImage from 'components/reuseable/FigureImage'
// -------- data -------- //
import { softwareList } from 'data/client'

const Softwares: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
      <div className="col-lg-5 mt-lg-2">
        <h2 className="fs-18 text-uppercase text-primary mb-3">Our Software Expertise</h2>
        <h3 className="display-5 mb-3 pe-xxl-5">24/7 access to accurate financials</h3>
        <p className="mb-2 pe-xxl-7">
          We bring solutions to make life easier for our customersWith an experienced team of accounting professionals,
          we offer businesses a full range of accounting services, from bookkeeping to part-time CFO and accounting
          systems integration. Our experts can augment your existing team, work with you to streamline and optimize
          accounting processes, and help manage accounting work overflow during peak periods.
        </p>
        <p className="mb-0 pe-xxl-7">
          You have 24/7 access to accurate, timely financial data and reporting, which positions your business with the
          agility to react quickly to changes, positively impacting decision-making.
        </p>
      </div>

      <div className="col-lg-7">
        <div className="row row-cols-2 row-cols-md-3 gx-0 gx-md-10 gx-xl-15 gy-8">
          {softwareList.map((item) => (
            <div className="col" key={item}>
              <FigureImage width={270} height={193} src={item} className="px-3 px-md-0 px-xxl-2" alt="Software" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Softwares
