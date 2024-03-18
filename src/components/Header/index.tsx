import Button from '../Button'
import { HeaderContainer, HeaderLinksList, HeaderLink, Buttons } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer className="container">
    <Link to={'/'}>
      <img src={logo} alt="" />
    </Link>
    <nav>
      <HeaderLinksList>
        <HeaderLinksList>
          <li>
            <Link to={'/'}>
              <HeaderLink>Inicio</HeaderLink>
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              <HeaderLink>Sobre</HeaderLink>
            </Link>
          </li>
          <li>
            <HeaderLink>Modelo dos Veículos</HeaderLink>
          </li>
          <li>
            <HeaderLink>Depoimentos</HeaderLink>
          </li>
          <li>
            <HeaderLink>Nosso Time</HeaderLink>
          </li>
          <li>
            <HeaderLink>Contato</HeaderLink>
          </li>
        </HeaderLinksList>
      </HeaderLinksList>
    </nav>
    <Buttons>
      <HeaderLink>Entrar</HeaderLink>
      <Button color="orange" text="Registrar-se" />
    </Buttons>
  </HeaderContainer>
)

export default Header
