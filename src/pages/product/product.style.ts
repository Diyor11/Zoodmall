import styled from 'styled-components'
import { getVarable } from '../../utils'

import { IConstants } from '../../interfaces/contants'

type RadioProps = {
    theme: IConstants;
    checked: boolean;
}

export const ElProduct = styled.section`
    background-color: #fff;
    padding: 20px 0;
    margin-top: 1rem;
`

export const ElGallery = styled.div`
    .big-image{
        background: #fff;
        border: 1px solid #f1f1f1;
        box-sizing: border-box;
        box-shadow: 0 4px 4px hsl(0deg 0% 92% / 17%);
        border-radius: 12px;
        padding: 12px;

        .swiper-item img{
            max-width: 250px;
            max-height: 400px;
            width: 250px;
            height: 350px;
            margin-inline: auto;
            object-fit: cover;
            display: block;
            border-radius: 6px;
        }
    }

    .gallery-thumb{
        margin-top: 1rem;
        padding-inline: 1.2rem;
        position: relative;

        .swiper-item{
            display: grid;
            place-items: center;
            border-radius: 4px;

            img{
                object-fit: cover;
                width: 65px;
                height: 80px;
            }
        }
        .swiper-item.swiper-slide-active { 
            border: 1px solid ${getVarable('theme', 'bg', 'blue')};
        }

        .galery-navigations > .navigation-btn{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border: none;
            background-color: transparent;
            z-index: 1;

            > svg {
                fill: ${getVarable('theme', 'bg', 'blue')};
            }
        }   
        .galery-navigations > .swiper-button-disabled{
            opacity: 0.6;
        }

        .galery-navigations > .navigation-btn.prev{
            left: 0;
        }
        .galery-navigations > .navigation-btn.next{
            right: 0;
        }
    }
`

