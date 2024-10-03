import Image, { StaticImageData } from 'next/image'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

// ====================================================
interface FigureImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string | StaticImageData
  width: number
  height: number
  className?: string
  alt: string
}
// ====================================================

const FigureImage: FC<FigureImageProps> = (props) => {
  const { className, src, width, height, alt, ...others } = props

  return (
    <figure className={className} {...others}>
      <Image width={width} height={height} src={src} alt={alt} layout="responsive" quality="100" />
    </figure>
  )
}

export default FigureImage
