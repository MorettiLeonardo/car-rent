import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  position: absolute;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  button {
    font-size: 14px;
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
