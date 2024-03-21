import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
`

export const Card = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${colors.gray};

  img {
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
    font-size: 28px;
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
  justify-content: center;
  flex-direction: column;

  p {
    margin: 16px 0;
    font-weight: 500;
    font-size: 18 px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.gray};
  margin: 16px 0;
`
