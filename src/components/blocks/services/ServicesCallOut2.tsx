import type { FC } from 'react'
import type IconProps from 'types/icon'

export type CallOut2Services = {
  id: number
  title?: string
  description?: string
  Icon?: FC<IconProps>
}

export type ServicesCallOut2Props = {
  title?: string
  serviceSet?: CallOut2Services[]
  bgColor?: string
}

const ServicesCallOut2: FC<ServicesCallOut2Props> = ({ title, serviceSet, bgColor = 'bg-light' }) => {
  return (
    <section className={`wrapper ${bgColor}`}>
      <div className="container py-14 py-md-14">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            {title && <h2 className="display-4 mb-8">{title}</h2>}
          </div>
        </div>
        {serviceSet && (
          <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center justify-content-center">
            {serviceSet.map(({ id, title, description, Icon }) => (
              <div key={id} className="col-md-3">
                {Icon && <Icon className="icon-svg-sm text-primary mb-4 w-100" />}
                {title && <h4 className="mb-1">{title}</h4>}
                {description && <p>{description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesCallOut2
