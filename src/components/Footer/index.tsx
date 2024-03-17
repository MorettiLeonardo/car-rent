import Button from '../Button'

import { letter, phone } from '../../assets/svg/path'

import { Container, Infos, ListInfos, ContactInfo } from './styles'

const Footer = () => (
  <footer className="container">
    <Container>
      <Infos>
        <h3>
          Rent <span>Wheels</span>
        </h3>
        <p>
          Oferecemos uma grande variedade de veículos para todas as suas
          necessidades de condução. Temos o carro perfeito para atender às suas
          necessidades.
        </p>
        <ContactInfo>
          <p>
            <span>{phone}</span> (12) 91234-5678
          </p>
          <p>
            <span>{letter}</span> rentwheels@email.com
          </p>
        </ContactInfo>
      </Infos>
      <Infos>
        <h3>EMPRESA</h3>
        <ListInfos>
          <li>
            <a href="#">Curitiba</a>
          </li>
          <li>
            <a href="#">Carreiras</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Como nós trabalhamos</a>
          </li>
        </ListInfos>
      </Infos>
      <Infos>
        <h3>JORNADA DE TRABALHO</h3>
        <ListInfos>
          <li>
            <a href="#">Seg - Sex: 09:00 - 21:00</a>
          </li>
          <li>
            <a href="#">Sábado: 09:00 - 19:00</a>
          </li>
          <li>
            <a href="#">Domingo - Fechado</a>
          </li>
        </ListInfos>
      </Infos>
      <Infos>
        <h3>Assine</h3>
        <p>
          Assine seu endereço de e-mail para receber as últimas notícias e
          atualizações.
        </p>
        <input type="text" placeholder="E-mail" />
        <Button color="orange" text="Enviar" />
      </Infos>
    </Container>
  </footer>
)

export default Footer
