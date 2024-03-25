import styled from 'styled-components'
import { colors } from '../../styles'

export const NavPC = styled.nav`
  @media (max-width: 1100px) {
    display: none;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;

  button {
    font-size: 14px;
  }

  img {
    max-width: 120px;
    padding: 0;
  }
`

export const MenuHamburguer = styled.img`
  display: block;
  max-width: 30px;
  max-height: 30px;
  cursor: pointer;

  @media (min-width: 1100px) {
    display: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1100px) {
    display: none;
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
  color: ${colors.black};

  &:hover {
    color: ${colors.orange};
  }
`

export const MobileNav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colors.white};
  z-index: 2;

  img {
    position: absolute;
    max-width: 30px;
    max-height: 30px;
    cursor: pointer;
    top: 16px;
    right: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    font-weight: 450;
    font-size: 24px;

    :only-child {
      color: ${colors.black};
    }
  }
`
