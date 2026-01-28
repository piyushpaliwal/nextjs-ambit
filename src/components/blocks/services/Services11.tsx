import NextLink from 'components/reuseable/links/NextLink'
import { ServiceCard4 } from 'components/reuseable/service-cards'
import type { FC } from 'react'
import type IconProps from 'types/icon'

export type Service11Services = {
  id: number
  Icon?: FC<IconProps>
  title?: string
  description?: string
}

export type Service11Props = {
  title: string
  description: string
  serviceSet: Array<Service11Services>
  ctaText?: string
  ctaHref?: string
  reverse?: boolean
  bgColor?: string
}

export default function Services11({
  title,
  description,
  serviceSet,
  ctaHref,
  ctaText,
  reverse,
  bgColor = 'bg-light'
}: Service11Props) {
  return (
    <section className={`wrapper ${bgColor}`}>
      <div className="container py-14 py-md-14">
        <div className={`row gx-lg-8 gx-xl-12 gy-10 align-items-center${reverse ? ' flex-row-reverse' : ''}`}>
          <div className="col-md-8 col-lg-6 order-lg-2 position-relative">
            <div
              className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
              style={reverse ? { top: '-2rem', left: '-1.9rem' } : { top: '-2rem', right: '-1.9rem' }}
            />

            <figure className="rounded">
              <img src="/img/photos/about11.jpg" srcSet="/img/photos/about11@2x.jpg 2x" alt="" />
            </figure>
          </div>

          <div className="col-lg-6">
            <h2 className="display-4 mb-3">{title || 'What We Do?'}</h2>
            <p className="lead fs-lg mb-8 pe-xxl-2">{description}</p>

            <div className="row gx-xl-10 gy-6">
              {serviceSet.map(({ id, title, description, Icon }) => (
                <div className="col-md-6 col-lg-12 col-xl-6" key={id}>
                  <ServiceCard4
                    title={title}
                    description={description}
                    Icon={Icon && <Icon className="icon-svg-sm text-primary me-5" />}
                  />
                </div>
              ))}
            </div>
            {(ctaText || ctaHref) && (
              <div className="my-10 ">
                <NextLink
                  title={ctaText || 'Schedule a Consultation'}
                  href={ctaHref || '/contact'}
                  className="btn btn-lg btn-primary rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
