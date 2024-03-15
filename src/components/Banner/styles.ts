import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  text-align: center;
  background-color: ${colors.darkGray};
  color: white;
  padding: 24px;

  h2 {
    font-size: 40px;
  }

  h3 {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 500;
  }
`
