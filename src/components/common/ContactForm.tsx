import { FC, FormEventHandler } from 'react'
import React, { useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import { useRouter } from 'next/router'

export type ContactFormProps = {
  firstname: string
  lastname: string
  email: string
  serviceType: string
  message: string
  pageUri: string
  plan: string
}

const ContactForm: FC = () => {
  // const { query } = useRouter()
  const router = useRouter()
  const [contactObj, setContactObj] = useState<ContactFormProps>({
    firstname: '',
    lastname: '',
    email: '',
    serviceType: '',
    message: '',
    pageUri: '',
    plan: (!router.query.plan ? 'Plan' : router.query.plan) as string
  })

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
          <div className="form-select-wrapper mb-4">
            <select
              className="form-select"
              id="form-select"
              name="department"
              onChange={(e) => handleInputChange(e, 'serviceType')}
              required
              defaultValue="Service Type"
            >
              <option disabled value="Service Type">
                Service Type
              </option>
              <option value="Tax Return">Tax Return</option>
              <option value="Bookkeeping & Accounting">Bookkeeping & Accounting</option>
              <option value="Accounts Receivable Management">Accounts Receivable Management</option>
              <option value="Accounts Payable Management">Accounts Payable Management</option>
              <option value="Finance Controller Services">Finance Controller Services</option>
              <option value="Payroll Services">Payroll Services</option>
              <option value="Invoice Processing Services">Invoice Processing Services</option>
            </select>

            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please select a plan.</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-select-wrapper mb-4">
            <select
              className="form-select"
              id="form-select"
              name="plan"
              onChange={(e) => handleInputChange(e, 'plan')}
              required
              defaultValue={!router.query.plan ? 'Plan' : router.query.plan}
            >
              <option disabled value="Plan">
                Plan
              </option>
              <option value="Free Trial">Free Trial</option>
              <option value="Fixed Monthly">Fixed Monthly</option>
              <option value="Fixed Hours">Fixed Hours</option>
              <option value="Full Time">Full Time</option>
            </select>

            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please select a service type.</div>
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

            <label htmlFor="form_message">Message *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your messsage. </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <input type="submit" value="Send message" className="btn btn-primary rounded-pill btn-send mb-3" />
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
