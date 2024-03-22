import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 80px;
  padding-top: 250px;
`

export const Card = styled.div`
  max-width: 348px;
  margin: 0 auto;
  color: ${colors.gray};

  img {
    max-width: 348px;
    max-height: 270px;
    height: 100%;
    object-fit: cover;
    width: 100%;
    margin-bottom: -8px;
  }

  button {
    width: 100%;
  }
`

export const CardContainer = styled.div`
  padding: 16px;
  border: 1px solid ${colors.lightGrey};
  border-top: none;
`

export const RentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  h3 {
    font-size: 24px;
    color: ${colors.black};
  }
`

export const CarInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 16px 0;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 8px;
    max-width: 100px;
  }
`

export const Border = styled.div`
  width: 100%;
  margin: 16px 0;
  border-bottom: 1px solid ${colors.gray};
  border-radius: 4px;
`
