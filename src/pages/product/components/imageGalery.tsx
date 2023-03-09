import {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Controller, Navigation} from 'swiper'
import menClose from '../../../assets/products/men-shirt.avif'
import menClose1 from '../../../assets/products/men-shirt2.avif'
import { ElGallery } from '../product.style'

import ArrowLeftIcon from '../../../assets/icons/arrowLeft'
import ArrowRightIcon from '../../../assets/icons/arrowRight'

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import 'swiper/css/controller'

const slideData = [
  {id: 1, src: menClose},
  {id: 2, src: menClose1},
  {id: 3, src: menClose},
  {id: 4, src: menClose1},
]

export default function ImageGalery() {

  const [swiper, setSwiper] = useState<any>(null);

  return (
    <ElGallery>
      <div className="big-image">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.galery-navigations > .prev',
            nextEl: '.galery-navigations > .next',
          }}
          onSwiper={setSwiper}
          slidesPerView={1}
        >
          {slideData.map(slide => (
            <SwiperSlide key={slide.id} className='swiper-item'>
              <div>
                <img 
                  src={slide.src} 
                  alt="close" 
                  width='200' 
                  height='300' 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gallery-thumb">
        <Swiper
          modules={[Controller, Navigation]}
          controller={{control: (swiper && !swiper.destroyed) ? swiper:undefined}}
          navigation={{
            prevEl: '.galery-navigations > .prev',
            nextEl: '.galery-navigations > .next',
          }}
          slideToClickedSlide={true}
          slidesPerView={3}
          centeredSlides={true}
          allowTouchMove={false}
          spaceBetween={10}
          initialSlide={1}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={slide.id} className='swiper-item'>
              <div>
                <img 
                  src={slide.src} 
                  alt="close" 
                  width='60' 
                  height='70'
                />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        <div className='galery-navigations'>
          <button className="navigation-btn prev">
            <ArrowLeftIcon />
          </button>
          <button className="navigation-btn next">
            <ArrowRightIcon />
          </button>
        </div>
      </div> 
    </ElGallery>
  )
}
