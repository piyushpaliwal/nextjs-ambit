import LinkType from 'types/link'
import { FC, Fragment, ReactElement, useRef } from 'react'
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky'
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink'
import Image from 'next/image'
import SocialLinks from 'components/reuseable/SocialLinks'
import ListItemLink from 'components/reuseable/links/ListItemLink'
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink'
// -------- data -------- //
import { home, services, company } from 'data/navigation'



// ===================================================================
type NavbarProps = { 
  navClassName?: string
  logoAlt?: string
  button?: ReactElement
  navOtherClass?: string
  bgClass?: string
 };
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, button, bgClass, navOtherClass, logoAlt } = props

  const sticky = useSticky(350)
  const navbarRef = useRef<HTMLElement | null>(null)

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark'
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg extended navbar-light caret-none navbar-clone fixed navbar-stick'

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ))
  }

  return (
    <Fragment>
      <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-column py-1">
          <div className="topbar d-flex flex-row w-100 justify-content-between align-items-center">
            <div className="navbar-brand">
              <NextLink href="/" title={<Image src={`/img/${logo}.png`} alt="Ambit logo" width={120} height={50} />} />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-none d-md-block">{button}</li>
                <li className="nav-item d-lg-none">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-nav"
                    className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
            </div>

          </div>

          <div className={"navbar-collapse-wrapper card d-flex flex-row align-items-center w-100 px-8 px-xl-10 " + bgClass}>
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Ambit</h3>
                <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
              </div>

            <div className="offcanvas-body d-flex flex-column h-100">
              <ul className="navbar-nav">
                <ListItemLink href="/" title="Home" liClassName="nav-item" />
                {/* ===================== services nav item ===================== */}
                <li className="nav-item dropdown">
                  <DropdownToggleLink title="Services" className="nav-link dropdown-toggle" />

                  <ul className="dropdown-menu">
                    {services.map(({ id, url, title, children }) => {
                      if (children.length > 0) {
                        return (
                          <li className="dropdown dropdown-submenu dropend" key={id}>
                            <DropdownToggleLink title={title} />
                            <ul className="dropdown-menu">{renderLinks(children)}</ul>
                          </li>
                        )
                      }
                      return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />
                    })}
                  </ul>
                </li>
                <ListItemLink href="/price" title="Price" liClassName="nav-item" />
                <ListItemLink href="/blogs" title="Blog" liClassName="nav-item" />
                {/* ===================== company nav item ===================== */}
                <li className="nav-item dropdown">
                  <DropdownToggleLink title="Company" className="nav-link dropdown-toggle" />

                  <ul className="dropdown-menu">
                    {company.map(({ id, url, title, children }) => {
                      if (!url && children) {
                        return (
                          <li className="dropdown dropdown-submenu dropend" key={id}>
                            <DropdownToggleLink title="Blog" />
                            <ul className="dropdown-menu">{renderLinks(children)}</ul>
                          </li>
                        )
                      }
                      return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />
                    })}
                  </ul>
                </li>
                <ListItemLink href="/contact" title="Contact" liClassName="nav-item" />
              </ul>

                {/* ============= show contact info in the small device sidebar ============= */}
                <div className="offcanvas-footer d-lg-none">
                <div>
                  <NextLink title="info@ambitkpo.com" className="link-inverse" href="mailto:info@ambitkpo.com" />
                  <br />
                  <NextLink href="tel:+16788047749" title="(+1) 678 804 7749" />
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
              <SocialLinks className="nav social social-muted justify-content-end text-end" />
                {
                  sticky && 
                  <div className="nav-item d-none d-md-block">{button}</div>
                }
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
// set deafult Props
Navbar.defaultProps = {
  navOtherClass: 'navbar-other ms-auto w-100 d-none d-lg-flex justify-content-end align-items-center gap-4',
  navClassName: 'navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none'
}

export default Navbar
