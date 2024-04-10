import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 100px;
    margin-top: 50px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 150vh;
    text-align: center;

    h2 {
      font-size: 28px;
    }
  }
`

export const CardContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: ${breakpoints.notebook}) {
    gap: 20px;
    flex-wrap: wrap;
    position: none;
  }
`

export const Card = styled.div`
  text-align: center;
  max-width: 400px;

  img {
    width: 170px;
    height: 170px;
  }

  > h4 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.43;
    color: ${colors.gray};
    margin-top: 16px;
  }

  @media (max-width: ${breakpoints.notebook}) {
    width: 300px;

    img {
      width: 100px;
      height: 100px;
    }

    h4 {
      font-size: 20px;
    }
  }
`
