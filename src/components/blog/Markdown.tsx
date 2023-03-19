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
      debugger
      const fileName = node.properties.src.replace('./', '')
      const metaString = node.properties.alt
      const alt = metaString?.replace(/ *\{[^)]*\} */g, '')
      const metaWidth = metaString.match(/{([^}]+)x/)
      const metaHeight = metaString.match(/x([^}]+)}/)
      const width = metaWidth ? metaWidth[1] : '768'
      const height = metaHeight ? metaHeight[1] : '432'
      const isPriority = metaString?.toLowerCase().match('{priority}')
      const src = `/img/photos/${fileName}`

      return (
        <Image
          layout="responsive"
          src={src}
          width={width}
          height={height}
          className="postImg"
          alt={alt}
          priority={isPriority}
        />
      )
    }
  }
  return (
    <div className="markdown-body">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}

export default Markdown
