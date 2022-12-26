import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body[no-scroll]{
        overflow: hidden !important;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    button, input{
        outline: none;
    }

    li{
        list-style-type: none;
    }

    body{
        background-color: #fbfbfb;
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyles