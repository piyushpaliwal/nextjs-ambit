import { FC } from "react";
import FigureImage from "components/reuseable/FigureImage";
import { slideInDownAnimate } from "utils/animation";
import TwoColumnProps from "types/two-column";

interface TwoColumnPropsComponent {
  serviceData: TwoColumnProps[]
}

const TwoColumn: FC<TwoColumnPropsComponent> = ({ serviceData }) => {
  return (
    <section className="wrapper bg-gray">
      <div className="container pt-15 pb-6">
        {serviceData.map(({ title, image, list, description, reverse }, index) => (
          <div
            className={`row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center ${reverse ? 'flex-lg-row-reverse' : ''}`}
            key={index}
          >
            <div className={`col-lg-6 ${reverse && "ms-auto"}`}>
              <FigureImage
                src={image.src}
                className="shadow p-1 bg-white rounded"
                alt={image.alt}
                width={1203}
                height={871}
              />
            </div>
            <div className={`col-lg-5 ${!reverse && "ms-auto"}`}>
              <h3 className="fs-28 mb-3">{title}</h3>
              <p>{description}</p>
              <ul className="icon-list bullet-bg bullet-soft-primary">
                {list.map((item) => (
                  <li key={item}>
                    <i className="uil uil-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span style={slideInDownAnimate('200ms')}>
                <button
                  className="btn btn-lg btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#contact-form-popup"
                >Inquire Now</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default TwoColumn