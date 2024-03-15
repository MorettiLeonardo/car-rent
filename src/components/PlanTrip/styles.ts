import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 100px;
    margin-top: 50px;
  }
`

export const CardContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
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
`
