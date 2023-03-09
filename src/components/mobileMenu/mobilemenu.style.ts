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
    z-index: 999;

    .content{
        background-color: #fff;
        max-width: 320px;
        min-width: 320px;
        padding: 20px;
        height: 100%;
        overflow-y: scroll;

        ul li{
            padding: 12px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;

            &:hover{
                background-color: #e7e7e7;
            }
        }
    }


    @media(min-width: 991px){
        display: none;
    }
`