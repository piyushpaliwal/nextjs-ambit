import { FC } from 'react'
import Price from './Price'
import NextLink from '../links/NextLink'
import Link from 'next/link'

// ================================================================
type PricingCard2Props = {
  plan: string
  features: string[]
  yearlyPrice: number
  monthlyPrice: number
  expensesUpto: number
  activeYearly: boolean
  roundedButton?: boolean
  includeFeaturesFrom?: string
  planSuffix?: string
  suffix?: string
  popular: boolean
}
// ================================================================
const formatNum = (num: number, digits: number): string => {
  let units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  let floor = Math.floor(Math.abs(num).toString().length / 3)
  let value = +(num / Math.pow(1000, floor))
  return value.toFixed(value > 1 ? digits : 2) + units[floor - 1]
}
const PricingCard2: FC<PricingCard2Props> = (props) => {
  const {
    plan,
    features,
    yearlyPrice,
    monthlyPrice,
    activeYearly,
    roundedButton,
    popular,
    expensesUpto,
    includeFeaturesFrom
  } = props

  const yearClasses = activeYearly ? 'price-show' : 'price-hide price-hidden'
  const monthClasses = !activeYearly ? 'price-show' : 'price-hide price-hidden'

  return (
    <div className="pricing card shadow-lg text-center">
      <div className="card-body">
        <h4 className="card-title">{plan}</h4>
        {yearlyPrice > 0 && (
          <p className="text-muted mb-2">Bookkeeping for upto ${formatNum(expensesUpto, 0)} in monthly expenses</p>
        )}

        {yearlyPrice === 0 && (
          <p className="text-muted mb-2">
            Recommended for CPAs
            <br />
            <span className="text-white">.</span>
          </p>
        )}
        <div className="prices text-dark">
          <Price duration="mo" value={monthlyPrice} classes={monthClasses} />
          <Price duration="yr" value={yearlyPrice} classes={yearClasses} />
        </div>
        <p className="text-muted fs-sm mt-2 mb-2">
          Billed Annually, you save{' '}
          <span className="text-pink" style={{ fontWeight: 'bold' }}>
            ${(yearlyPrice > 0 ? (monthlyPrice * 12 * 15) / 100 : 2000).toLocaleString('en-US')}
          </span>
        </p>
        <p className="text-muted mt-7">
          {includeFeaturesFrom ? `Includes all features from ${includeFeaturesFrom}` : 'Includes the following'}
        </p>

        <ul className="icon-list bullet-bg bullet-soft-primary mt-5 mb-8 text-start">
          {features.map((item, i) => (
            <li key={i}>
              <i className="uil uil-check" />
              <span>
                <strong>{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={{
            pathname: '/contact',
            query: {
              plan: plan,
              activeYearly: activeYearly
            }
          }}
        >
          <span className={`btn btn-primary rounded`}>Get Started</span>
        </Link>
      </div>
    </div>
  )
}

export default PricingCard2
