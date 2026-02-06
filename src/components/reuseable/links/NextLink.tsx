import Link from 'next/link'
import { FC, ReactElement } from 'react'

// ==============================================================
type NextLinkProps = {
  href: string
  className?: string
  title: string | ReactElement
  target?: '_blank' | '_self' | '_parent' | '_top'
}
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title, target } = props

  return (
    <Link href={href}>
      <a className={className} target={target}>
        {title}
      </a>
    </Link>
  )
}

export default NextLink
