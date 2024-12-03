import type { NextApiRequest, NextApiResponse } from 'next'
import ContactFormProps from 'types/contact-form'
import { Resend } from "resend";
import ContactEmail from 'components/reuseable/ContactEmail';

type Response = {
  success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
    const contactObj: ContactFormProps = req.body.contactObj;
    if (!contactObj) {
      return res.status(400).json({ success: false });
    }
    const { data, error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: `Website Submission <${process.env.FROM_ADDRESS}>`,
      to: process.env.TO_ADDRESS as string,
      subject: `New Inquiry from ${contactObj.firstname} ${contactObj.lastname}`,
      react: ContactEmail(contactObj),
    });
    if (error) {
      return res.status(500).json({ success: false });
    }
    res.status(200).json({ success: true });
};
