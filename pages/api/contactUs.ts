import type { NextApiRequest, NextApiResponse } from 'next'
import type { ContactFormProps } from 'components/common/ContactForm'
import { Resend } from "resend";
import ContactEmail from 'components/reuseable/ContactEmail';


type Response = {
  success: boolean
}
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  try {
    const contactObj: ContactFormProps = req.body.contactObj;
    if (!contactObj) {
      return res.status(400).json({ success: false });
    }
    const { data, error } = await resend.emails.send({
      from: `New Inquiry ${process.env.SITE_DOMAIN}`,
      to: process.env.CONTACT_FORM_EMAIL as string,
      subject: "New Contact Request!",
      react: ContactEmail(contactObj),
    });
    if (error) {
      return res.status(500).json({ success: false });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    if (!res.headersSent) {
      return res.status(500).json({ success: false });
    }
  }
};
