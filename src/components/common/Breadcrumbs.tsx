import Link from 'next/link'
import { type FC, Fragment } from 'react'

// --- Types ---
export interface BreadcrumbItem {
  label: string
  href: string
  isActive?: boolean
}

export type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const Breadcrumbs: FC<BreadcrumbProps> = ({ items }) => {
  if (!items || items.length === 0) return null

  return (
    <nav
      aria-label="breadcrumb"
      className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mb-4 opacity-75 animate__animated animate__fadeInDown"
    >
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <span className="small text-white-50">/</span>}

          {item.isActive ? (
            <span className="text-white small fw-bold">{item.label}</span>
          ) : (
            <Link href={item.href}>
              <a className="text-white text-decoration-none small breadcrumb-link">{item.label}</a>
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumbs
