import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.notebook}) {
    h2 {
      font-size: 26px;
    }
  }
`
