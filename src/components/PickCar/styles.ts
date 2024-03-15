import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
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

export const PickContainer = styled.div`
  display: flex;
  margin-top: 54px;
  gap: 150px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Button = styled.button`
  border: none;
  background-color: ${colors.lightGrey};
  font-size: 20px;
  font-weight: 500;
  padding: 14px;
  cursor: pointer;
  transform: 0.4s;
  width: 300px;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.orange};
  }
`
