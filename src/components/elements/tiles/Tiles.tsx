import { FC, Fragment } from 'react'
import Image from 'next/image'
import Carousel1 from '../../../../public/img/photos/carousel1.jpg'
import Carousel2 from '../../../../public/img/photos/carousel2.jpg'
import Carousel3 from '../../../../public/img/photos/carousel3.jpg'

const Tiles: FC = () => {
  const images = ['carousel1', 'carousel2']

  return (
    <Fragment>
      <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: '3rem', left: '5.5rem' }} />

      <div className="overlap-grid overlap-grid-2">
        {images.map((item, i) => (
          <div className="item" key={item + i}>
            {i == 0 && <Image className="rounded shadow" src={Carousel1} alt={item} />}
            {i == 1 && <Image className="rounded shadow" src={Carousel2} alt={item} />}
            {/* <figure className="rounded shadow">
              <img src={`/img/photos/${item}.jpg`} srcSet={`/img/photos/${item}@2x.jpg 2x`} alt={item} />
            </figure> */}
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Tiles
