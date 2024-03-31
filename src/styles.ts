import styled, { createGlobalStyle } from 'styled-components'
import overlayImage from './assets/images/overlay_image.png'

export const breakpoints = {
  desktop: '1330px',
  notebook: '1280px',
  tablet: '768px',
  smartphone: '480px'
}

export const colors = {
  white: '#fff',
  black: '#000',
  gray: '#717482',
  lightGray: '#e9e9e9',
  darkGray: '#2d2d2d',
  primary: '#ff4d30',
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
    text-decoration: none;
    scrollbar-color: ${colors.primary} ${colors.white};
    scrollbar-width: thin;
  }

  .container {
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1330px) {
      max-width: 90%;
      width: 90%;
    }
  }

  .isOrange {
    color: ${colors.primary};
  }
`

export const Overlay = styled.div`
  position: absolute;
  background-image: url(${overlayImage});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.1;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`

export default GlobalStyle
