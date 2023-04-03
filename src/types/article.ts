import { type } from 'os'

interface ArticleMeta {
  title: string
  slug: string
  description: string
  thumbnail: string
  tags?: string[]
  category: string
  date: string
}

interface ArticleInfo {
  meta: ArticleMeta
  content: string
}

export type { ArticleInfo, ArticleMeta }
