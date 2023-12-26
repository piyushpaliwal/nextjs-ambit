import BlogCard from 'components/blog/Card'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ArticleMeta } from 'types/article'
import fs from 'fs'
import matter from 'gray-matter'
import BlogLayout from 'components/layouts/BlogLayout'

interface IProps {
  articles: ArticleMeta[]
}

const BlogsPage: NextPage<IProps> = ({ articles }) => {
  return (
    <BlogLayout title="Blogs" backgroundUrl="">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog | Ambit Tax & Accounting</title>
        <meta
          name="description"
          content="Accounting, bookkeeping, and tax tips to help you understand your small business finances."
        />
      </Head>
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="blog grid grid-view">
                <div className="row isotope gx-md-8 gy-8 mb-8 mt-n20">
                  {articles.map((article, i) => (
                    <BlogCard key={i} article={article} />
                  ))}
                </div>
              </div>
              {/* <Pagination className="justify-content-start" /> */}
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync('src/data/articles')

  let articles: ArticleMeta[] = files.map((file) => {
    const data = fs.readFileSync(`src/data/articles/${file}`).toString()
    return {
      ...matter(data).data,
      slug: file.split('.')[0]
    } as ArticleMeta
  })

  articles.sort((a, b) => {
    // sort by date descending
    if (a.date > b.date) return -1
    else if (a.date < b.date) return 1
    else return 0
  })

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles))
    }
  }
}

export default BlogsPage
