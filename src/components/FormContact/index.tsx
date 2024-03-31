import { letter, phone, location } from '../../assets/svg/path'

import Button from '../Button'

import * as S from './styles'

const FormContact = () => (
  <S.Container className="container">
    <S.Infos>
      <h2>Precisa de informações adicionais?</h2>
      <p>
        Um profissional multifacetado, qualificado em diversas áreas de
        pesquisa, desenvolvimento e também um especialista em aprendizagem. Mais
        de 15 anos de experiência.
      </p>
      <h4>
        <span>{phone}</span> (12) 1234-5678
      </h4>
      <h4>
        <span>{letter}</span> rentwheels@gmail.com
      </h4>
      <h4>
        <span>{location}</span> Curitiba, Paraná
      </h4>
    </S.Infos>
    <S.FormContainer>
      <S.InputGroup>
        <label htmlFor="fullName">
          Nome completo <span className="isOrange">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder='Exemplo: "João Silva"'
        />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="email">
          Email <span className="isOrange">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="seuemail@exemplo.com"
        />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="tellUs">
          Conte-nos sobre isso <span className="isOrange">*</span>
        </label>
        <textarea name="tellUs" id="tellUs" placeholder="Escreva aqui..." />
      </S.InputGroup>
      <Button color="orange" text="Enviar mensagem" />
    </S.FormContainer>
  </S.Container>
)

export default FormContact
