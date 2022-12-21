import LinkType from 'types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- partial header component -------- //
import Search from './partials/Search';
import Social from './partials/Social';
import Language from './partials/Language';
// -------- data -------- //
import {
  home, services, industries, company
} from 'data/navigation';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} height="50" />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Ambit KPO</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <ListItemLink href='/' title="Home" liClassName='nav-item' />
            {/* ===================== services nav item ===================== */}
            <li className="nav-item dropdown dropdown-mega">
              <DropdownToggleLink title="Services" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu mega-menu">
                <li className="mega-menu-content">
                  <div className="row gx-0 gx-lg-3">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Software</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(services.software)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Location</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(services.location)}</ul>
                    </div>

                    <div className="col-lg-8">
                      <h6 className="dropdown-header">Services</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(services.services)}</ul>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* ===================== industry nav item ===================== */}
            <li className="nav-item dropdown dropdown-mega">
              <DropdownToggleLink title="Industry" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu mega-menu">
                <li className="mega-menu-content">
                  <div className="row gx-0 gx-lg-3">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Healthcare</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(industries.healthcare)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Retail Stores</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(industries.retailStores)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Manufacturing</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(industries.manufacturing)}</ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">E-Commerce</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(industries.eCommerce)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Professional</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(industries.professional)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Real Estate</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(industries.realEstate)}</ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Others</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(industries.others)}</ul>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <ListItemLink href='/price' title="Price" liClassName='nav-item' />
            {/* ===================== company nav item ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Company" className="nav-link dropdown-toggle" />

              <ul className="dropdown-menu">
                {company.map(({ id, url, title, children }) => {
                  if (!url && children) {
                    return (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title="Blog Posts" />
                        <ul className="dropdown-menu">{renderLinks(children)}</ul>
                      </li>
                    );
                  }
                  return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
                })}
              </ul>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@ambitkpo.com" className="link-inverse" href="mailto:info@ambitkpo.com" />
              <br />
              <NextLink href="tel:+17868669559" title="(+1) 786 866 9559" />
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

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= social icons link ============= */}
          {social && <Social />}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

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
  );
};

// set deafult Props
Navbar.defaultProps = {
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
