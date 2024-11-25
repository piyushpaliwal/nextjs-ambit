import { FC } from 'react'
import React, { useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import { useRouter } from 'next/router'
import ContactFormProps from 'types/contact-form'

const ContactPopupForm: FC = () => {
  const router = useRouter()
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [contactObj, setContactObj] = useState<ContactFormProps>({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    pageUri: '',
    phone: '',
    location: '',
    serviceType: '',
    dedicatedStaff: ''
  })

  useEffect(() => {
    const { serviceType, dedicatedStaff, ...popupFormRequiredFields } = contactObj
    setIsFormFilled(Object.values(popupFormRequiredFields).every((value) => value.trim() !== ''))
  }, [contactObj])

  useEffect(() => {
    setContactObj(() => ({
      ...contactObj,
      pageUri: window.location.href
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactObj.pageUri])

  const handleInputChange = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    prop: string
  ) => {
    setContactObj({
      ...contactObj,
      [prop]: e.currentTarget.value
    })
    console.log(contactObj);
    
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch()
  }

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: '/api/contactUs',
      method: 'POST',
      data: { contactObj }
    },
    {
      manual: true
    }
  )

  if (error) {
    return (
      <div className="alert alert-danger alert-icon" role="alert">
        <i className="uil uil-times-circle" /> Oops, something went wrong; We are embarrassed{' '}
      </div>
    )
  }

  if (data) {
    router.push('/thank-you')
  }

  return (
    <form className="contact-form needs-validation" method="post" onSubmit={handleSubmit}>
      <div className="messages"></div>
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="firstname"
              id="form_name"
              placeholder="Jane"
              className="form-control"
              onChange={(e) => handleInputChange(e, 'firstname')}
            />
            <label htmlFor="form_name">First Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your first name. </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="surname"
              placeholder="Doe"
              id="form_lastname"
              className="form-control"
              onChange={(e) => handleInputChange(e, 'lastname')}
            />
            <label htmlFor="form_lastname">Last Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your last name. </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
              onChange={(e) => handleInputChange(e, 'email')}
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please provide a valid email address. </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="phone"
              id="form_phone"
              className="form-control"
              placeholder="+1-234-67890"
              onChange={(e) => handleInputChange(e, 'phone')}
            />
            <label htmlFor="form_phone">Phone no *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please provide a phone number. </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="location"
              id="form_location"
              className="form-control"
              placeholder="New york"
              onChange={(e) => handleInputChange(e, 'location')}
            />
            <label htmlFor="form_location">Location *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your location. </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
              onChange={(e) => handleInputChange(e, 'message')}
            />

            <label htmlFor="form_message">Short about your requirement... *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your messsage. </div>
          </div>
        </div>
        <div className="col-12 text-center">
        <button
            type="submit"
            className="btn btn-primary rounded-pill btn-send mb-3 w-100"
            disabled={!isFormFilled || loading}
            data-bs-dismiss="modal"
            aria-label="Close" 
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactPopupForm
