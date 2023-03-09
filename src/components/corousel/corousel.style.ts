import styled from 'styled-components'
import { IConstants } from '../../interfaces/contants'
import { getVarable } from '../../utils'

export const CorouselWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  min-height: 100px;
  background-color: ${getVarable('theme', 'bg', 'gray')};

  .swiper{
    &-slide{
      
      &__img{
        border-radius: 12px;
        display: block;
        width: 100%;
        object-fit: contain;
      }
    }

  }

  .swiper-button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${getVarable('theme', 'bg', 'mainBg')};
    border-radius: 50%;
    cursor: pointer;

    >svg{
      fill: #fff;
      width: 30px;
      height: 30px;
      transition: width height .25s ease-in;

      &:hover{
        width: 35px;
        height: 35px;
      }
    }
  }

  .swiper-button.prev{
    left: 15px;
  }

  .swiper-button.next{
    right: 15px;
  }

  @media(max-width: 768px){
    .swiper{
      border-radius: 0;
    }

    .swiper-button{
      display: none;
    }
  }
` 

export const MyPaginantion = styled.ul<{theme: IConstants, bottom: number}>`
  position: absolute;
  bottom: ${getVarable('bottom')}px !important;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: 4px;

  .swiper-pagination-bullet{
    opacity: 1;
    transition: width .25s linear;
    border-radius: 4px;
  }

  .swiper-pagination-bullet.blue-bullet{
    background: ${getVarable('theme', 'bg', 'mainBg')};
  }

  .swiper-pagination-bullet.white-bullet{
    background: #ffd200;
  }

  .swiper-pagination-bullet-active{
    width: 35px;
  }

  .swiper-pagination-bullet-active.blue-bullet{
    background: ${getVarable('theme', 'bg', 'blue')};
  }
  .swiper-pagination-bullet-active.white-bullet{
    background: #fff;
  }
`