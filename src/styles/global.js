import { createGlobalStyle } from 'styled-components';

export const GlobalContainer = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
body {
    font: 400 14px Roboto, sans-serif;
    background: #222;
    -webkit-font-smoothing: antialiased;
    color: #fff;
}

`;
