import styled from 'styled-components'
import {IConstants} from '../../../../interfaces/contants'

type MainProps = {
    theme: IConstants,
}

type Active = {
    active: boolean;
}

export const MenuWrapper = styled.div`
    @media(max-width: 991px){
        display: none !important;
    }
`

export const MeinMenu = styled.ul`
    display: flex;
    align-items: center;

    >.menu__item{
        flex-grow: 1;
        height: 42px;
        line-height: 42px;
        border-radius: 0.5rem;
        transition: 200ms;
        cursor: pointer;
        &:hover{
            background: ${({theme}:MainProps) => theme.bg.gray};
        }
        &:first-child{
            background: ${({theme}:MainProps) => theme.bg.gray};
        }

        >a{
            display: block;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            color: #4a4a4a;
            font-size: 14px;
        }
    }
`

export const AllCategoryButton = styled.span`
    display: flex ;
    align-items: center;
    justify-content: center;
    >span{
        margin: 0 4px;
        font-family: 'Roboto', sans-serif;
        color: #4a4a4a;
        font-size: 14px;
    }
    >.arrow-down{
        transform: rotate(${({active}: Active) => active ? '180deg':'0'});
        transition: transform .4s;
        transition-delay: .15s;
    }
`

export const MenuModal = styled.div`
    position: absolute;
    top: 140px;
    left: 9%;
    background: #fff;
    z-index: 100;
    max-height: calc(100vh - 140px);
    height: ${({active}: Active) => active ? 'calc(100vh - 140px)':'0'};
    transition: height .25s;
    overflow-y: scroll;
    min-width: 200px;

    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${({theme}: MainProps) => theme.bg.gray}; 
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({theme}: MainProps) => theme.bg.blue}; 
        border-radius: 10px;
    }

    >ul{
        padding: 5px 0;
        border-radius: 2px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        >li{
            padding: 0 10px;
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            color: #4a4a4a;
            line-height: 36px;
            height: 36px;
        }
    }
`