import styled from 'styled-components'
import { ElContainer } from '../../core-ui/container.styles';
import {IConstants} from '../../interfaces/contants'

type MainProps = {
    theme: IConstants,
    active: boolean,
}

interface ICorouselItem{
  width: number;
  space?: number
}

export const ElWrapper = styled.section``

export const CorouselContainer = styled(ElContainer) `
  padding-top: 1rem;

  @media(max-width: 768px){
    padding-top: 0;
  }
`

export const HeroDotListItem = styled.li`
    margin: 5px;

   button{
    font-size: 0;
    display: block;
    color: transparent;
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    height: 7px;
    width: ${({active}: MainProps) => active ? '30px':'7px'};
    background-color: ${({theme, active}: MainProps) => active ? theme.bg.blue : theme.bg.mainBg};
  }
`

export const CorouselItem = styled.div`
    width: ${({width}: ICorouselItem) => width + 'px'};
    margin-right: ${({space}: ICorouselItem) => space && space + 'px'};
    cursor: pointer;

    img{
      display: block;
      width: 100%;
    }
`