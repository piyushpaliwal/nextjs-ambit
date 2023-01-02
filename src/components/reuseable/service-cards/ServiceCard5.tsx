import { FC } from 'react'
import IconProps from 'types/icon'

// ===============================================================
type ServiceCard5Props = {
  title: string
  description: string
  cardClassName?: string
  iconClassName?: string
  Icon: (props: IconProps) => JSX.Element
}
// ===============================================================

const ServiceCard5: FC<ServiceCard5Props> = (props) => {
  const { title, description, Icon, cardClassName = '', iconClassName } = props

  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <Icon className={iconClassName} />
          <h4>{title}</h4>
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard5
