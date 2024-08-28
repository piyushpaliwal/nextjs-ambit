import { FC } from 'react'
import ListColumn from '../ListColumn'

type AccordionProps = {
  no: string
  body: string[][] | undefined | null
  heading: string
  expand: boolean
}

const StaffingAccordion: FC<AccordionProps> = ({ no, body, heading, expand }) => {
  if (!body) return null;

  return (
    <div className={`card accordion-item py-1`}>
      <div className="card-header" id={`heading${no}`}>
        <button
          data-bs-toggle="collapse"
          aria-controls={`collapse${no}`}
          data-bs-target={`#collapse${no}`}
          aria-expanded={expand ? 'true' : 'false'}
          className={expand ? 'accordion-button' : 'collapsed'}
        >
          {heading}
        </button>
      </div>

      <div
        id={`collapse${no}`}
        aria-labelledby={`heading${no}`}
        data-bs-parent="#staffingAccordion"
        className={`accordion-collapse collapse ${expand && 'show'}`}
      >
        <div className="card-body">
          <ListColumn list={body} classname="col-12 col-md-6" />
        </div>
      </div>
    </div>
  )
}

export default StaffingAccordion
