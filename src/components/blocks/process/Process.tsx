import { FC } from 'react'
// -------- data -------- //
import { processOutsourcingList } from 'data/process-outsourcing'
import { processStaffingList } from 'data/process-staffing'

const ProcessSection: FC<{
  title: string
  subtitle: string
  processList: { id: number; title: string; description: string; Icon: FC<{ className?: string }> }[]
}> = ({ title, subtitle, processList }) => (
  <div className="mb-10">
    <h3 className="display-3 text-center text-primary mb-3">{title}</h3>
    <p className="fs-15 text-navy text-center mb-5">{subtitle}</p>
    <div className="row gx-lg-8 gx-xl-4 justify-content-center process-wrapper arrow text-center">
      {processList.map(({ id, title, description, Icon }) => (
        <div className="col-md-2" key={id}>
          <Icon className="icon-svg-sm solid-duo text-purple-pink mb-4" />
          <h4 className="fs-21">{title}</h4>
          <p className="fs-13">{description}</p>
        </div>
      ))}
    </div>
  </div>
)

const Process: FC = () => {
  return (
    <div className="row text-center">
      <div className="col-lg-12 mx-auto">
        <h2 className="fs-18 text-uppercase text-primary mb-3">Our Working Process</h2>
        <h3 className="display-3 text-center px-xl-10 px-xxl-15 mb-10">
          Simple, and Smooth 4 pointer delivery process
        </h3>
        <ProcessSection
          title="Outsourcing Services"
          subtitle="Streamline Your Operations: Outsource with Ease"
          processList={processOutsourcingList}
        />
        <ProcessSection
          title="Dedicated Offshore Staffing"
          subtitle="Find Your Perfect Match: Offshore Staffing"
          processList={processStaffingList}
        />
      </div>
    </div>
  )
}

export default Process
