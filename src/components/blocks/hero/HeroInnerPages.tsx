import type { FC } from 'react'
import { slideInDownAnimate } from 'utils/animation'
import Image from 'next/image'

// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink'
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox'
import { splitPara } from 'utils/helpers'
import type { WithImg } from 'types/common'

export type HeroInnerPagesProps = {
  title: string
  description?: string
  buttonHref?: string
  buttonTitle?: string
} & Omit<WithImg, 'imgSrcSet'>

const HeroInnerPages: FC<HeroInnerPagesProps> = (props) => {
  // use video popup
  useLightBox()
  const { imgSrc, imgAlt, title, buttonHref, buttonTitle } = props
  const descriptionSet = splitPara(props.description || '')
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
      style={{ backgroundColor: '#131a40' }}
    >
      <div className="container pt-18 pb-16">
        <div className="row gx-0 gy-12 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
            {title && (
              <h1 className="display-2 mb-5 text-white" style={slideInDownAnimate('600ms')}>
                {title}
              </h1>
            )}

            {descriptionSet.map((text, index) => (
              <p key={index} className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                {text}
              </p>
            ))}

            {(buttonHref || buttonTitle) && (
              <div className="d-flex justify-content-center justify-content-lg-start">
                <span style={slideInDownAnimate('1200ms')}>
                  <NextLink
                    title={buttonTitle || ''}
                    href={buttonHref || '#'}
                    className="btn btn-lg btn-white rounded-pill me-2"
                  />
                </span>
              </div>
            )}
          </div>

          {(imgAlt || imgSrc) && (
            <div className="col-lg-5 offset-lg-1">
              <div className="swiper-container shadow-lg">
                <Image alt={imgAlt || ''} className="rounded" src={imgSrc || ''} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroInnerPages
