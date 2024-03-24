import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  padding-top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  img {
    max-width: 430px;
    max-height: 430px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-wrap: wrap;
    text-align: center;
    padding-top: 200px;

    img {
      padding: 20px;
      max-width: 300px;
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 500px;
  width: 100%;

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  h2 {
    font-size: 40px;
  }

  p {
    color: ${colors.gray};
    line-height: 24px;
  }

  @media (max-width: ${breakpoints.notebook}) {
    padding-bottom: 50px;

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  span {
    color: ${colors.black};
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.notebook}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`
