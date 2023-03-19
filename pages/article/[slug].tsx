import Markdown from 'components/blog/Markdown'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { ArticleInfo } from 'types/article'
import fs from 'fs'
import matter from 'gray-matter'
import BlogLayout from 'components/layouts/BlogLayout'

interface IProps {
  article: ArticleInfo
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const ArticlePage: NextPage<IProps> = ({ article }) => {
  const { content, meta } = article
  return (
    <BlogLayout title={meta.title} backgroundUrl={meta.thumbnail}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="blog single mt-n20">
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
          </div>
        </div>
      </section>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ ...context }) => {
  const { slug } = context.params as Params

  const content = fs.readFileSync(`src/data/articles/${slug}.md`).toString()
  const info = matter(content)
  const article = {
    meta: {
      ...info.data,
      slug
    },
    content: info.content
  }

  return {
    props: {
      article: article
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
