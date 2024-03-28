import location from '../../assets/svg/location.svg'

import Button from '../Button'

import { Border } from '../Models/styles'
import * as S from './styles'

type Props = {
  pickUpDate: string
  pickOffDate: string
  carName: string
  carImage: string
}

const ReservationModal = ({
  pickOffDate,
  pickUpDate,
  carName,
  carImage
}: Props) => (
  <S.Container>
    <S.HeaderReservation>
      <h1>COMPLETE A RESERVA</h1>
      <p>x</p>
    </S.HeaderReservation>
    <S.Warning>
      <h2 className="isOrange">
        Ao completar esta consulta de reserva, você receberá:
      </h2>
      <p>
        Seu voucher de aluguel para apresentar na chegada ao balcão de aluguel e
        um número gratuito de atendimento ao cliente.
      </p>
    </S.Warning>
    <S.InfosRent>
      <div>
        <h3 className="isOrange">Data</h3>
        <S.InfoDate>
          <p>
            <img src={location} alt="" />
            <strong>Data e hora de coleta</strong>
          </p>
          <p>
            {pickUpDate} / <input type="time" />
          </p>
        </S.InfoDate>
        <S.InfoDate>
          <p>
            <img src={location} alt="" />
            <strong>Data e hora de entrega</strong>
          </p>
          <p>
            {pickOffDate} / <input type="time" />
          </p>
        </S.InfoDate>
      </div>
      <S.InfoCar>
        <h3>
          Carro - <span className="isOrange">{carName}</span>
        </h3>
        <img src={carImage} alt={carName} />
      </S.InfoCar>
    </S.InfosRent>
    <Border />
    <S.FormRent>
      <h3 className="isOrange">Informações pessoais</h3>
      <S.InputGroupContainer>
        <S.InputGroup>
          <label htmlFor="firstName">
            Primeiro nome <span className="isOrange">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Digite seu primeiro nome"
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="lastName">
            Último nome <span className="isOrange">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Digite seu último nome"
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="phoneNumber">
            Número de telefone <span className="isOrange">*</span>
          </label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Digite seu telefone"
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="age">
            Idade <span className="isOrange">*</span>
          </label>
          <input type="number" name="age" placeholder="Digite sua idade" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="email">
            Email <span className="isOrange">*</span>
          </label>
          <input type="email" name="email" placeholder="Digite seu email" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">
            Endereço <span className="isOrange">*</span>
          </label>
          <input
            type="email"
            name="address"
            placeholder="Digite seu endereço"
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">
            Cidade <span className="isOrange">*</span>
          </label>
          <input type="email" name="city" placeholder="Digite sua cidade" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="zipCode">
            CEP <span className="isOrange">*</span>
          </label>
          <input type="email" name="zipCode" placeholder="Digite seu CEP" />
        </S.InputGroup>
      </S.InputGroupContainer>
      <S.CheckboxNews>
        <input type="checkbox" />
        <label htmlFor="news">Enviar últimas notícias e atualizações</label>
      </S.CheckboxNews>
      <Button color="orange" text="Reservar" />
    </S.FormRent>
  </S.Container>
)

export default ReservationModal
