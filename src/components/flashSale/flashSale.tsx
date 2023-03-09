import {useState, useEffect} from 'react'
import { ElContainer } from '../../core-ui/container.styles'
import {ElWrapper, Content} from './flash.sale.styles'
import CountDown from './components/CountDown'
import {NavLink} from 'react-router-dom'
import {Grid} from '@mui/material'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay} from 'swiper'

import { MyPaginantion } from '../../pages/home/home.styles'

import PhoneCard from './components/PhoneCard'

export default function FlashSale() {

  const [slides, setSlides] = useState<string[]>([])

  useEffect(() => {
    setSlides((new Array<string>(5)).fill(''))
    // getCollection('banners')
    //   .then(data => console.log(data))
  }, [])

  const renderBullet = (i: number, className: string) => `<li class='${className} white-bullet'></li>`

  return (
    <ElContainer>
      <ElWrapper>
        <Content>
          <Grid container justifyContent={'space-between'} alignItems='center'>
            <Grid item md={4} xs={12} className="text-content">
              <h2 className="text-content__title">Smartfonlar x12 -gacha muddatli to'lovga</h2>
              <CountDown />
              <NavLink to='/' className='text-content__btn show-more'>Boshqalarga ko'rsatish</NavLink>
            </Grid>
            <Grid item md={7} xs={12} sm={10} className="corousel-container" pl={{md: 4, xs: 0}} mt={{md: 0, xs: 3}} >
              <Swiper
                loop={true}
                pagination={{el: '.flash-sale.corousel-paginantion', renderBullet, clickable: true}}
                modules={[Pagination, Autoplay]}
                speed={1500}
                autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true}}
                breakpoints={{
                  900: {
                    spaceBetween: 15,
                    slidesPerView: 1.3
                  },
                  600: {
                    spaceBetween: 30,
                    slidesPerView: 1.4,
                  },
                  0: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  }
                }}
              >
                {slides?.map((_, index) => (
                  <SwiperSlide key={index}>
                    <PhoneCard />  
                  </SwiperSlide>
                ))}
              </Swiper>
              <MyPaginantion className="flash-sale corousel-paginantion" bottom={-25} />
            </Grid>
          </Grid>
        </Content>
      </ElWrapper>
    </ElContainer>
  )
}