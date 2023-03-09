import styled from 'styled-components'
import { getVarable } from '../../utils'
import {NavLink} from 'react-router-dom'

export const ElProductCard = styled(NavLink)`
    box-shadow: 0 3px 4px #eaeaea;
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    display: block;

    .product_img{
        width: 100%;
        object-fit: cover;
    }

    .body{
        padding-inline: 8px;
        padding-bottom: 12px;

        .title{
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 100%;
            white-space: nowrap;
            font-weight: 400;
            margin-top: 0.5rem;
            color: ${getVarable('theme', 'color', 'inputColor')};
        }
        .price{
            margin-top: 0.4rem;
            color: ${getVarable('theme', 'color', 'inputColor')};
        }

        .old-price{
            p{
                color: #9b9b9b;
                text-decoration: line-through;
                padding: 10px   0;
                line-height: 1.7rem;
                display: initial;
            }
            .discount{
                float: right;
                border-radius: 4px;
                padding: 0.2rem 0.4rem;
                background: #f71f1f;
                color: #fff;
                margin-top: -0.7rem;
            }
        }
        .mini-payment{
            margin: 0.2rem 0 0.4rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: ${getVarable('theme', 'color', 'inputColor')};

            .price{
                background: #ffd200;
                border-radius: 2px;
                padding: 4px 5px;
                margin: 0 8px 0 0;
                font-size: 1rem;
                line-height: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                line-height: 1rem;

                img{
                    margin-right: 5px;
                }
            }
        }

        .rating{
            display: flex;
            align-items: center;
            column-gap: 3px;
        }

    }

    @media(max-width: 550px) {
        .product_img{
            height: 160px;
        }
        .body{
            padding: 8px;   
            font-size: 0.8rem;
    
            .mini-payment > .price{
                font-size: 0.8rem;

                img{
                    width: 10px;
                    height: 10px;
                }
            }
        }
    }
`