export const ElProductContent = styled.div`
    .title{
        font-size: 18px;
        font-weight: 500;
        line-height: 1.4;
        margin-bottom: 29px;
    }
    
    .price{
        margin-bottom: 15px;

        &-un_sale{
            color: #4a4a4a;
            font-weight: 700;
            font-size: 1.4rem;
        }
        &-sale{
            font-size: 16px;
            color: ${getVarable('theme', 'bg', 'mainBg')};
            margin-left: 8px;
            text-decoration: line-through;
        }
        &-percentage{
            background-color: ${getVarable('theme', 'bg', 'mainBg')};
            margin-left: 8px;
            border-radius: 2px;
            font-size: 14px;
            font-weight: 500;
            padding: 3px 4px;
        }
    }

    .product-detail{
        background: #f8f8f8;
        border: 1px solid ${getVarable('theme', 'bg', 'blue')};
        border-radius: 5px;
        padding: 17px;

        .price-actual_zoodpay{
            color: ${getVarable('theme', 'bg', 'blue')};
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            span{
                margin-inline: 5px;
            }
        }
        .price-actual{
            margin-bottom: 12px;     
            color: #4a4a4a;
            font-size: 1.4rem;
            font-weight: 700;
            
            span{
                background: ${getVarable('theme', 'bg', 'mainBg')};
                border-radius: 2px;
                margin-right: 5px;
                padding: 2px 5px;
            }
        }
    }

    .product-detail-options{

        &-title{
            margin-right: 18px;
        }

        .ranking{
            margin-bottom: 16px;
        }

        .rank-mini{
            display: flex;
            align-items: center;

            &_all{
                display: flex;
                align-items: center;
                color: #9b9b9b;
                font-size: .875rem;
            }

            &_count{
                font-weight: 600;
                padding-right: 3px;
            }
        }
        .shopping-mini{
            margin-bottom: 16px;
            &_data > p{
                align-items: center;
                color: #9b9b9b;
                margin-bottom: 5px;
                display: flex;
                margin: 0 0 0.4rem;
            }
    
            &_data > p.delivery{
                color: #2469d1;
                font-weight: 600;
            }
        }

        &_alert{
            background-color: #f4f4f5;
            width: fit-content;
            padding: 8px 16px;
            font-size: 13px;
            line-height: 18px;
            color: #909399;
            
            .MuiAlert-icon{
                color: #909399;
                padding: 0;

                svg{
                    width: 14px;
                    height: 14px;
                }
            }

            .MuiAlert-message{
                padding: 0;
            }
        }

        &_count{
            margin-bottom: 16px;

            .row-title{
                margin-right: 20px;
            }

            .buttons-group{
                margin-right: 15px;
                position: relative;
                width: 150px;
                max-width: 180px;
                background: transparent;
                
                > input {
                    border-radius: 4px;
                    background: #ddd;
                    width: 100%;
                    text-align: center;
                    pointer-events: none;
                    height: 36px;
                    line-height: 36px;
                    user-select: none;
                    border: 1px solid #ddd;
                    /* border: 1px solid ${getVarable('theme', 'bg', 'blue')}; */
                }

                &_btn{
                    position: absolute;
                    top: 1px;
                    width: 34px;
                    line-height: 34px;
                    background-color: #f5f7fa;
                    color: #606266;
                    text-align: center; 
                    font-size: 18px;
                    cursor: pointer;

                    &:hover{
                        color: ${getVarable('theme', 'bg', 'mainBg')};
                    }

                    &:hover + input{
                        border-color: ${getVarable('theme', 'bg', 'mainBg')};
                    }
                }

                .product-count.mines{
                    left: 1px;
                    border-radius: 4px 0px 0px 4px;
                }
                .product-count.plus{
                    border-radius: 0px 4px 4px 0px;
                    right: 1px;
                }

                .product-count[data-disable='true']{
                    cursor: no-drop;
                }
            }

            .stock-in{
                color: ${getVarable('theme', 'bg', 'mainBg')};
            }
        }

        &_buttons{
            margin-bottom: 16px;

            .button{
                font-size: 1.2rem;
                font-weight: 400;
                padding: 17px;
                text-transform: uppercase;
                color: #f4f4f5;
                cursor: pointer;
                border-radius: 4px;
            }

            @media(max-width: 600px){
                .button{
                    font-size: 1rem;
                }
            }

            @media(max-width: 450px){
                .button{
                    width: 100%;
                }

                .bay.stick-block{
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    z-index: 99;
                }
            }

            .add-to_cart{
                background-color: ${getVarable('theme', 'bg', 'blue')};
                margin-right: 10px;

                &:hover{
                    background: #5759a8;
                }
            }

            .bay.stick-block{
                background-color: ${getVarable('theme', 'bg', 'mainBg')};
            }
        }   
        .product-detail_payment{
            margin-bottom: 16px;
    
            > div{ 
                margin-right: 10px;
                cursor: pointer;
            }
        }

        .product-detail_button{
            margin-bottom: 16px;

            .guarantee{
                width: fit-content;
                background: #fff;
                border: 1px solid #dcdfe6;
                border-radius: 4px;
                color: #606266;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                line-height: 1;
                padding: 12px 20px;
                text-align: center;
                transition: .1s;
                white-space: nowrap;
                display: flex;
                align-items: center;

                img{
                    margin-right: 8px;
                }

                &:hover{
                    color: ${getVarable('theme', 'bg', 'mainBg')};
                    border-color: ${getVarable('theme', 'bg', 'mainBg')};
                    background-color: #eaeaf4;
                }
            }
        }

        &_cashback{
            margin-bottom: 50px;

            .promo-code{
                align-items: center;
                background: #ffd300;
                background: linear-gradient(90deg,#fff3b8 50%,#ffb80d);
                color: #4d4d4d;
                cursor: pointer;
                font-weight: 700;
                display: flex;
                justify-content: space-between;
                align-items: start;
                margin-top: 1rem;
                min-height: 1.5em;
                padding: 1rem 2rem;
                position: relative;
                width: 80%;

                &::after{
                    background: linear-gradient(320deg,#fff 5px,transparent 0) 0 5px,linear-gradient(-137deg,#fff 6px,#ffb80d 0) 0 5px;
                    background-position: 100% 100%;
                    background-repeat: repeat-y;
                    background-size: 10px 10px;
                    position: absolute;
                    right: 79px;
                    bottom: 0px;
                    content: " ";
                    display: block;
                    height: 100%;
                    width: 100%;
                    left: 10px;
                }

                &_title{
                    color: ${getVarable('theme', 'bg', 'blue')};
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                &_qrcode{
                    margin-left: 20px;
                }

                @media(max-width: 600px){
                    display: block;
                    width: 100%;

                    &_title{
                        font-size: 1rem;
                    }

                    &_qrcode{
                        margin-left: 0;
                        margin-top: 12px;
                    }
                }
            }
        }
    }   
`

export const RadioButton = styled.label`
    min-height: 36px;
    height: auto;
    height: 10px 20px 10px 10px;
    align-items: center;
    margin: 0 5px 5px 0;
    cursor: pointer;
    border: 1px solid ${({checked, theme}: RadioProps) => checked ? theme.bg.mainBg:'#dcdfe6'};
    border-radius: 4px;
    padding: 10px 20px 10px 10px;
    display: flex;

    .el-radio__input{
        display: block;
        position: relative;

        &:hover .el-radio__inner{
            box-shadow: 0 0 2px 2px ${getVarable('theme', 'bg', 'blue')};  
        }

        .el-radio__inner{
            width: 14px;
            height: 14px;
            display: block;
            border-radius: 50%;
            border: 1px solid ${({checked, theme}: RadioProps) => checked ? theme.bg.mainBg:'#dcdfe6'};
            background-color: ${({checked, theme}: RadioProps) => checked ? theme.bg.mainBg:'#FFF'};
            cursor: pointer;

            
            &:after{
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: #fff;
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);   
            }
        }

        input.radio-input{
            position: absolute;
            inset: 0;
            margin: auto;
            z-index: -1;
            opacity: 0;
        }

        input.radio-input:focus + .el-radio__inner{
            box-shadow: 0 0 2px 2px #2d3092;   
        }
    }

    .el-radio__label{
        display: block;
        text-transform: capitalize;
        font-size: 14px;
        padding-left: 10px;
        color: ${({theme, checked}: RadioProps) => checked ? theme.bg.blue:'#60626'};
    }
`