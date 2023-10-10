import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    overflow: hidden;
    font-size:14px;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, ul, li, p, button{
    margin:0;
    padding:0;
  }

  li{
    list-style:none;
  }
  
  button {
    background:none;
    border:none;
    cursor:pointer;
  }
  
  a {
    color:inherit;
    text-decoration:none;
  }
`
