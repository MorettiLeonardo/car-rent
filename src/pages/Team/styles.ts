import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 200px;
`

export const TeamCard = styled.div`
  max-width: 330px;
  width: 100%;
  background-color: ${colors.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

  img {
    max-width: 330px;
    max-height: 412px;
  }

  div {
    width: 330px;
    text-align: center;
    background-color: ${colors.white};
    text-align: center;
    padding: 16px 0;
  }

  h3 {
    font-size: 24px;
  }

  p {
    color: ${colors.gray};
    font-weight: 500;
    margin-top: 8px;
  }
`
