import logo from '../../assets/images/logo.png'
import Button from '../Button'
import {
  HeaderLogo,
  HeaderContainer,
  HeaderLinksList,
  HeaderLink
} from './styles'

const Header = () => (
  <HeaderContainer className="container">
    <HeaderLogo src={logo} alt="Logo" />
    <nav>
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
    </nav>
    <div>
      <HeaderLink>Entrar</HeaderLink>
      <Button text="Registrar-se" />
    </div>
  </HeaderContainer>
)

export default Header
