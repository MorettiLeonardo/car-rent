import car from '../../assets/images/Cars/audia1.jpg'
import location from '../../assets/svg/location.svg'
import Button from '../Button'
import { Border } from '../Models/styles'
import {
  Container,
  HeaderReservation,
  Warning,
  InfosRent,
  InfoDate,
  InfoCar,
  FormRent,
  InputGroup,
  CheckboxNews,
  InputGroupContainer
} from './styles'

const ReservationModal = () => (
  <Container>
    <HeaderReservation>
      <h1>COMPLETE A RESERVA</h1>
      <p>x</p>
    </HeaderReservation>
    <Warning>
      <h2 className="isOrange">
        Ao completar esta consulta de reserva, você receberá:
      </h2>
      <p>
        Seu voucher de aluguel para apresentar na chegada ao balcão de aluguel e
        um número gratuito de atendimento ao cliente.
      </p>
    </Warning>
    <InfosRent>
      <div>
        <h3 className="isOrange">Data</h3>
        <InfoDate>
          <p>
            <img src={location} alt="" />
            <strong>Data e hora de coleta</strong>
          </p>
          <p>
            2024-03-30 / <input type="time" />
          </p>
        </InfoDate>
        <InfoDate>
          <p>
            <img src={location} alt="" />
            <strong>Data e hora de entrega</strong>
          </p>
          <p>
            2024-03-30 / <input type="time" />
          </p>
        </InfoDate>
      </div>
      <InfoCar>
        <h3>
          Carro - <span className="isOrange">Nome do carro</span>
        </h3>
        <img src={car} alt="" />
      </InfoCar>
    </InfosRent>
    <Border />
    <FormRent>
      <h3 className="isOrange">Informações pessoais</h3>
      <InputGroupContainer>
        <InputGroup>
          <label htmlFor="firstName">
            Primeiro nome <span className="isOrange">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Digite seu primeiro nome"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="lastName">
            Último nome <span className="isOrange">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Digite seu último nome"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="phoneNumber">
            Número de telefone <span className="isOrange">*</span>
          </label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Digite seu telefone"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="age">
            Idade <span className="isOrange">*</span>
          </label>
          <input type="number" name="age" placeholder="Digite sua idade" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">
            Email <span className="isOrange">*</span>
          </label>
          <input type="email" name="email" placeholder="Digite seu email" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">
            Endereço <span className="isOrange">*</span>
          </label>
          <input
            type="email"
            name="address"
            placeholder="Digite seu endereço"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">
            Cidade <span className="isOrange">*</span>
          </label>
          <input type="email" name="city" placeholder="Digite sua cidade" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="zipCode">
            CEP <span className="isOrange">*</span>
          </label>
          <input type="email" name="zipCode" placeholder="Digite seu CEP" />
        </InputGroup>
      </InputGroupContainer>
      <CheckboxNews>
        <input type="checkbox" />
        <label htmlFor="news">Enviar últimas notícias e atualizações</label>
      </CheckboxNews>
      <Button color="orange" text="Reservar" />
    </FormRent>
  </Container>
)

export default ReservationModal
