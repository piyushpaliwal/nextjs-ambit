import ListColumn from 'components/reuseable/ListColumn'
import type { FC } from 'react'
import type { WithImg } from 'types/common'

export type About17Props = {
  title?: string
  subtitle?: string
  description?: string
  aboutList?: string[][]
  bgColor?: string
} & WithImg

const About17: FC<About17Props> = ({
  title,
  subtitle,
  description,
  aboutList,
  bgColor = 'bg-light',
  imgAlt = '',
  imgSrc = '/img/illustrations/3d2.png',
  imgSrcSet = ['/img/illustrations/3d2@2x.png 2x']
}) => {
  return (
    <section className={`wrapper ${bgColor || 'bg-light'}`}>
      <div className="container py-14 py-md-14">
        <div className="row gx-3 gy-10 mb-15 mb-md-18 align-items-center">
          <div className="col-lg-5 offset-lg-1">
            <figure>
              <img
                className="w-auto"
                src={typeof imgSrc === 'string' ? imgSrc : ''}
                srcSet={imgSrcSet?.join(', ') || ''}
                alt={imgAlt || ''}
              />
            </figure>
          </div>

          <div className="col-lg-5 offset-lg-1">
            {title && <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">{title}</h2>}{' '}
            {subtitle && <h3 className="display-4 mb-4">{subtitle}</h3>}
            {description && <p className="mb-6">{description}</p>}
            {aboutList && <ListColumn list={aboutList} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About17
