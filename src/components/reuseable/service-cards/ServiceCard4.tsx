import { FC } from 'react'

// ================================================
type ServiceCard4Props = {
  title: string
  Icon: JSX.Element
  className?: string
  description: string
}
// ================================================

const ServiceCard4: FC<ServiceCard4Props> = (props) => {
  const { title, description, Icon, className = 'd-flex flex-row' } = props
  return (
    <div className={className}>
      <div>{Icon}</div>

      <div>
        <h4 className="mb-1">{title}</h4>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard4
