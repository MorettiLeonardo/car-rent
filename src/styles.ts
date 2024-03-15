import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  gray: '#717482',
  lightGrey: '#e9e9e9',
  darkGray: '#2d2d2d',
  orange: '#ff4d30',
  bgColor: '#f8f8f8',
  borderColor: '#ccc'
}

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
    position: relative;

    @media (max-width: 1330px) {
      max-width: 90%;
      width: 90%;
    }
  }

  .isOrange {
    color: ${colors.orange};
  }
`

export const DefaultParagraph = styled.p`
  color: ${colors.gray};
  font-size: 16px;
`

export default GlobalStyle
