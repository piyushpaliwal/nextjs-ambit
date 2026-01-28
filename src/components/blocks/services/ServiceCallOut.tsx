import type { FC } from 'react'
import type IconProps from 'types/icon'

export type AmbitService = {
  id: number
  title: string
  description?: string
  Icon?: FC<IconProps>
  why?: string
}

export type ServiceCallOutProps = {
  title?: string
  description?: string
  ambitServiceSet?: AmbitService[]
  bgColor?: string
}

const ServiceCallOut: FC<ServiceCallOutProps> = ({
  ambitServiceSet,
  title,
  description,
  bgColor = 'bg-light'
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
          <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center justify-content-center">
            {ambitServiceSet.map(({ id, Icon, title, description, why }) => (
              <div key={id} className="col-md-4 mb-4">
                <div>{Icon && <Icon className="icon-svg-sm text-primary mb-4 w-100" />}</div>
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
