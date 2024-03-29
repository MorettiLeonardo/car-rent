import { MouseEventHandler } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import location from '../../assets/svg/location.svg'

import Button from '../Button'

import { Border } from '../Models/styles'
import * as S from './styles'

type Props = {
  pickUpDate: string
  pickOffDate: string
  carName: string
  carImage: string
  onClick?: MouseEventHandler<HTMLParagraphElement>
}

const ReservationModal = ({
  pickOffDate,
  pickUpDate,
  carName,
  carImage,
  onClick
}: Props) => {
  const form = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: '',
      email: '',
      address: '',
      city: '',
      zipcode: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(3).required('O campo é obrigatório'),
      lastName: Yup.string().min(3).required('O campo é obrigatório'),
      phoneNumber: Yup.string()
        .min(15)
        .max(15)
        .required('O campo é obrigatório'),
      age: Yup.string().required('O campo é obrigatório'),
      email: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipcode: Yup.string().min(9).max(9).required('O campo é obrigatório')
    }),

    onSubmit: (values) => console.log(values)
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.Container>
      <S.HeaderReservation>
        <h1>COMPLETE A RESERVA</h1>
        <p onClick={onClick}>x</p>
      </S.HeaderReservation>
      <S.Warning>
        <h2 className="isOrange">
          Ao completar esta consulta de reserva, você receberá:
        </h2>
        <p>
          Seu voucher de aluguel para apresentar na chegada ao balcão de aluguel
          e um número gratuito de atendimento ao cliente.
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
      <S.FormRent onSubmit={form.handleSubmit}>
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
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.firstName}
              className={checkInputHasError('firstName') ? 'error' : ''}
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
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.lastName}
              className={checkInputHasError('lastName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="phoneNumber">
              Número de telefone <span className="isOrange">*</span>
            </label>
            <InputMask
              type="text"
              name="phoneNumber"
              placeholder="Digite seu telefone"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.phoneNumber}
              className={checkInputHasError('phoneNumber') ? 'error' : ''}
              mask={'(99) 99999-9999'}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="age">
              Idade <span className="isOrange">*</span>
            </label>
            <InputMask
              type="text"
              name="age"
              placeholder="Digite sua idade"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.age}
              className={checkInputHasError('age') ? 'error' : ''}
              mask={'99'}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="email">
              Email <span className="isOrange">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.email}
              className={checkInputHasError('email') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">
              Endereço <span className="isOrange">*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Digite seu endereço"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.address}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">
              Cidade <span className="isOrange">*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Digite sua cidade"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.city}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="zipcode">
              CEP <span className="isOrange">*</span>
            </label>
            <InputMask
              type="text"
              name="zipcode"
              placeholder="Digite seu CEP"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.zipcode}
              className={checkInputHasError('zipcode') ? 'error' : ''}
              mask={'99999-999'}
            />
          </S.InputGroup>
        </S.InputGroupContainer>
        <S.CheckboxNews>
          <input type="checkbox" />
          <label htmlFor="news">Enviar últimas notícias e atualizações</label>
        </S.CheckboxNews>
        <Button
          color="orange"
          text="Reservar"
          onSubmit={() => form.handleSubmit()}
        />
      </S.FormRent>
    </S.Container>
  )
}

export default ReservationModal
