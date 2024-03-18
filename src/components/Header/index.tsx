import Button from '../Button'
import { HeaderContainer, HeaderLinksList, HeaderLink, Buttons } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer className="container">
    <a href="">
      <img src={logo} alt="" />
    </a>
    <nav>
      <HeaderLinksList>
        <HeaderLinksList>
          <li>
            <HeaderLink>Inicio</HeaderLink>
          </li>
          <li>
            <HeaderLink>Sobre</HeaderLink>
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
