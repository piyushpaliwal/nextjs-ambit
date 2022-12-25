import { FC } from 'react'
import FigureImage from 'components/reuseable/FigureImage'
// -------- data -------- //
import { softwareListPayroll } from 'data/client'

const SoftwaresPayroll: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-10">
      <div className="col-lg-4 mt-lg-2">
        <h3 className="display-4 mb-3 pe-xxl-5">
          Our trusted softwares for <span className="underline">Payroll Processing</span>
        </h3>
      </div>

      <div className="col-lg-8">
        <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
          {softwareListPayroll.map((item) => (
            <div className="col" key={item}>
              <FigureImage
                alt="Payroll Software"
                width={450}
                height={301}
                src={item}
                className="px-3 px-md-0 px-xxl-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SoftwaresPayroll
