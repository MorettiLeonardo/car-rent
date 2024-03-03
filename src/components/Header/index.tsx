import Button from '../Button'
import { HeaderContainer, HeaderLinksList, HeaderLink } from './styles'

const Header = () => (
  <HeaderContainer className="container">
    <h1>Logo</h1>
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
      <Button color="orange" text="Registrar-se" />
    </div>
  </HeaderContainer>
)

export default Header
