import { letter, phone, location } from '../../assets/svg/path'
import Button from '../Button'
import { Container, Infos, FormContainer, InputGroup } from './styles'

const FormContact = () => (
  <Container className="container">
    <Infos>
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
    </Infos>
    <FormContainer>
      <InputGroup>
        <label htmlFor="fullName">
          Nome completo <span className="isOrange">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder='Exemplo: "João Silva"'
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="email">
          Email <span className="isOrange">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="seuemail@exemplo.com"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="tellUs">
          Conte-nos sobre isso <span className="isOrange">*</span>
        </label>
        <textarea name="tellUs" id="tellUs" placeholder="Escreva aqui..." />
      </InputGroup>
      <Button color="orange" text="Enviar mensagem" />
    </FormContainer>
  </Container>
)

export default FormContact
