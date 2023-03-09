import {IconsHome, FlashSale, Suggest, Corousel} from '../../components'
import {Stack, Typography} from '@mui/material'
import {MyPaginantion, BrandButtons, TopBrandCard, CorouselButton} from './home.styles'
import Products from '../../components/products/products'
import { ElContainer } from '../../core-ui/container.styles'
import { SectionTitle } from '../../core-ui/globalStyles'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import {topBrands} from '../../data/topCategories'

import ArrowLeft from '../../assets/icons/arrowLeft'
import ArrowRight from '../../assets/icons/arrowRight'

import {SlideType} from '../../interfaces/slides'

function Home() {

  return (
    <>
      <Corousel 
          slidesPerView={1}
          spaceBetween={10}
          sliderName="hero-section"
          getDataUrl='banners'
          navigation={true}
          pagination={true}
          autoplay={{delay: 5000}}
          speed={700}
          loop={true}
          renderSlide={({src}: SlideType) => (
            <img className='swiper-slide__img' src={src} alt={'banner'} />
          )}
        >
          <CorouselButton position='left' data-navigation-btn="hero-section-prev">
            <ArrowLeft />
          </CorouselButton>
          <CorouselButton position='right' data-navigation-btn="hero-section-next">
            <ArrowRight />
          </CorouselButton>
          <MyPaginantion 
            data-pagination={`hero-section-pagination`} 
            bottom={-12} 
          />
      </Corousel>
      <IconsHome
        spacing={2} 
        breakpoints={{xs: 3}} 
        getDataUrl='first-icons' 
        itemClassName='icons-home_item' 
      />
      <FlashSale />
      <IconsHome 
        spacing={2} 
        breakpoints={{xs: 3}}
        getDataUrl='second-icons' 
        itemClassName='icons-home_item' 
      />
      <Suggest 
        getDataUrl='products-accumlaters' 
        seeAllUrl='/powerbanks/all'
        title="Aloqada qoling pwerbank x4 muddatli to'lov" 
      />
      <Corousel 
        slidesPerView={1}
        spaceBetween={10}
        sliderName="second-banners"
        getDataUrl='second-banners'
        navigation={true}
        pagination={true}
        autoplay={{delay: 5000}}
        speed={700}
        loop={true}
        renderSlide={({src}: SlideType) => (
          <img className='swiper-slide__img' src={src} alt={'banner'} />
        )}
      >
        <CorouselButton position='left' data-navigation-btn="second-banners-prev">
          <ArrowLeft />
        </CorouselButton>
        <CorouselButton position='right' data-navigation-btn="second-banners-next">
          <ArrowRight />
        </CorouselButton>
        <MyPaginantion 
          data-pagination={`second-banners-pagination`} 
          bottom={-12} 
        />
      </Corousel>
      <Suggest 
        getDataUrl="products-accumlaters" 
        seeAllUrl='/'
        title="Eng zo'r uy mahsulotlari!" 
      />
      <IconsHome 
        spacing={2} 
        breakpoints={{xs: 3}} 
        getDataUrl='third-icons' 
        itemClassName='icons-home_item' 
      />
      {/* <IconsHome 
        spacing={2} 
        breakpoints={{xs: 3}} 
        getDataUrl='/services' 
        itemClassName='icons-home_item' 
      /> */}
      <IconsHome 
        getDataUrl='forth-icons'
        spacing={3}
        breakpoints={{xs: 6, sm: 3}}
        itemClassName='deal-card'
        title='Yangi kelgan mahsulotlar!'
      />
      <Suggest 
        getDataUrl="products-accumlaters" 
        seeAllUrl='/'
        title="Elektronika 12x muddatli to'lovga" 
      />
      <Suggest 
        getDataUrl='products-accumlaters' 
        title="Maishiy texnika 12x muddatli to'lovga" 
        seeAllUrl='/homeProducts/all'
      />
      <ElContainer>
        <Stack direction='row' justifyContent='space-between'>
          <SectionTitle>Top brandlar</SectionTitle>
          <BrandButtons>
            <button className='brand-button' data-navigation='top-brand navigation-left'>
              <ArrowLeft color={'#2d3092'} />
            </button>
            <button className='brand-button' data-navigation='top-brand navigation-right'>
              <ArrowRight color={'#2d3092'} />
            </button>
          </BrandButtons>
        </Stack>
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          breakpoints={{
            900: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            0: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          loop
          modules={[Navigation]}
          navigation={{
            prevEl: '[data-navigation="top-brand navigation-left"]', 
            nextEl: '[data-navigation="top-brand navigation-right"]'
          }}
        >
          {topBrands?.map(({img, title, url}, index) => (
            <SwiperSlide key={index}>
              <TopBrandCard href={url}>
                <div className="wrapper">
                  <div className="el-image">
                    <img src={img} alt="top brand" />
                  </div>
                  <div className="label">
                    {title}
                  </div>
                </div>
              </TopBrandCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </ElContainer>
      <Suggest 
        getDataUrl='products-accumlaters'
        seeAllUrl='/carProducts/all'
        title="Avto maxsulotlarni yetkazib berish" 
      />
      <ElContainer>
        <SectionTitle>Mijozlar tanlovi</SectionTitle>
        <Products fetchUrl='/' breakPoints={{md: 3, xs: 6, sm: 4}} />
      </ElContainer>
      <ElContainer>
        <SectionTitle>ZoodMall - Baxt uchun xarid qiling</SectionTitle>
        <Typography component='p'>
          ZoodMall ilovamiz bilan xarid qilishning yangi dunyosiga xush kelibsiz! Baxtli mijozlarimizning uzoq ro'yxatiga qo'shiling va baxtingiz uchun xarid qilishni bugunoq boshlang! Mahalliy va chegaradosh sotuvchilardan millionlab mahsulotlarni yuklab oling va o'rganishni boshlang. ZoodMall bilan siz quyidagilarga ega bo'lasiz: MAHSULOTLARNING KENG ASILMANI Dunyo bo'ylab millionlab mahsulotlarni, jumladan, xalqaro, xitoylik va mahalliy sotuvchilarni kashf eting. Kiyimlar (erkaklar va ayollar), telefonlar va aksessuarlar, kompyuterlar va elektronika, umumiy aksessuarlar va boshqa ko'plab toifalarni osongina ko'rib chiqing va xarid qiling. CHEGIRMALAR VA KUPONLAR Ro'yxatdan o'tgandan so'ng mavjud bo'lgan promo kodlarimiz va chegirma kuponlarimiz va mavjud foydalanuvchilar uchun har kuni yangi takliflar bilan xaridlaringiz uchun tonna chegirmalardan foydalaning. KUNDALIK FLASH CHEKORLARI Har kuni tanlash uchun yangi takliflar va mahsulotlar bilan 24 soatlik Flash chegirmalarimizni ko'rib chiqish orqali KAFOLATLANGAN ENG YAXSHI NARXni qo'lga kiriting. TAKLIFLAR Tanlangan mahsulotlar yoki toifalar bo'yicha eng so'nggi chegirmalarimizni qo'lga kiritish uchun "Takliflar" bo'limini o'rganing va yil davomida muntazam ravishda tez-tez o'tkaziladigan aktsiyalardan foydalaning. Xarid qilishning qulayligi Har bir mamlakat uchun mavjud boʻlgan turli toʻlov usullaridan “Onlayn toʻlash” va “Etkazib berishdan keyin toʻlash”dan tortib, yetkazib berishda naqd pul va boʻlib-boʻlib toʻlashgacha (Oʻzbekistonda mavjud) tanlang. Buyurtmalaringizni real vaqt rejimida kuzatib boring, shunda siz uni qachon qabul qilishingizni aniq bilasiz. Har bir xariddan qoniqishingizga ishonch hosil qilish uchun mahalliy qaytarish va toʻlovni qaytarish siyosatimiz bilan oʻzingizni xavfsiz his qiling. ZoodMall Shveytsariyada joylashgan yetakchi Marketplace platformasi OrientSwiss tomonidan ishlab chiqilgan bo'lib, Ipak yo'li mamlakatlari bo'ylab mintaqaviy ofislari mavjud. ZoodMall mukofotini oldi
        </Typography>
      </ElContainer>
    </>
  )
}

export default Home