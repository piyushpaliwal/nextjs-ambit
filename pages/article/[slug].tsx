import Markdown from 'components/blog/Markdown'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { ArticleInfo, TocProps } from 'types/article'
import fs from 'fs'
import matter from 'gray-matter'
import BlogLayout from 'components/layouts/BlogLayout'
import { ArticleJsonLd } from 'next-seo'
import { getAbsoluteUrl } from 'utils/path'
import NextLink from 'components/reuseable/links/NextLink'
import { getToc } from 'utils/getToc'
import SocialLinks from 'components/reuseable/SocialLinks'

interface IProps {
  article: ArticleInfo
  absoluteUrl: string
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const ArticlePage: NextPage<IProps> = ({ article, absoluteUrl }) => {
  const { content, meta, toc } = article
  return (
    <>
      <ArticleJsonLd
        useAppDir={false}
        url={`${absoluteUrl}/article/${meta.slug}`}
        title="Article headline"
        images={[`${absoluteUrl}${meta.thumbnail}`]}
        datePublished={meta.date}
        dateModified={meta.date}
        authorName={[
          {
            name: 'Ambit',
            url: `${absoluteUrl}`
          }
        ]}
        publisherName="Ambit"
        publisherLogo={`${absoluteUrl}/img/logo-dark.png`}
        description={meta.description}
        isAccessibleForFree={true}
      />
      <BlogLayout title={meta.title} backgroundUrl={meta.thumbnail}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12">
              <div className="col-lg-8">
                <div className="blog single">
                  <div className="card">
                    {/* <FigureImage
                    width={960}
                    height={600}
                    src="/img/photos/b1.jpg"
                    alt="Article Header Image"
                    className="card-img-top"
                  /> */}
                    <div className="card-body">
                      <div className="classic-view">
                        <article className="post">
                          <div className="post-content mb-5">
                            <Markdown content={content} />
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                <div className="widget mt-lg-4">
                  <h4 className="widget-title mb-3">Table of Contents</h4>
                  <ul className="unordered-list bullet-primary text-reset">
                    {toc.map(
                      ({ title, anchor, id, level }) =>
                        level === 1 && (
                          <li key={anchor}>
                            <NextLink title={title} href={anchor} />
                          </li>
                        )
                    )}
                  </ul>
                  <SocialLinks className="nav social my-6" />
                  <h4 className="widget-title mb-3">Let's Connect</h4>
                  <p>
                    <NextLink title="Try Ambit" href="/contact" /> and see the difference!
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </BlogLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ ...context }) => {
  debugger
  const { slug } = context.params as Params
  const content = fs.readFileSync(`src/data/articles/${slug}.md`).toString()
  const info = matter(content)
  const toc = getToc(content)
  const article = {
    meta: {
      ...info.data,
      slug
    },
    content: info.content,
    toc: toc
  }

  const origin = getAbsoluteUrl()
  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
      absoluteUrl: origin
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('src/data/articles')
  const paths = files.map((file) => ({
    params: {
      slug: file.split('.')[0]
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export default ArticlePage
