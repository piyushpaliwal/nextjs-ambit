import FigureImage from 'components/reuseable/FigureImage'
import NextLink from 'components/reuseable/links/NextLink'
import ListColumn from 'components/reuseable/ListColumn'
import { StaticImageData } from 'next/image'
import { Fragment } from 'react'
import { FC } from 'react'
import { zoomInAnimate } from 'utils/animation'
import { splitPara } from 'utils/helpers'

export type TrustBoxProps = {
  description?: string
  featureImageSrc?: string | StaticImageData
  tagline?: string
  title?: string
  trustSet?: string[][]
  reverse?: boolean
  hasCta?: boolean
  bgColor?: string
}

const TrustBox: FC<TrustBoxProps> = (props: TrustBoxProps) => {
  const { title, description, trustSet, tagline, reverse, featureImageSrc, hasCta = true, bgColor = 'bg-gray' } = props
  const paragraphs = splitPara(description || '')

  return (
    <section className={`wrapper ${bgColor}`}>
      <div className="container pt-11 pt-xl-14 pb-1">
        <div
          className={`row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-13 align-items-center ${reverse ? 'flex-lg-row-reverse' : ''}`}
        >
          <div
            className={`offset-lg-1 position-relative col-lg-5 ${reverse && 'ms-auto'}`}
            style={zoomInAnimate('0ms')}
          >
            <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: '-1.7rem', left: '-1.5rem' }} />
            <div
              className="shape rounded bg-soft-primary rellax d-md-block"
              style={{ width: '85%', height: '90%', right: '-0.8rem', bottom: '-1.8rem' }}
            />
            <FigureImage className="w-auto rounded" src={featureImageSrc!} alt="Why Ambit" width={500} height={500} />
          </div>
          <div className={`col-lg-5 mt-xl-n10 text-start ${!reverse && 'ms-auto'}`}>
            {title && <h2 className="display-4 mb-5">{title}</h2>}
            {description && (
              <p>
                {paragraphs.map((text, index) => (
                  <Fragment key={index}>
                    {text}
                    {index < paragraphs.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            )}
            {trustSet && <ListColumn list={trustSet} classname="col-12 fs-18" />}
            {tagline && <p className="mt-4">{tagline}</p>}
            {hasCta && (
              <NextLink
                title="Schedule a Consultation"
                href="/contact"
                className="btn btn-lg btn-primary rounded mx-5"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBox
