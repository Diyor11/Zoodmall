import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ElWrapper = styled.section``

export const Content = styled.div`
    background-color: #ffb800;
    border-radius: 12px;
    color: #fff;
    padding: 45px 0 45px 35px;

    .text-content{
        
        &__title{
            color: #fff;
            font-size: 2.2rem;
            font-weight: 500;
            padding: 0;
            margin-bottom: 1rem;
        }
    }

    .corousel-container{}
`


export const CountBoxes = styled.ul`
    display: flex;
    align-items: center;

    li{
        width: 55px;
        padding: 8px 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2.76726px 2.21381px rgb(0 0 0 / 7%);
        border-radius: 16px;
        font-size: 24px;
        font-weight: 700;
        margin-right: 15px;
        border: 0.5px solid #dadada;
        background-color: #fff;
        color: #4d4d4d;

        span{
            font-size: 12px;
            font-weight: 500;
        }
    }
`

export const Card = styled(NavLink)`
    display: block;
    background: #fff;
    max-width: 445px;
    border-radius: 12px;
    padding: 12px;
    width: 90%;

    .inner{
        padding-right: 35px;
        display: flex;
        flex-wrap: nowrap;
        justify-items: flex-start;
        align-items: flex-start;
        color: #606266;
    }
`
