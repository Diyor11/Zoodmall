import styled from 'styled-components'
import {Slider} from '@mui/material'
import { getVarable } from '../../utils'
import {Accordion as AccordionCom ,AccordionSummary} from '@mui/material'

export const Breadcrumbs = styled.div`
    margin: 12px 0;

    .breadcrumbs{
        display: flex;

        &-item{
            padding: 0 5px;

            color: #9697a1;
            font-size: 14px;
            text-transform: capitalize;
            font-weight: 400;
            cursor: pointer;

            &:hover{
                color: #ffd200;
                text-decoration: underline;
            }
        }
    }
`

export const ElMenubox = styled.div`
    .mini-accordion > .MuiAccordionSummary-root{
        @media(min-width: 900px) {
            display: none;
        }
    }

    .trigger-text{
        min-height: 40px;
        height: auto;
        line-height: 40px;
        font-size: 14px;
        color: #4d4d4d;
        padding: 0 20px;
        cursor: pointer;
        transition: border-color .3s,background-color .3s,color .3s;
        box-sizing: border-box;

        span, a{
            line-height: 1.2;
            padding-top: 10px;
            display: block;
            padding-bottom: 10px;
            padding-right: 5px;

            &::first-letter{
                text-transform: uppercase;
            }
        }

        /* &:hover{
            background-color: #eaeaf4;
        } */
    }
`
export const ElFilterbox = styled.div`
    z-index: 99;
    .range-input{
        height: 28px;
        line-height: 28px;
        padding-inline: 5px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        z-index: 99;
        
        &:focus{
            border-color: #2d3092;
        }
    }

    /* window size sm */ 
    @media(max-width: 900px) {
        position: fixed;
        top: 0;
        right: -100%;
        transform: translateX(${({active}: {active: boolean}) => active ? '-100%':'0'});
        transition: transform 0.3s ease-in ;

        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.4);

        .content{
            width: 300px;
            height: 100%;
            background: #fff;
            margin-left: auto;
        }
    }
`

export const Accordion = styled(AccordionCom)`
    box-shadow: none !important;

    &:before{
        display: none;
    }

    .MuiAccordion-root.MuiAccordion-rounded {
        transition: border-color .3s,background-color .3s,color .3s;
        background: transparent;
        
        &:hover > .MuiAccordionSummary-root{
            background-color: #eaeaf4;
        }
    }
`

export const AccordionHeader = styled(AccordionSummary)`
`

export const AccordionButton = styled.div`
    min-height: 40px;
    height: auto;
    line-height: 40px;
    font-size: 14px;
    color: #4d4d4d;
    padding: 0 20px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;

    span, a{
        line-height: 1.2;
        padding-top: 10px;
        display: block;
        padding-bottom: 10px;
        padding-right: 5px;

        &::first-letter{
            text-transform: uppercase;
        }
    }

    &:hover{
        background-color: #eaeaf4;
    }
`

export const CostRange = styled(Slider)`

    .MuiSlider-rail{
        color: #939393;
    }
    .MuiSlider-track{
        color: ${getVarable('theme', 'bg', 'mainBg')};
    }

    .MuiSlider-thumb:before{
        box-shadow: 1px 1px 4px hsl(0deg 0% 47% / 25%);
        border: 0.2px solid #d8d8d8;
        background-color: #fff;

        &:hover{
            transform: scale(1.3);
            cursor: grab;
        }
    }
`

export const CheckboxButton = styled.button`
    background: transparent;
    border: 1px solid #606266;
    border-radius: 2px;
    margin: 4px;

    .MuiFormControlLabel-root{
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        padding: 3px 8px;
        border-radius: 3px;
        height: 28px;
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        user-select: none;
        white-space: nowrap;
        margin-right: 0;
        
        .MuiCheckbox-root{
            padding: 5px;
        }
    }
` 