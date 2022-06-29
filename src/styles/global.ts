import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #ccc;
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }

    header{
        display: flex;
        align-items: center;
        background-color: #000;
        padding: 10px;
        justify-content: space-evenly;
    }

    img{
        display: block;
        width: 100%;
    }

    body, input, textarea, button{
        font: 400 1rem "Roboto", sans-serif;
    }
    
    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`;