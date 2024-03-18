import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;

  nav {
    @media (max-width: 1100px) {
      display: none;
    }
  }

  button {
    font-size: 14px;
  }

  img {
    max-width: 120px;
    padding: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const HeaderLinksList = styled.ul`
  display: flex;
  gap: 16px;
`

export const HeaderLink = styled.span`
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
  color: ${colors.black};

  &:hover {
    color: ${colors.orange};
  }
`
