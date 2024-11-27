import { FC } from "react";
import { slideInDownAnimate } from "utils/animation";

type CPAsHeroProps = {
  title: string
  description: string
}

const CPAsHero: FC<CPAsHeroProps> = ({ title, description }) => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-cover bg-overlay text-white pt-10"
      style={{ backgroundImage: "url(/img/photos/bg-cpa-hero.jpg)" }}>
      <div className="container py-16 py-md-18 text-center position-relative">
        <div className="row">
          <div className="col-lg-9 col-xxl-8 mx-auto">
            <h1 className="display-1 fs-52 px-md-10 px-lg-0 px-xl-8 mb-5 text-white">
              {title}
            </h1>
            <p className="lead fs-24 px-md-10 px-lg-0 mx-lg-n10 mx-xl-0 mb-8">{description}</p>
            <div className="d-flex justify-content-center">
              <span style={slideInDownAnimate('200ms')}>
                <button
                  className="btn btn-lg btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#contact-form-popup"
                >Get Started</button>
              </span>
              <span style={slideInDownAnimate('500ms')}>
                <a
                  href="https://calendly.com/ambit-accounting/15min"
                  className="btn btn-lg btn-white"
                  target="_blank"
                  rel="noreferrer"
                >Schedule a call</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CPAsHero