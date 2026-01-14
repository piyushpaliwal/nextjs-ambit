import { FC } from 'react'

export type ProcessListItem = {
  id: number
  title: string
  description: string
  Icon: FC<{ className?: string }>
}

export type ProcessSectionProps = {
  title: string
  subtitle: string
  processList: ProcessListItem[]
  key?: number
}

const ProcessSection: FC<ProcessSectionProps> = ({ title, subtitle, processList }) => (
  <div className="mb-10">
    <h3 className="display-3 text-center text-primary mb-3">{title}</h3>
    <p className="fs-15 text-navy text-center mb-5">{subtitle}</p>
    <div className="row gx-lg-8 gx-xl-4 justify-content-center process-wrapper arrow text-center gap-5">
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

export default ProcessSection
