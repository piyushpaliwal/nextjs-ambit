import type { FC } from 'react'
import ProcessSection, { type ProcessSectionProps } from 'components/reuseable/process/ProcessSection'

export type ProcessProps = {
  title?: string
  subtitle?: string
  processSectionList?: Array<ProcessSectionProps>
}

const Process: FC<ProcessProps> = (props) => {
  return (
    <div className="row text-center">
      <div className="col-lg-12 mx-auto">
        {props.title && <h2 className="fs-18 text-uppercase text-primary mb-3">{props.title}</h2>}
        {props.subtitle && <h3 className="display-3 text-center px-xl-10 px-xxl-15 mb-10">{props.subtitle}</h3>}
        {props.processSectionList?.map((section) => (
          <ProcessSection
            key={section.key}
            title={section.title}
            subtitle={section.subtitle}
            processList={section.processList}
          />
        ))}
      </div>
    </div>
  )
}

export default Process
