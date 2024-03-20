import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  max-width: 350px;
  max-height: 600px;
  img {
    width: 100%;
    margin-bottom: -8px;
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
  h3 {
    font-size: 28px;
  }
`

export const CarInfo = styled.div`
  display: flex;
`
