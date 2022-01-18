import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeo from "../fonts/spoqa/SpoqaHanSansNeo-Regular.woff2";
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Spoqa Han Sans Neo";
        src: url(${SpoqaHanSansNeo});
    }

    * {
        box-sizing: border-box;
    }

    p {
        font-size: 15px;
        color: white;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', '궁서';
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    #root {
        width:100%;
        height: 100%;
    }

    //AI 소개 하단 위치바
    .swiper-pagination-bullet{
        background-color: rgb(96 96 96);
        width: 40px;
        height: 2.5px;
        opacity: 1;
        border-radius:0px;
    }
    .swiper-pagination-bullet-active{
        background-color: white;
    }
`;

export default GlobalStyle;
