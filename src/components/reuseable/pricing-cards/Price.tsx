import { FC } from 'react'

// ======================================
type PriceProps = {
  value: number
  classes?: string
  duration: string
  currency?: string
}
// ======================================

const Price: FC<PriceProps> = (props) => {
  const { value, duration, classes, currency = '$' } = props

  return (
    <div className={`price justify-content-center ${classes}`}>
      {value == 0 && <span style={{ fontSize: '1.6rem' }}>Talk to us</span>}
      {value != 0 && (
        <>
          <span className="price-currency">{currency}</span>
          <span className="price-value">{value}</span>
          <span className="price-duration">{duration}</span>
        </>
      )}
    </div>
  )
}

export default Price
