import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import type { ContactFormProps } from 'components/common/ContactForm'

type Response = {
  success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { firstname, lastname, email, message, pageUri, serviceType } = <ContactFormProps>req.body.contactObj

  try {
    const response = await axios({
      method: 'POST',
      url: `https://api.hsforms.com/submissions/v3/integration/secure/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_GUID}`,
      data: {
        fields: [
          {
            name: 'firstname',
            value: firstname
          },
          {
            name: 'lastname',
            value: lastname
          },
          {
            name: 'email',
            value: email
          },
          {
            name: 'message',
            value: message
          },
          {
            name: 'service_type',
            value: serviceType
          }
        ],
        context: { pageUri: pageUri }
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Accept-Encoding': 'gzip,deflate,compress'
      }
    })
  } catch (error) {
    return res.status(500).json({ success: false })
  }

  res.status(200).json({ success: true })
}
