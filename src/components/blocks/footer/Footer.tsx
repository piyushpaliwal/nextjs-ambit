import { FC } from 'react'
// -------- custom component -------- //
import SocialLinks from 'components/reuseable/SocialLinks'
import NextLink from 'components/reuseable/links/NextLink'
// -------- data -------- //
import footerNav from 'data/footer'

const Footer: FC = () => {
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

          <div className="col-md-6 col-lg-6">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">India Office (HQ)</h4>
              <address className="pe-xl-15 pe-xxl-17">
                D-308, The First, Behind Keshavbaug Party Plot, Vastrapur, Ahmedabad - 380015
              </address>
              <NextLink title="(+91) 982 501 6079" href="tel:+919825016079" />
            </div>
            <div className="widget">
              <h4 className="widget-title text-white mb-3">US Office</h4>
              <address className="pe-xl-15 pe-xxl-17">3133 Little Bear Ln, Buford, GA 30519</address>
              <NextLink title="(+1) 678 804 7749" href="tel:+16788047749" />
              <br />
              <NextLink title="info@ambitkpo.com" href="mailto:info@ambitkpo.com" />
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
