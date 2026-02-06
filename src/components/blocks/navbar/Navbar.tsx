import type LinkType from 'types/link'
import { type FC, Fragment, type ReactElement, useRef } from 'react'
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky'
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink'
import Image from 'next/image'
import SocialLinks from 'components/reuseable/SocialLinks'
import ListItemLink from 'components/reuseable/links/ListItemLink'
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink'
// -------- partial header component -------- //
import Search from './partials/Search'
import Language from './partials/Language'
// -------- data -------- //
import { navigationItemList } from 'data/navigation'
import { filterNavByLocale } from 'utils/helpers'
import { useRouter } from 'next/router'
import type { LocaleEnum } from 'types/locale'

// ===================================================================
export type NavbarProps = {
  info?: boolean
  cart?: boolean
  fancy?: boolean
  logoAlt?: string
  search?: boolean
  social?: boolean
  language?: boolean
  stickyBox?: boolean
  navClassName?: string
  button?: ReactElement
  navOtherClass?: string
}

export type NavItem = {
  id: number
  title: string
  url: string
  allowedLocales?: LocaleEnum[]
  children?: NavItem[]
}

export type NavRecord = Record<string, NavItem | NavItem[]>
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const router = useRouter()
  const { navClassName, info, search, social, language, button, fancy, navOtherClass, stickyBox, logoAlt } = props
  const { locale } = router

  const sticky = useSticky(350)
  const navbarRef = useRef<HTMLElement | null>(null)
  const navList = filterNavByLocale(navigationItemList, locale as LocaleEnum)

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : (logoAlt ?? 'logo-dark')
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <li className="dropdown dropdown-submenu dropend" key={item.id}>
            <DropdownToggleLink title={item.title} />
            <ul className="dropdown-menu">{renderLinks(item.children)}</ul>
          </li>
        )
      }
      return <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    })
  }

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        {/* <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} height="50" />} /> */}
        <NextLink href="/" title={<Image src={`/img/${logo}.png`} alt="Ambit logo" width={130} height={50} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Ambit KPO</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          {/* ===================== nav item ===================== */}
          <ul className="navbar-nav">
            {Object.entries(navList).map(([key, navItem], index) => {
              if (Array.isArray(navItem)) {
                const title = key.charAt(0).toUpperCase() + key.slice(1)
                return (
                  <li key={index} className="nav-item dropdown">
                    <DropdownToggleLink title={title} className="nav-link dropdown-toggle" />

                    <ul className="dropdown-menu">
                      {navItem.map((item) => {
                        if (item.children && item.children.length > 0) {
                          return (
                            <li className="dropdown dropdown-submenu dropend" key={item.id}>
                              <DropdownToggleLink title={item.title} />
                              <ul className="dropdown-menu">{renderLinks(item.children)}</ul>
                            </li>
                          )
                        }
                        return (
                          <ListItemLink
                            key={item.id}
                            href={item.url}
                            title={item.title}
                            linkClassName="dropdown-item"
                          />
                        )
                      })}
                    </ul>
                  </li>
                )
              } else if (typeof navItem === 'object' && navItem !== null) {
                return (
                  <ListItemLink
                    key={index}
                    href={navItem.url}
                    title={navItem.title}
                    liClassName={`nav-item ${index === 0 ? 'fs-6' : ''}`}
                  />
                )
              }
              return null
            })}
          </ul>
          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@ambitkpo.com" className="link-inverse" href="mailto:info@ambitkpo.com" />
              <br />
              <NextLink href="tel:+17068949160" title="(+1) 706 894 9160" />
              <br />
              <NextLink href="tel:+17064038982" title="(+1) 706 403 8982" />
              <br />
              <NextLink href="tel:+919825016079" title="(+91) 982 501 6079" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}
          {language && <Language />}

          {/* ============= info button ============= */}
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {/* ============= social icons link ============= */}
          {social && (
            <li className="nav-item">
              <SocialLinks className="nav social social-muted justify-content-end text-end flex-nowrap d-none d-lg-block" />
            </li>
          )}

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  )

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= show search box ============= */}
      {search && <Search />}
    </Fragment>
  )
}

// set deafult Props
Navbar.defaultProps = {
  info: false,
  social: false,
  search: false,
  language: true,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
}

export default Navbar
