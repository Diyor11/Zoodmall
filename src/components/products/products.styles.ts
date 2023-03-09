import styled from 'styled-components'
import { getVarable } from '../../utils'

export const ElWrapper = styled.div``

export const LoadButton = styled.button`
    margin-inline: auto;
    display: flex;
    align-items: center;
    background-color: ${getVarable('theme', 'bg', 'blue')};
    border: none;
    padding: 12px 10px;
    border-radius: 6px;
    cursor: pointer;
    opacity: ${({disabled}) => disabled ? 0.5:1};

    span{
        font-family: sans-serif;
        font-weight: 600;
        color: #fff;
        margin-left: 6px;
        font-size: 14px;
    }
`