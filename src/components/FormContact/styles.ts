import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import bgContact from '../../assets/images/Contact/bg-contact.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${bgContact});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 500px 0;

  @media (max-width: ${breakpoints.notebook}) {
    padding-top: 200px;
    padding-bottom: 950px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
`

export const Infos = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 34px;
  }

  p {
    color: ${colors.gray};
    line-height: 24px;
  }

  h4 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${colors.orange};
    }
  }
`

export const FormContainer = styled.form`
  max-width: 600px;
  width: 100%;

  button {
    width: 100%;
  }
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.lightGrey};
    border: none;
    margin-bottom: 16px;
    padding: 14px;
    font-size: 16px;
    opacity: 0.7;
  }

  textarea {
    height: 150px;
    padding: 14px;
    margin-bottom: 16px;
    background-color: ${colors.lightGrey};
    font-size: 16px;
    opacity: 0.7;
    border: none;
    resize: none;
  }
`
