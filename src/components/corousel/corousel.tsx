import {useEffect, useState, useMemo} from 'react'

// import ArrowLeft from '../../assets/icons/arrowLeft'
// import ArrowRight from '../../assets/icons/arrowRight'
import { ElContainer } from '../../core-ui/container.styles'
import { CorouselWrapper } from './corousel.style'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'

import {SlidesType, SlideType} from '../../interfaces/slides'
import {getCollection} from '../../services/firebase'

// type ComponentType = (props:{position: string}) => JSX.Element

interface MainProps{
    slidesPerView: number;
    spaceBetween: number;   
    sliderName: string;
    getDataUrl: string;
    renderSlide: (slideData: SlideType) => React.ReactNode;
    children: React.ReactNode;
    navigation?: boolean;
    pagination?: boolean,
    autoplay?: {delay: number} | undefined;
    speed?: number;
    loop?: boolean;
    breakpoints?: {[key: number]: {spaceBetween: number, slidesPerView: number}};
}


export default function Corousel(props: MainProps) {
    const [banners, setBanners] = useState<SlidesType | undefined>([]) 

    useEffect(() => {
        // fetch(props.getDataUrl)
            // .then(res => res.json())
            // .then(data => {
                // setBanners(data)
            // })
        getCollection<SlidesType>(props.getDataUrl)
            .then(data => {
                setBanners(data)
            })
    }, [props.getDataUrl])

    const swiperOptions = useMemo(() => {
        return {
            navigation: props.navigation ? {
                prevEl: `[data-navigation-btn="${props.sliderName}-prev"]`, 
                nextEl: `[data-navigation-btn="${props.sliderName}-next"]`, 
            }:false,
            pagination: props.pagination ? { 
                clickable: true,
                    renderBullet: function (index: number, className: string) {
                        return `<li class='${className} blue-bullet'></li>`;
                },
                el: `[data-pagination="${props.sliderName}-pagination"]`
            }:false,
            slidesPerView: props.slidesPerView,
            speed: props.speed || 300,
            spaceBetween: props.spaceBetween || 0,
            loop: props.loop || false,
            autoplay: props.autoplay ? {
                disableOnInteraction: false, 
                pauseOnMouseEnter: true, 
                delay: props.autoplay.delay,
            }:false,
            breakpoints: props.breakpoints || {},
        }
    }, [props])

  return (
    <ElContainer>
        <CorouselWrapper id={props.sliderName}>
            <Swiper
                {...swiperOptions}
                modules={[Navigation, Pagination, Autoplay]}
            >
            {banners?.map((slideData, index) => (
                <SwiperSlide key={index}>
                    {props.renderSlide ? 
                        props.renderSlide(slideData) 
                        :
                        (<img className='swiper-slide__img' src={slideData.src} alt={'banner'} />)
                    }
                </SwiperSlide>
            ))}
            </Swiper>
            {props.children}
        </CorouselWrapper>
    </ElContainer>  
    )
}
