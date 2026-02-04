import { FC, ReactElement } from 'react'
// -------- custom component -------- //
import SocialLinks from 'components/reuseable/SocialLinks'
import NextLink from 'components/reuseable/links/NextLink'
// -------- data -------- //
import footerNav from 'data/footer'

export type FooterContact = {
  title: string
  address: string
  phone: string
  phoneRef: string
  email: string
}

export type FooterProps = {
  tagline?: string
  button?: ReactElement
  contact?: FooterContact
}

const Footer: FC<FooterProps> = (props) => {
  const { tagline, button, contact } = props
  const { title, address, phone, phoneRef, email } = contact || {
    title: 'US Office',
    address: '3133 Little Bear Ln, Buford, GA 30519',
    phone: '(+1) 706 403 8982',
    phoneRef: '+17064038982',
    email: 'info@ambitkpo.com'
  }
  const hasConsultBlock = (tagline || button) != undefined

  return (
    <footer className="text-inverse" style={{ backgroundColor: '#131a40' }}>
      <div className="container pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0 pt-12">
          <div className="col-md-3 col-lg-3">
            <div className="widget">
              <img className="mb-4" src="/img/logo.png" alt="Ambit KPO" height="50" />

              <p className="mb-4">
                © 2022 Ambit KPO. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className={hasConsultBlock ? 'col-md-3 col-lg-3' : 'col-md-6 col-lg-6'}>
            <div className="widget">
              <h4 className="widget-title text-white mb-3">{title}</h4>
              <address className="pe-xl-15 pe-xxl-17">{address}</address>
              <NextLink title={phone} href={`tel:${phoneRef}`} />
              <br />
              <NextLink title={email} href={`mailto:${email}`} />
            </div>
          </div>

          <div className="col-md-3 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {hasConsultBlock && (
            <div className="col-md-3 col-lg-3">
              <p className="text-white mb-3">{tagline}</p>
              {button && <div>{button}</div>}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
