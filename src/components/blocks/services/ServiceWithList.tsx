import { FC, Fragment } from 'react'
import type IconProps from 'types/icon'
import { splitPara } from 'utils/helpers'

export type ServiceListProperty = {
  id: number
  Icon?: FC<IconProps>
  title?: string
  description?: string
  serviceSet?: string[]
}

export type ServiceWithListProps = {
  title?: string
  servicePropertySet?: ServiceListProperty[]
  className?: string
  hasEvenColumns?: boolean
}

const ServiceWithList: FC<ServiceWithListProps> = ({
  title,
  servicePropertySet,
  className = 'bg-gray',
  hasEvenColumns = false
}) => {
  return (
    <section className={`wrapper ${className}`}>
      <div className="container py-14 py-md-14">
        <div className="row text-center">
          {title && (
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="display-4">{title}</h2>
            </div>
          )}
        </div>
        {servicePropertySet && (
          <div className="row gx-lg-8 gx-xl-12 gy-8 mt-9">
            {servicePropertySet.map(({ id, title, description, Icon, serviceSet }) => (
              <div key={id} className={`col-md-6 ${!hasEvenColumns ? 'col-lg-4' : ''}`}>
                <div className="d-flex flex-row">
                  {Icon && (
                    <div>
                      <Icon className="icon-svg-sm text-primary me-4" />
                    </div>
                  )}
                  <div>
                    {title && <h4 className="mb-1">{title}</h4>}
                    {description && <p className="mb-1">{description}</p>}

                    <ul className="mb-0">
                      {serviceSet?.map((offering, index) => (
                        <li key={index}>{offering}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ServiceWithList
