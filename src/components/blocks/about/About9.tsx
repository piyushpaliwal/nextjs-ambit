import { Fragment } from 'react'
import type { WithImg } from 'types/common'
import { splitPara } from 'utils/helpers'
// CUSTOM DATA
// import { ServiceCard3 } from 'components/reuseable/service-cards'
// import { whatWeAre } from 'data/demo-8'

export type About9Props = {
  title?: string
  subtitle?: string
  description?: string
  bgColor?: string
} & WithImg

export default function About9(props: About9Props) {
  const paragraphs = splitPara(props.description || '')
  return (
    <section className={`wrapper ${props.bgColor || 'bg-light'}`}>
      <div className="container py-14 py-md-14">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
          <div className="col-md-8 col-lg-6 position-relative">
            <div
              className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
              style={{ top: '-2rem', left: '-1.9rem' }}
            />

            <figure className="rounded">
              <img
                src={typeof props.imgSrc === 'string' ? props.imgSrc : ''}
                srcSet={props.imgSrcSet?.join(',') || ''}
                alt={props.imgAlt || ''}
              />
            </figure>
          </div>

          <div className="col-lg-6">
            {props.title && <h2 className="display-4 mb-3">{props.title}</h2>}
            {props.subtitle && <p className="lead fs-lg">{props.subtitle}</p>}
            {props.description && (
              <p className="mb-6">
                {paragraphs.map((text, index) => (
                  <Fragment key={index}>
                    {text}
                    {index < paragraphs.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            )}

            {/*<div className="row gx-xl-10 gy-6">
          {whatWeAre.map(({ id, title, description, Icon }) => (
            <div className="col-md-6" key={id}>
              <ServiceCard3 title={title} description={description} Icon={<Icon className="icon-svg-sm me-4" />} />
            </div>
          ))}
        </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
