import { letter, phone } from '../../assets/svg/path'

import Button from '../Button'

import * as S from './styles'

const Footer = () => (
  <footer className="container">
    <S.Container>
      <S.Infos>
        <h3>
          Rent <span>Wheels</span>
        </h3>
        <p>
          Oferecemos uma grande variedade de veículos para todas as suas
          necessidades de condução. Temos o carro perfeito para atender às suas
          necessidades.
        </p>
        <S.ContactInfo>
          <p>
            <span>{phone}</span> (12) 91234-5678
          </p>
          <p>
            <span>{letter}</span> rentwheels@email.com
          </p>
        </S.ContactInfo>
      </S.Infos>
      <S.Infos>
        <h3>EMPRESA</h3>
        <S.ListInfos>
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
        </S.ListInfos>
      </S.Infos>
      <S.Infos>
        <h3>JORNADA DE TRABALHO</h3>
        <S.ListInfos>
          <li>
            <a href="#">Seg - Sex: 09:00 - 21:00</a>
          </li>
          <li>
            <a href="#">Sábado: 09:00 - 19:00</a>
          </li>
          <li>
            <a href="#">Domingo - Fechado</a>
          </li>
        </S.ListInfos>
      </S.Infos>
      <S.Infos>
        <h3>Assine</h3>
        <p>
          Assine seu endereço de e-mail para receber as últimas notícias e
          atualizações.
        </p>
        <input type="text" placeholder="E-mail" />
        <Button color="orange" text="Enviar" />
      </S.Infos>
    </S.Container>
  </footer>
)

export default Footer
