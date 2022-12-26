// import { ElContainer } from '../../core-ui/container.styles';
import styled from 'styled-components'
import {getVarable} from '../../utils'
import {IConstants} from '../../interfaces/contants'

interface ICorousel{
  navigation: boolean;
  theme: IConstants
}

interface IWrapper{
    width: number;
    duration: number;
    translateWrapper: number;
}

export const Corousel = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    touch-action: pan-x;
    overflow: hidden;
    border-radius: 8px;

    @media(max-width: 768px){
      border-radius: 0;

      .action-button{
        display: none!important;
      }
    }

    .action-button{
      position: absolute;
      top: 50%;
      background-color: ${getVarable('theme', 'bg', 'mainBg')};
      display: ${({navigation}: ICorousel) => navigation ? 'flex': 'none'};
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      z-index: 10;
      transition: .3s;
      width: 40px;
      height: 40px;
      cursor: pointer;
       &:hover> svg{
        width: 33px;
        height: 33px
       }
    }

    .action-button.prev{
      translate: 50% -50%;
      left: 0;
    }

    .action-button.next{
      translate: -50% -50%;
      right: 0;
    }
`

export const CorouselWrapper = styled.div`
  display: flex;
  align-items: baseline;
  transform: ${({translateWrapper}: IWrapper) => `translateX(${-translateWrapper}px)`};
  width: ${({width}: IWrapper) => width + 'px'};
  transition-duration: ${({duration}: IWrapper) => duration + 's'};
  transition-timing-function: ease-out;
  transition-property: transform;
`

export const DotList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px){
    display: none;
  }
`

export const ButtonLeft = styled.span`
`