import type { StaticImageData } from 'next/image'

type WithImg = {
  imgSrc?: string | StaticImageData
  imgAlt?: string
  imgSrcSet?: (string | StaticImageData)[]
}

export type { WithImg }
