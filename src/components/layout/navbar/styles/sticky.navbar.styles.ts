import styled from 'styled-components'
import {IConstants} from '../../../../interfaces/contants'

type MainProps = {
    theme: IConstants;
    scrolled: boolean
}


export const StickyWrapper = styled.div<MainProps>`
    background-color: ${({theme}: MainProps) => theme.bg.mainBg};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    transform: translateY(${(props: MainProps) => props.scrolled ? '0':'-100%'});
    transition: transform .3s;

    >[data-header-middle]{
        margin: 0 !important;
        padding: 5px 0;

        @media(max-width: 661px) {
            form{
                display: none !important; 
            }
        }
        form{
            height: 2.7rem !important;
            padding: .7rem 0.75rem !important;

        }
    }
`