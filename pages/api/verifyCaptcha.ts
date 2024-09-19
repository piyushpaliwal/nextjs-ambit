import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ success: false, message: 'No secret key found' });
  }
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );
    const captchaData = response.data;
    if (!captchaData.success || captchaData.score < 0.5) {
      return res.status(400).json({
        success: false,
        message: 'Captcha Failed',
        errors: captchaData['error-codes'],
      });
    }
    return res.status(200).json({ success: true, message: 'Captcha verified successfully' });
  } catch (error) {
    console.error('Error verifying CAPTCHA token:', error);
    return res.status(500).json({ success: false, message: 'Error verifying CAPTCHA token' });
  }
}
