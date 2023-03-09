import styled from 'styled-components'
// import { ElContainer } from '../../core-ui/container.styles';
import {IConstants, VarableType} from '../../interfaces/contants'
import {getVarable} from '../../utils'

export const ElWrapper = styled.section``

export const CorouselWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

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
    /* background: ${(props: VarableType) => props}; */
    border-radius: 50%;

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

export const CorouselButton = styled.button<{theme: IConstants, position: string}>`
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
  ${(props) => props.position}: 15px;


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

// export const BestDealCard = styled.a`
//   color: #4d4d4d;
//   display: block;
//   border: 1px solid #eaeefc;
//   border-radius: 10px;
//   padding: 1px;
//   width: fit-content;
//   margin-inline: auto;

//   .deal-card_label{
//     text-align: center;
//     margin-top: 1.5rem;
//     margin-bottom: 1rem;
//     display: block;
//   }

//   .deal-card_image{
//     object-fit: cover;
//     display: block;
//   }
// `

export const TopBrandCard = styled.a`
  text-align: center;
  display: block;

  .wrapper{
    margin-inline: 0.5rem;
    background: #fff;
    padding: 16px 18px;
    box-shadow: 0 4px 4px hsl(0deg 0% 92% / 17%);
    border-radius: 12px;
  }

  .el-image{
    transition: .3s;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    max-width: 124px;
    display: flex;
    justify-content: center;
    align-content: center;

    img{
      object-fit: contain;
      max-width: 80%;
      max-height: 80%;
      border-radius: 12px;
      vertical-align: top;
    }
  }
`

export const BrandButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .brand-button{
    border-radius: 4px;
    width: 30px;
    height: 30px;
    background: #fff;
    border: none;
    cursor: pointer;
    transition: .3s;
    
    &:hover{
      background: ${getVarable('theme', 'bg', 'mainBg')};
    }

    >svg{
      width: 13px;
      height: 16px;
    }
  }
` 