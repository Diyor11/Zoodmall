import styled, {createGlobalStyle} from "styled-components";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body[no-scroll]{
        overflow: hidden !important;
    }

    body{
        font-family: 'Roboto',sans-serif;
        font-size: 14px;
        color: #4c4c4c
    }

    img{
        display: block;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    button, input{
        outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    li{
        list-style-type: none;
    }

    body{
        background-color: #fbfbfb;
        font-family: 'Roboto', sans-serif;
    }
`

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: #4d4d4d;
  margin-block: 1rem;
  text-transform: capitalize;
`

export default GlobalStyles