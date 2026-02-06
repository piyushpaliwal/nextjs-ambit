import Head from 'next/head'
import { Navbar } from '../navbar'
import type { FC } from 'react'
import type { NavbarProps } from '../navbar/Navbar'

export type HeaderProps = {
  title?: string
  description?: string
  keywords?: string
} & NavbarProps

const Header: FC<HeaderProps> = ({ title, description, keywords, ...props }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-xl-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          social
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min"
              title="Schedule a Meeting"
              className="btn btn-sm btn-primary rounded-pill fs-sm px-2 py-1"
            >
              Schedule a Meeting
            </a>
          }
          {...props}
        />
      </header>
    </>
  )
}

export default Header
