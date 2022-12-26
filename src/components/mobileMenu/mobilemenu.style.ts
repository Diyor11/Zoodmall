import styled from 'styled-components'
import {IConstants} from '../../interfaces/contants'

interface Props{
    theme: IConstants,
    open: boolean,
    positions: {top: string},
}

export const MenuWrapper = styled.aside<Props>`
    position: fixed;
    left: 0;
    transform: translateX(${({open}) => open ? '0':'-100%'});
    top: ${({positions}) => positions.top}px;
    height: ${({positions}) => `calc(100vh - ${positions.top}px)`};
    width: 100%;
    background: rgba(0,0,0,.3);
    transition: transform .3s;

    @media(min-width: 991px){
        display: none;
    }
`