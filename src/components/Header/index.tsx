import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import hamburguer from '../../assets/svg/hamburguer.svg'
import close from '../../assets/svg/close.svg'

import Button from '../Button'
import * as S from './styles'

const Header = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <>
      {active && (
        <S.MobileNav open={active}>
          <img src={close} onClick={toggleMenu} alt="Fechar" />
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>Sobre</Link>
            </li>
            <li>
              <Link to={'/vehicle-models'}>Modelos</Link>
            </li>
            <li>
              <Link to={'/testimonials'}>Depoimentos</Link>
            </li>
            <li>
              <Link to={'/team'}>Time</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contato</Link>
            </li>
          </ul>
        </S.MobileNav>
      )}

      <S.HeaderContainer className="container">
        <Link to={'/'}>
          <img src={logo} alt="Abrir" />
        </Link>

        <S.MenuHamburguer
          onClick={() => setActive(true)}
          src={hamburguer}
          alt="Abrir"
        />

        <S.NavPC>
          <S.HeaderLinksList>
            <S.HeaderLinksList>
              <li>
                <Link to={'/'}>
                  <S.HeaderLink>Inicio</S.HeaderLink>
                </Link>
              </li>
              <li>
                <Link to={'/about'}>
                  <S.HeaderLink>Sobre</S.HeaderLink>
                </Link>
              </li>
              <li>
                <Link to={'/vehicle-models'}>
                  <S.HeaderLink>Modelo dos Veículos</S.HeaderLink>
                </Link>
              </li>
              <li>
                <Link to={'/testimonials'}>
                  <S.HeaderLink>Depoimentos</S.HeaderLink>
                </Link>
              </li>
              <li>
                <Link to={'/team'}>
                  <S.HeaderLink>Nosso Time</S.HeaderLink>
                </Link>
              </li>
              <li>
                <Link to={'/contact'}>
                  <S.HeaderLink>Contato</S.HeaderLink>
                </Link>
              </li>
            </S.HeaderLinksList>
          </S.HeaderLinksList>
        </S.NavPC>

        <S.Buttons>
          <S.HeaderLink>Entrar</S.HeaderLink>
          <Button color="orange" text="Registrar-se" />
        </S.Buttons>
      </S.HeaderContainer>
    </>
  )
}
export default Header
