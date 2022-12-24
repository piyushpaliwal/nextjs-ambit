import { FC } from 'react'
import IconBox from 'components/reuseable/IconBox'
import TeleMarketer from 'icons/lineal/TeleMarketer'
import NextLink from 'components/reuseable/links/NextLink'
import ContactForm from 'components/common/ContactForm'

const Contact: FC = () => {
  return (
    <section className="wrapper bg-light angled upper-end lower-end">
      <div className="container pb-14 pb-md-16">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
            <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.4rem' }} />

            <figure className="rounded">
              <img src="/img/photos/ambit-office.jpg" alt="Ambit Office" />
            </figure>
          </div>

          <div className="col-lg-6">
            <TeleMarketer className="icon-svg-md mb-4" />

            <h2 className="display-4 mb-8">Our Presense</h2>
            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-location-pin-alt" />
              </div>
              <div>
                <h5 className="mb-1">India</h5>
                <address>
                  D-308, The First, Behind Keshavbaug Party Plot <br className="d-none d-md-block" />
                  Vastrapur, Ahmedabad - 380015 Moonshine St. 14/05
                </address>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-location-pin-alt" />
              </div>
              <div>
                <h5 className="mb-1">US</h5>
                <address>3133 Little Bear Ln, Buford, GA 30519</address>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-phone-volume" />
              </div>

              <div>
                <h5 className="mb-1">Phone</h5>
                <p>
                  <NextLink title="(+91) 982 501 6079" href="tel:+919825016079" /> (India){' '}
                  <br className="d-none d-md-block" />
                  <NextLink title="(+1) 786 866 9559" href="tel:+17868669559" /> (US)
                </p>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-6 mt-n1" icon="uil-envelope" />
              </div>

              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a href="mailto:info@ambitkpo.com" className="link-body">
                    info@ambitkpo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ========== contact form section ========== */}
        <div className="row pt-14">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
            <p className="lead text-center mb-10">We will get back to you shortly.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
