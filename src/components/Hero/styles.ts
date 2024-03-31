import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  height: 80vh;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
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

  p {
    color: ${colors.gray};
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.notebook}) {
    max-width: 400px;

    h1 {
      font-size: 2rem;
    }
  }
`

export const MainCar = styled.img`
  max-width: 800px;
  max-height: 800px;

  @media (max-width: ${breakpoints.notebook}) {
    max-width: 500px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const HeroBgImage = styled.img`
  position: absolute;
  right: 0;
  top: -100px;

  @media (max-width: 1100px) {
    display: none;
  }
`
