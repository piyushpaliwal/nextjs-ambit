import reactMarkdown from 'react-markdown'
import { NormalComponents } from 'react-markdown/lib/complex-types'
import { CSSProperties, FC } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import Image from 'next/image'

interface IProps {
  content: string
}

const Markdown: FC<IProps> = ({ content }) => {
  const components: Partial<NormalComponents & SpecialComponents> = {
    img: function ({ node, ...props }) {
      const fileName = (node?.properties?.src as string)?.replace('./', '')
      const metaString = node?.properties?.alt
      const alt = (metaString as string)?.replace(/ *\{[^)]*\} */g, '')
      const metaWidth = (metaString as string)?.match(/{([^}]+)x/)
      const metaHeight = (metaString as string)?.match(/x([^}]+)}/)
      const width = metaWidth ? metaWidth[1] : '768'
      const height = metaHeight ? metaHeight[1] : '432'
      const src = `/img/photos/${fileName}`

      return <Image layout="responsive" src={src} width={width} height={height} className="postImg" alt={alt} />
    }
  }
  return (
    <div className="markdown-body">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}

export default Markdown
