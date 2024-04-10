import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 50px;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  background-color: ${colors.white};
  z-index: 9;
  overflow-y: auto;
`

export const HeaderReservation = styled.header`
  text-align: center;
  font-size: 14px;
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${colors.white};
    font-size: 30px;
    cursor: pointer;
  }
`

export const Warning = styled.div`
  background-color: ${colors.lightGray};
  padding: 24px;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }

  p {
    color: ${colors.gray};
    line-height: 22px;
    margin-top: 16px;
  }
`

export const InfosRent = styled.div`
  padding: 24px;
  margin: 16px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }
`

export const InfoDate = styled.div`
  margin-top: 28px;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: auto;
    }
  }
`

export const InfoCar = styled.div`
  img {
    margin-top: 16px;
    max-width: 350px;
    height: 210px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      margin-top: 32px;
    }

    img {
      width: 200px;
      height: 130px;
    }
  }
`

export const FormRent = styled.form`
  padding: 16px;

  h3 {
    font-size: 18px;
    margin-bottom: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    button {
      width: 100%;
    }
  }
`

export const InputGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  input {
    margin-top: 8px;
    padding: 14px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;

    &.error {
      border: 1px solid red;
    }
  }
`

export const CheckboxNews = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`
