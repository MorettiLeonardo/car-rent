import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
  margin-top: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const WhyChooseUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h4 {
    font-size: 24px;
    font-weight: 500;
  }

  h2 {
    font-size: 34px;
  }

  p {
    color: ${colors.gray};
    line-height: 24px;
    font-size: 16px;
  }

  button {
    max-width: 200px;
  }
`
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    max-width: 110px;
    width: 100%;
  }
`

export const CartContent = styled.div`
  max-width: 400px;

  h4 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: ${colors.gray};
  }
`
