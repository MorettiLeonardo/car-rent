import styled from 'styled-components'
import { colors } from '../../styles'

import bg from '../../assets/images/book-bg.png'

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 150px;
  background-image: url(${bg});
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;

  button {
    padding: 0;
    margin-top: 20px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;

  input,
  select {
    padding: 14px;
    border: 1px solid ${colors.borderColor};
    border-radius: 4px;
  }

  label {
    font-weight: bold;
    font-size: 18px;
  }
`
