import {useSwipe} from './SwiperContext'

export interface SwiperItemProps{
  Wrapper: React.FC<any>;
  children: React.ReactNode;
  space?: number;
  className?: string
}

export default function SwiperItem({Wrapper, children, space, className}: SwiperItemProps) {
    
    const data = useSwipe()

  return (
    <Wrapper space={space} className={className} {...data}>
        {children}
    </Wrapper>
  )
}
