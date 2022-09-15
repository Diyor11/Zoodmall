import styled from "styled-components";

import {IContants} from '../../../interfaces/contants'

type MainProps = {
    theme: IContants,
    active?: boolean
}

export const ElNavbarTop = styled.div`
    background-color: ${({theme: {bg}}) => bg.mainBg};
    padding: 0.64em 0;
    font-size: 0.87em;
    color: ${({theme: {color}}) => color.mainColor};


    @media(max-width: 991px){
        display: none !important;
    }
`

export const TopNavLink = styled.a`
    display: flex;
    align-items: center;
    font-size: .8em;
    margin-right: 2.85em;
    font-family: sans-serif;
    font-weight: 550;
    cursor: pointer;

    .svg_icon{
        margin-right: 5px;
    }
`

export const DropDown = styled.div<MainProps>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: '0 5px';
    position: relative;


    >.dropdown__button{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-family: sans-serif;

        >svg.arrow-down{
            color: ${({theme}: MainProps) => theme.bg.blue};
        }
        >.dropdown__text{
            font-family: sans-serif;
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            color: ${({theme}: MainProps) => theme.bg.blue};
    
            @media(max-width: 991px){
                font-size: 12px !important;
            }
        }
    }


    >.dropdown__menu{
        pointer-events: ${({active}: MainProps) => active? 'auto':'none'};
        opacity: ${({active}: MainProps) => active? 1:0};
        transform: ${({active}: MainProps) => active? 'translateY(0)':'translateY(-10px)'};
        transition: .3s;
        position: absolute;
        right: 0;
        top: calc(100% + .5rem);
        padding: 10px 0;
        margin: 5px 0;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        z-index: 99;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

        >li{
            white-space: nowrap;
            padding: 0 20px;
            font-size: 14px;
            color: #606266;
            cursor: pointer;
            line-height: 36px;
            font-family: 'Roboto', sans-serif;
        }
    }
`