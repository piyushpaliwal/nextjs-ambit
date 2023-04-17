import { FC } from 'react'
import { ArticleMeta } from 'types/article'
import Image from 'next/image'
import NextLink from 'components/reuseable/links/NextLink'

interface iProps {
  article: ArticleMeta
}

const BlogCard: FC<iProps> = ({ article }) => {
  const { tags, thumbnail, description, slug, title, category, date } = article
  return (
    <>
      <article className="item post col-md-6">
        <div className="card">
          {thumbnail && (
            <figure className="card-img-top overlay overlay-1 hover-scale">
              <a className="link-dark" href={`article/${slug}`}>
                <Image width={960} height={600} src={thumbnail} alt="blog" layout="responsive" />
                <span className="bg" />
              </a>
              <figcaption>
                <h5 className="from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
          )}
          <div className="card-body">
            <div className="post-header">
              <div className="post-category text-line">
                <NextLink title={category} href="#" className="hover" />
              </div>

              <h2 className="post-title mt-1 mb-0">
                <NextLink title={title} className="link-dark" href={`/article/${slug}`} />
              </h2>
            </div>

            <div className="post-content">
              <p>{description}</p>
            </div>
          </div>
          <div className="card-footer">
            <ul className="post-meta d-flex mb-0">
              <li className="post-date">
                <i className="uil uil-calendar-alt" />
                <span>
                  {new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogCard
