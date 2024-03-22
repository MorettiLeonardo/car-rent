import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import Button from '../Button'

import * as S from './styles'

const Header = () => (
  <S.HeaderContainer className="container">
    <Link to={'/'}>
      <img src={logo} alt="" />
    </Link>
    <nav>
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
            <S.HeaderLink>Contato</S.HeaderLink>
          </li>
        </S.HeaderLinksList>
      </S.HeaderLinksList>
    </nav>
    <S.Buttons>
      <S.HeaderLink>Entrar</S.HeaderLink>
      <Button color="orange" text="Registrar-se" />
    </S.Buttons>
  </S.HeaderContainer>
)

export default Header
