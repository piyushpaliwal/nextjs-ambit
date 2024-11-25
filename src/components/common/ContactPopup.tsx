import { FC } from "react"
import ContactPopupForm from "./ContactPopupForm"

const ContactPopup: FC = () => {
  return (
    <div role="dialog" tabIndex={-1} aria-modal="true" id="contact-form-popup" className="modal fade">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <h2 className="mb-3 text-center display-3">Contact</h2>
            <ContactPopupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactPopup