import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, ul, li, button{
    margin:0;
    padding:0;
  }

  li{
    list-style:none;
  }
  
  button {
    background:none;
    border:none;
  }
  
  a {
    color:inherit;
    text-decoration:none;
  }
`
