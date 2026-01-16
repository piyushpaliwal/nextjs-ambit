import ListColumn from 'components/reuseable/ListColumn'
export interface About8Props {
  title: string
  subtitle?: string
  description?: string
  aboutList?: string[][]
  imgSrc?: string
  imgAlt?: string
  imgSrcSet?: string[]
}

export default function About8(props: About8Props) {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-14">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                className="w-auto"
                src={props.imgSrc || `/img/illustrations/i9.png`}
                srcSet={props.imgSrcSet?.join(', ') || '/img/illustrations/i9@2x.png 2x'}
                alt={props.imgAlt || ''}
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-3">{props.title || 'Have Perfect Control'}</h3>
            {props.subtitle && <p className="lead fs-lg lh-sm">{props.subtitle}</p>}
            {props.description && <p className="mb-6">{props.description}</p>}

            {props.aboutList && <ListColumn list={props.aboutList} />}
          </div>
        </div>
      </div>
    </section>
  )
}
