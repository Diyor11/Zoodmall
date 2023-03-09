import styled from 'styled-components'
import { getVarable } from '../../../utils'

export const ElFooter = styled.footer`
    background: #fff;
    margin-top: 40px;

    .footer-top{
        padding-block: 40px;

        a.footer-brand svg{
            width: 160px;
        }
    
        .socialblock{
            margin-top: 1rem;

            .socialblock__container{
                display: flex;
                align-items: center;
                margin-top: 16px;

                .socialblock-icon{
                    min-width: 58px;
                    max-width: 85px;
                    height: 58px;
                    background-color: #cbcbcb3b;
                    border-radius: 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .3s;
                    margin-right: 5px;
    
                    &:hover{
                        background-color: ${getVarable('theme', 'bg', 'mainBg')};

                        svg > path, svg > g > path {
                            fill: #333;
                            fill-opacity: 1;
                        }
                    }
                }
            }
        }
        .footer_mobile-apps{
            margin-top: 25px;
            b{
                display: block;
            }
    
            a{
                margin: 0 0.5rem 0 0;
                display: inline-block;
                width: 47%;
                box-sizing: border-box;
                max-width: 120px;
            }
        }

        .footer-links{
            a{
                display: block;
                margin-bottom: 0.8rem;
                color: #606266;
                font-size: .9rem;
                font-weight: 500;
            }
        }

        .footer-contacts{
            p{
                font-size: 1.17em;
                font-weight: 700;
                margin-bottom: 1rem;
            }
            &_chat{
                display: flex;
                align-items: center;
                margin-bottom: 1rem;

                button{
                    border: none;
                    background: transparent;
                    margin-right: 5px;
                }
            }
            &_btn{
                background-color: ${getVarable('theme', 'bg', 'mainBg')};
                color: ${getVarable('theme', 'bg', 'blue')};
                border-radius: 14px;
                width: 250px;
                max-width: 100%;
                height: 54px;
                margin: 0;
                border: none;
                cursor: pointer;

                &:hover{
                    background: #ffdb33;
                    color: #fff;
                }
            }
        }
    }

    .footer-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 35px;

        &_payment{
            display: flex;
            align-items: center;

            svg{
                width: 160px;
            }

            img{
                margin-left: 2rem;
            }
        }

        @media(max-width: 800px) {
            &_payment{display: none;}
        }
    }
`