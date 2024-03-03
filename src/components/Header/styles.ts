import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderLogo = styled.img`
  max-width: 80px;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`

export const HeaderLinksList = styled.ul`
  display: flex;
  gap: 16px;
`

export const HeaderLink = styled.span`
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: ${colors.orange};
  }
`
