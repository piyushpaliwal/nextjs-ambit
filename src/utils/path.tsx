// utils/vercel-utils.tsx
export const IS_SERVER: boolean = typeof window === 'undefined'
export const IS_PROD: boolean = process.env.VERCEL_ENV === 'production'
export const getAbsoluteUrl = (): string => {
  //get absolute url in client/browser
  if (!IS_SERVER) {
    return location.origin
  }
  //get absolute url in server.
  return IS_PROD ? `${process.env.SITE_URL}` : `${process.env.VERCEL_URL}`
}
