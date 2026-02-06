import IconRenderer, { type IconRendererProps } from 'components/common/IconRenderer'
import type { FC } from 'react'

export type ProcessListItem = {
  id: number
  title: string
  description?: string
  iconConfig?: IconRendererProps
}

export type ProcessSectionProps = {
  key: number
  title?: string
  subtitle?: string
  processList: ProcessListItem[]
}

const ProcessSection: FC<ProcessSectionProps> = ({ title, subtitle, processList }) => (
  <div className="mb-10">
    {title && <h3 className="display-3 text-center text-primary mb-3">{title}</h3>}
    {subtitle && <p className="fs-15 text-navy text-center mb-5">{subtitle}</p>}
    <div className="row gx-lg-8 gx-xl-4 justify-content-center process-wrapper arrow text-center gap-5">
      {processList.map(({ id, title, description, iconConfig }) => (
        <div className="col-md-2" key={id}>
          {iconConfig && <IconRenderer {...iconConfig} className="icon-svg-sm solid-duo text-purple-pink mb-4" />}
          {title && <h4 className="fs-21">{title}</h4>}
          {description && <p className="fs-13">{description}</p>}
        </div>
      ))}
    </div>
  </div>
)

export default ProcessSection
