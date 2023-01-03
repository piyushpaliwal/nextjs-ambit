import { FC } from 'react'
// -------- data -------- //
import { processList } from 'data/process'

const Process: FC = () => {
  return (
    <div className="row text-center">
      <div className="col-lg-10 mx-auto">
        <h2 className="fs-18 text-uppercase text-primary mb-3">Our Working Process</h2>
        <h3 className="display-3 text-center px-xl-10 px-xxl-15 mb-10">
          Simple, and Smooth 4 pointer delivery process
        </h3>
        <div className="row gx-lg-8 gx-xl-12 process-wrapper arrow text-center">
          {processList.map(({ id, title, description, Icon }) => (
            <div className="col-md-3" key={id}>
              <Icon className="icon-svg-sm solid-duo text-purple-pink mb-4" />
              <h3 className="fs-22">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Process
