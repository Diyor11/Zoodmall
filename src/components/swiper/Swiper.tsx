import {useState, useMemo, useCallback, useEffect, CSSProperties, useRef} from 'react'

import {useElementSize} from '../../hooks'
import {SwiperProvider} from './SwiperContext'

import {
  // MyContainer, 
  // CorouselItem,
    Corousel,
   CorouselWrapper, DotList} from './swiper.style'
import ArrowLeft from '../../assets/icons/arrowLeft'
import ArrowRight from '../../assets/icons/arrowRight'

import {SlidesType} from '../../interfaces/slides'

interface MainProps{
  DotListItem: React.FC<any>;
  durationTime?: number;
  navigation?: boolean;
  autoSlide?: number;
  children: React.ReactNode;
  space: number;
}

export default function Swiper(
  {children, DotListItem, durationTime = 0.7, navigation = true, autoSlide = 0, space = 0}: MainProps
  ) {

    const [containerRef, {width}] = useElementSize()
    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const [slidesLength, setSlidesLenth] = useState(0)
    const [duration, setDuration] = useState<number>(0)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    const wrapperWidth = useMemo(() => {
        return width * (slidesLength) + (slidesLength - 1) * space
    }, [width, space, slidesLength])

    const translateWrapper = useMemo(() => (width + space) * currentIndex, [width, currentIndex, space])

    const activeSlide = useCallback((index: number, slideIndex: number) => {
      if(slideIndex === 0 && index === slidesLength - 2) {
        return true
      } else if(slideIndex === 0 && index === 0) {
        return true
      } else if(index === --slideIndex) {
        return true
      } else {
        return false
      }
    }, [slidesLength])

    const nextSlide = useCallback((index: number): void => {
        if(index >= slidesLength -2) {
          setTimeout(() => {
            setDuration(0)
            setCurrentIndex(1)
          }, durationTime * 1000)
        }
        setDuration(durationTime)
        setCurrentIndex(p => ++p)
      }, [durationTime, slidesLength])
    
      const prevSlide = useCallback((index: number): void => {
        if(index === 1) {
          setTimeout(() => {
            setDuration(0)
            setCurrentIndex(slidesLength - 2)
          }, durationTime * 1000)
        }
    
        setDuration(durationTime)
        setCurrentIndex(p => --p)
      }, [durationTime, slidesLength])

      const setUpSlide = (slideNumber: number) => {
        setCurrentIndex(slideNumber)
        setDuration(durationTime)
      }

      useEffect(() => {
        if(autoSlide) {
          const interval = setInterval(() => {
            nextSlide(currentIndex)
          }, autoSlide)
          return () => {
            clearInterval(interval)
          }
        }
      }, [autoSlide, nextSlide, currentIndex])

      useEffect(() => {
        if (wrapperRef.current) {
          setSlidesLenth(wrapperRef.current.childNodes.length);
        }
      }, [])

  return (
      <SwiperProvider value={{width: width}}>
        <Corousel navigation={navigation} ref={containerRef}>
            <CorouselWrapper
                width={wrapperWidth}
                duration={duration}
                translateWrapper={translateWrapper}
                ref={wrapperRef}
            > 
              {React.cloneElement(children[children.length - 1] as React.ReactElement, {color: 'yellow'})}
              
              {children}
              {children}
            </CorouselWrapper>
            <span onClick={() => prevSlide(currentIndex)} className="action-button prev">
                <ArrowLeft 
                  color='#fff'
                  width={30}
                  height={30}
                />
            </span>
            <span onClick={() => nextSlide(currentIndex)} className="action-button next">
                <ArrowRight 
                  color='#fff'
                  width={30}
                  height={30}
                />
            </span>
        </Corousel>
        <DotList> 
          {slides.map((_, i) => (
            <DotListItem active={activeSlide(i, currentIndex)}  key={i}>
              <button onClick={() => setUpSlide(++i)}>{i}</button>
            </DotListItem>
          ))}
        </DotList>
    </SwiperProvider>
  )
}
