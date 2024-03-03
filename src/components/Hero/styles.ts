import styled from 'styled-components'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`

export const HeroContent = styled.div`
  h4 {
    font-size: 24px;
  }

  h1 {
    font-size: 52px;
    margin-top: 28px;
    margin-bottom: 28px;
  }

  div {
    margin-top: 28px;
    display: flex;
    gap: 16px;
  }
`

export const MainCar = styled.img`
  max-width: 800px;
  max-height: 800px;
`

export const HeroBgImage = styled.img`
  position: absolute;
  right: 0;
  top: 0px;
`
