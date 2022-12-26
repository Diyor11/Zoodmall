import { useEffect, useState } from 'react'

import {Swiper, IconsHome, FlashSale, SwiperItem} from '../../components'
import {HeroDotListItem, CorouselItem, CorouselContainer} from './home.styles'

import Img1 from '../../assets/images/banner/main_banner_62f7292cea11d.png'
import Img2 from '../../assets/images/banner/main_banner_62fc8fcb3fce4.jpeg'
import Img3 from '../../assets/images/banner/main_banner_630377c3e5a63 (1).png'
import Img4 from '../../assets/images/banner/main_banner_630608061228e.png'

// import {ElContainer} from '../../core-ui/container.styles'

import {SlidesType} from '../../interfaces/slides'

const banners1: SlidesType = [
    {alt: 'banner 1', img: Img1},
    {alt: 'banner 2', img: Img2},
    {alt: 'banner 3', img: Img3},
    {alt: 'banner 4', img: Img4},
]

function Home() {

  const [mainSlides, setMainSlides] = useState<SlidesType>([])

  useEffect(() => {
    // fetch main slides from server
    setMainSlides(banners1)
  }, [])

  return (
    <div>
      {/* <CorouselContainer>
        <Swiper space={20} slides={mainSlides} DotListItem={HeroDotListItem} CorouselItem={CorouselItem} />
      </CorouselContainer> */}
      <CorouselContainer>
        <Swiper space={20} DotListItem={HeroDotListItem}>
          {slides?.map(({img, alt, ...rest}: SlidesType, i) => (
              <SwiperItem 
                  className='slide-item'
                  key={i}
                  space={space}
                  {...rest}
              >
                <img alt={alt} src={img} draggable='false' />
              </SwiperItem>
          ))}
        </Swiper>
      </CorouselContainer>
      <IconsHome />
      <FlashSale />
      <h1>Home</h1>
    </div>
  )
}

export default Home