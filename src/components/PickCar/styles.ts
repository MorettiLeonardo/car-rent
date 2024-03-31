import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 1300px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 32px;

  h4 {
    font-weight: 500;
    font-size: 24px;
  }

  h3 {
    font-size: 40px;
  }

  p {
    color: ${colors.gray};
    max-width: 600px;
  }
`

export const CarInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const PickContainer = styled.div`
  display: flex;
  gap: 150px;
  margin-top: 54px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const Button = styled.button`
  border: none;
  background-color: ${colors.lightGray};
  font-size: 20px;
  font-weight: 500;
  padding: 14px;
  cursor: pointer;
  transition: 0.3s;
  width: 300px;

  &:hover,
  &.is-selected {
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.notebook}) {
    width: auto;
    font-size: 16px;
  }
`
