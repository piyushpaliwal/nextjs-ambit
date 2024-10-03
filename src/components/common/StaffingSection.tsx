import { FC } from 'react'
import StaffingAccordion from 'components/reuseable/accordion/staffing'
import { StaffingDetail } from 'data/staffing'
import FigureImage from 'components/reuseable/FigureImage'
import { StaticImageData } from 'next/image'

type StaffingSectionProps = {
  staffingDetail: StaffingDetail
  imageSrc: string | StaticImageData
  imageHeight: number
}

const StaffingSection: FC<StaffingSectionProps> = ({ staffingDetail, imageSrc, imageHeight }) => {
  const accordions = [
    { no: 'One', expand: true, heading: 'Key Skillsets', body: staffingDetail.keySkillsets },
    { no: 'Two', expand: false, heading: 'Software Proficiency', body: staffingDetail.softwareProficiency },
    { no: 'Three', expand: false, heading: 'Experience Level', body: staffingDetail.experienceLevel },
    { no: 'Four', expand: false, heading: 'Tech-Savvy', body: staffingDetail.techSavvy },
  ].filter(acc => acc.body);

  return (
    <section className={`wrapper ${staffingDetail.role === "Accountant" || staffingDetail.role === "Virtual Assistant" ? "bg-light" : "bg-gray"}`}>
      <div className="container py-14 py-md-14">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-5">
            <FigureImage src={imageSrc} alt="Visualization" width={500} height={imageHeight} />
          </div>
          <div className="col-lg-7">
            <h3 className="display-4 mb-7 text-secondary">{staffingDetail.role}</h3>
            <div className="accordion accordion-wrapper" id="staffingAccordion">
              {accordions.map((item, index) => (
                <StaffingAccordion key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StaffingSection
