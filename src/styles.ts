import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;
  }
`

export const colors = {
  white: '#fff',
  black: '#000',
  gray: '#717482',
  orange: '#ff4d30',
  bgColor: '#f8f8f8'
}

export default GlobalStyle
