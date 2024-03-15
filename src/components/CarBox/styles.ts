import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  max-width: 400px;
  width: 100%;

  button {
    width: 100%;
    margin-top: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 12px;
  }
`

export const RentPerDay = styled.h2`
  color: ${colors.white};
  background-color: ${colors.orange};
  padding: 14px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;

  span {
    font-weight: 900;
    font-size: 24px;
  }
`

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5%;
  border: 2px solid ${colors.gray};
  border-top: none;
  padding: 8px;
  color: ${colors.gray};
  width: 100%;

  p {
    width: 50%;
    text-align: center;
  }

  /* div {
    height: 20px;
    border-right: 2px solid ${colors.gray};
  } */
`

export const CarImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 327px;
    /* object-fit: cover; */
  }
`

export const Loader = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
