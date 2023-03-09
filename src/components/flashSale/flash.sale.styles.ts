import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const ElWrapper = styled.section``

export const Content = styled.div`
    background-color: #ffb800;
    border-radius: 12px;
    color: #fff;
    padding: 45px 0 45px 35px;
    display: flex;

    @media(max-width: 600px) {
        padding: 15px 15px 30px;
    }

    .text-content{
        
        &__title{
            color: #fff;
            font-size: 2rem;
            font-weight: 500;
            padding: 0;
            margin-bottom: 1rem;
        }

        &__btn{
            display: block;
            font-size: 1.1rem;
            margin-top: 25px;
        }
    }

    .corousel-container{
        position: relative;
    }
`


export const CountBoxes = styled.ul`
    display: flex;
    align-items: center;

    @media(max-width: 900px) {}

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
    display: flex;
    align-items: center;
    position: relative;

    .flash{
        padding-right: 35px;
        display: flex;
        flex-wrap: nowrap;
        justify-items: flex-start;
        align-items: flex-start;
        color: #606266;
        font-weight: 500;

        &-img{
            max-width: 117px;
            height: 139px;
            margin-right: 20px;
            border-radius: 20px;
            object-fit: cover;
        }

        &-data{
            &__title{
                margin-bottom: 30px;
                margin-top: 20px;
                overflow: hidden;
                height: 34px;
                position: relative;
                font-size: 14px;

                &::after{
                    content: "";
                    text-align: right;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 30%;
                    height: 17px;
                    background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%)
                }
            }

            &__credentials{
                display: flex;
                justify-content: space-between;
                align-items: end;
                &-price{
                    font-size: 16px;
                    color: #4d4d4d !important;

                    /* >.new-price{} */
                    >.old-price{
                        text-decoration: line-through;
                        color: #9b9b9b !important;
                    }
                }
                >.discount{
                    border-radius: 4px;
                    padding: 0.2rem 0.4rem;
                    background: #f71f1f;
                    color: #fff;
                    margin-top: -0.7rem;
                    font-size: 16px;
                }
            }
            .progressbar{
                width: 100%;
                margin-top: 10px;
                background: rgba(255,210,0,.4);
                height: 10px;
                border-radius: 40px;
                position: relative;

                &:after{
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: "";
                    border-radius: 40px;
                    height: 10px;
                    width: 75%;
                    background: #ffa325;
                }
            }
        }
        &-badge{
            position: absolute;
            top: 10px;
            left: 0px;
            background-color: rgb(255, 97, 45); 
            color: rgb(255, 255, 255);
            z-index: 1;
            padding: 4px;
            font-size: 15px;
        }
    }

    @media(max-width: 450px) {

        .flash{
            align-items: center;
            padding-right: 0;
        }
        .flash-img{
            max-width: 50px;
            height: 70px;
        }
        .flash-data{
            &__title{
                font-size: 12px;
                margin-bottom: 17px;
                margin-top: 10px;
            }
            &__credentials-price{
                font-size: 12px;
            }

            .discount{
                font-size: 14px;
            }
        }
    }
`
