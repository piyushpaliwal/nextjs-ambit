import IconRenderer, { type IconRendererProps } from 'components/common/IconRenderer'
import type { FC } from 'react'

export type AmbitService = {
  id: number
  title: string
  description?: string
  iconConfig?: IconRendererProps
  why?: string
}

export type ServiceCallOutProps = {
  title?: string
  description?: string
  ambitServiceSet?: AmbitService[]
  bgColor?: string
  serviceClassName?: string
  serviceCardClassName?: string
  canHover?: boolean
}

const ServiceCallOut: FC<ServiceCallOutProps> = ({
  ambitServiceSet,
  title,
  description,
  bgColor = 'bg-light',
  serviceClassName = '',
  serviceCardClassName = '',
  canHover = false
}: ServiceCallOutProps) => {
  return (
    <section className={`wrapper ${bgColor}`}>
      <div className="container py-14 py-md-14">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-10">
            {title && <h2 className="display-4 mb-3">{title}</h2>}
            {description && <h3>{description}</h3>}
          </div>
        </div>
        {ambitServiceSet && (
          <div
            className={`${canHover ? 'gap-6' : ''}  row gx-lg-8 gx-xl-12 process-wrapper text-center justify-content-center ${serviceClassName}`}
          >
            {ambitServiceSet.map(({ id, iconConfig, title, description, why }) => (
              <div
                key={id}
                className={`${canHover ? 'bg-transparent border border-3 border-primary rounded-3 w-22 h-auto cursor-default shadow-hover py-4' : ''} col-md-4 mb-6 ${serviceCardClassName}`}
              >
                <div>
                  {iconConfig && <IconRenderer {...iconConfig} className="icon-svg-sm text-primary mb-4 w-100" />}
                </div>
                <h4 className="mb-1">{title}</h4>
                {description && <p className="mb-0">{description}</p>}
                {why && (
                  <p>
                    <span className="fst-italic">Why it matters:</span> {why}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
export default ServiceCallOut
