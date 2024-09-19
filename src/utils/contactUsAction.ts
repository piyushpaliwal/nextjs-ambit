import axios from 'axios';

const contactUsAction  = async(token: string | null) => {
  if (!token) {
    return {
      success: false,
      message: 'Token not found',
    };
  }
  try {
    const { data } = await axios.post('/api/verifyCaptcha', { token });
    if (!data.success) {
      return {
        success: false,
        message: data.message,
        errors: data.errors,
      };
    }
    return {
      success: true,
      message: 'Contact form submitted!',
    };
  } catch (error) {
    console.error('Error verifying CAPTCHA token:', error);
    return {
      success: false,
      message: 'Error verifying CAPTCHA token',
    };
  }
}
export default contactUsAction