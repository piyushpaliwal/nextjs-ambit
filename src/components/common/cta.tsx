import Link from 'next/link'
import type { FC } from 'react'

export type CtaProps = {
  title?: string
  description?: string
  buttonTitle?: string
  buttonHref?: string
}

const Cta: FC<CtaProps> = ({ title, description, buttonTitle, buttonHref }: CtaProps) => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-14">
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
            {title && <h2 className="display-4 mb-3">{title}</h2>}
            {description && <p className="lead fs-lg mb-6">{description}</p>}
            <Link href={buttonHref || 'https://calendly.com/ambit-accounting/15min'} passHref legacyBehavior>
              <a target="_blank" className="btn btn-primary rounded mb-0 text-nowrap">
                {buttonTitle || `Schedule a Consultation`}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
