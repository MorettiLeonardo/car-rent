import styled from 'styled-components'
import { colors } from '../../styles'

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
  background-color: ${colors.orange};
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
  background-color: ${colors.lightGrey};
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
`

export const InfoDate = styled.div`
  margin-top: 28px;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const InfoCar = styled.div`
  img {
    margin-top: 16px;
    max-width: 350px;
  }
`

export const FormRent = styled.form`
  padding: 16px;

  h3 {
    font-size: 18px;
    margin-bottom: 32px;
  }
`

export const InputGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  input {
    margin-top: 8px;
    padding: 14px;
  }
`

export const CheckboxNews = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`
