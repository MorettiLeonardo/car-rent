import styled, { keyframes } from 'styled-components'
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
  /* margin: 0 auto;
  /* max-width: 1330px; */

  button {
    font-size: 14px;
    z-index: 2;
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
  z-index: 2;

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

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

type Props = { open: boolean }

export const MobileNav = styled.nav<Props>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  background-color: ${colors.white};
  z-index: 2;

  animation: ${({ open }) => (open ? slideInAnimation : slideOutAnimation)} 0.3s
    ease-in-out forwards;

  img {
    position: absolute;
    max-width: 30px;
    max-height: 30px;
    cursor: pointer;
    top: 44px;
    right: 44px;
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
