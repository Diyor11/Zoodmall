import styled from 'styled-components'

import { IContants } from '../../../interfaces/contants'

type ThemeProps = {
    theme: IContants,
}

export const ElNavWrapper = styled.div`
    margin: 1.5rem 0;

    @media(max-width: 991px){
        margin: 0;
        background: ${(props: ThemeProps) => props.theme.bg.mainBg};
        flex-wrap: nowrap;
        padding: 12px 0;

    .header-middle__row{
        flex-wrap: wrap;

        >.brand{
            >[data-dropdown]{
                display: flex !important;
            }
            >svg.burger__menu{
                display: flex !important;
                cursor: pointer;
            }
            
            > svg.brand__icon{
                width: 120px !important;
                margin: 0 7px;
            }
        } 
        >.header__search{
            flex-basis: 100% !important;
            order: 4;
            flex-basis: 100%;
            margin-top: 10px;
        }
        >.header__icons{
            order: 3;
            margin-left: auto;
            .header-icon__item__content{
                display: none !important;
            }
        }
    }

    @media(max-width: 661px){
        .header-middle__row > .brand >svg.brand__icon{
            width: 100px !important;
        }
    }
    }

    .header-middle__row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        >.brand{
            display: flex;
            align-items: center; 
            
            >[data-dropdown]{
                display: none;
            }
            >svg.burger__menu{
                display: none;
            }

            > svg.brand__icon{
                width: 160px;
            }
        } 
        >.header__search{
            flex-basis: 50%;

            form{
                background-color: ${({theme}: {theme: IContants}) => theme.bg.gray};
                padding: 1.12em 1.33em;
                height: 3em;
                border-radius: 0.66em;
                position: relative;
                width: 100%;

                input{
                    background: transparent;
                    font-size: 1em;
                    width: 90%;
                    border: none;
                    color: ${({theme}: {theme: IContants}) => theme.color.inputColor};
                }
                .header-search__icon{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 12px;
                    margin: auto 0;
                    >svg{
                        height: 100%;
                    }
                }
            }
        }
        >.header__icons{
            order: 3;
            display: flex;
            align-items: center;

            >.header-icon__item{
                display: flex;
                align-items: center;
                margin-left: 1.2rem;
                cursor: pointer;
                transition: transform 300ms;

                @media(min-width: 991px){
                    &:hover{
                        transform: translateY(-5px);
                    }
                }
                >.custom__badge{
                    span{
                        color: #fff;
                        background: #303493;
                    }
                }
                >.header-icon__item__content{
                    color: #303493;
                    font-family: sans-serif;
                    margin-left: 12px;
                    font-size: 14px;
                }
            }
        }
    }
`