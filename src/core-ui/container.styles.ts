import styled from "styled-components";

interface Props{
    nopadding?: boolean;
    noTopSpace?: boolean;
}

export const ElContainer = styled.div`
    width: 1106px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-top: ${(props: Props) => props.noTopSpace ? '0':'1rem'};

    @media(max-width: 992px){
        padding-left: 0;
        padding-right: 0;
    }
    @media(max-width: 768px){
        max-width: 100% !important;
        padding-left: ${(props: Props) => props.nopadding ? '0px':'12px'};
        padding-right: ${(props: Props) => props.nopadding ? '0px':'12px'};
    }
`