import { workingSteps } from 'data/working-steps'
import { FC, Fragment } from 'react'

type ServiceProps = {
  icon: FC<{ className?: string }>
  title: string
  description: string
}

const ServiceCard: FC<ServiceProps> = ({ icon: Icon, title, description }) => (
  <div className="col-md-4 text-center">
    <Icon className="icon-svg-sm solid-duo text-purple-pink mb-4 w-12 h-12" />
    <h4 className="mb-1">{title}</h4>
    <p className="fs-15">{description}</p>
  </div>
)

const Services: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="display-4 mb-3">How Ambit works</h2>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 justify-content-center process-wrapper text-center mt-9">
        {workingSteps.slice(0, 2).map((step, index) => (
          <ServiceCard key={index} {...step} />
        ))}
      </div>

      <div className="row gx-lg-8 gx-xl-12 justify-content-center process-wrapper text-center mt-9">
        {workingSteps.slice(2).map((step, index) => (
          <ServiceCard key={index} {...step} />
        ))}
      </div>
    </Fragment>
  )
}

export default Services
