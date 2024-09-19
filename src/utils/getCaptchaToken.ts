export default async function getCaptchaToken() {
  return new Promise<string | null>(resolve => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
      if (!siteKey) {
        resolve(null);
        return;
      }
      try {
        const token = await grecaptcha.execute(siteKey, {
          action: "contact",
        });
        resolve(token);
      } catch (error) {
        console.error("Error executing reCAPTCHA:", error);
        resolve(null);
      }
    });
  });
}
