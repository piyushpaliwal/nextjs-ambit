import { FC } from 'react'
import data from 'data/princing'
import NextLink from 'components/reuseable/links/NextLink'
import Link from 'next/link'

const Pricing: FC = () => {
  const MOST_POPULAR = 'Fixed Monthly'
  return (
    <div>
      <div className="row text-center">
        <div className="col-md-10 col-lg-8 col-xl-9 col-xxl-8 mx-auto">
          <h2 className="fs-18 text-uppercase text-primary mb-3">Our Pricing</h2>
          <h3 className="display-3 ls-sm mb-10 px-xl-15">
            Providing the best "value for money" service is something we take great pride in.
          </h3>
        </div>
      </div>

      <div className="pricing-wrapper">
        <div className="row gx-0 gy-6 card-deck">
          {data.pricingList.map(({ price, plan, features, suffix }) => (
            <div className="col-md-6 col-lg-3" key={plan}>
              <div className={`pricing card shadow-none ${plan === MOST_POPULAR ? 'bg-gray' : ''}`}>
                <div className="card-body">
                  <h4 className="card-title ls-sm">{plan}</h4>
                  <div className="prices text-dark">
                    <div className="price justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">{price}</span>
                      <span className="price-duration">{suffix && `/${suffix}`}</span>
                    </div>
                  </div>

                  <ul className="icon-list bullet-green mt-7 mb-8">
                    {features.map((item, i) => {
                      const itemArr = item.split(' ')

                      return (
                        <li key={item + i}>
                          <i className="uil uil-check" />
                          <strong>{itemArr[0]}</strong> {itemArr[1]} {itemArr[2]}
                        </li>
                      )
                    })}
                  </ul>
                  <Link
                    href={{
                      pathname: '/contact',
                      query: {
                        plan: plan
                      }
                    }}
                  >
                    <span className={`btn ${plan === MOST_POPULAR ? 'btn-primary' : 'btn-soft-primary'}  rounded`}>
                      Choose Plan
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
