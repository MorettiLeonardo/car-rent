import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import bg from '../../assets/images/book-bg.png'

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-image: url(${bg});
  background-color: ${colors.white};
  padding: 50px 50px 60px 50px;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 130px;
  }
`

export const FormGroup = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;

  button {
    padding: 0;
    margin-top: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;

    button {
      margin: 0;
      padding: 10px;
    }
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

    &.error {
      border: 1px solid red;
    }
  }

  label {
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    input,
    label,
    select {
      width: 100%;
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  top: 0;
  left: 0;
  opacity: 70%;
`
