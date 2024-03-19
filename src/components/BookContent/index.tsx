import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CAR_DATA } from '../CarData'

import Button from '../Button'

import * as S from './styles'

const BookContent = () => {
  const form = useFormik({
    initialValues: {
      carType: '',
      pickUp: '',
      pickOff: ''
    },
    validationSchema: Yup.object({
      carType: Yup.string().required('O campo é obrigatório.'),
      pickUp: Yup.string().required('O campo é obrigatório.'),
      pickOff: Yup.string().required('O campo é obrigatório.')
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
    <S.BookContainer className="container">
      <h2>Alguar um carro</h2>
      <S.FormGroup onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="carType">
            Selecione a marca do carro <span className="isOrange">*</span>
          </label>
          <select
            id="carType"
            name="carType"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.carType}
            className={checkInputHasError('carType') ? 'error' : ''}
          >
            <option value="">Selecione a marca do carro</option>
            {CAR_DATA.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="pickUp">
            Retirada <span className="isOrange">*</span>
          </label>
          <input
            id="pickUp"
            type="date"
            name="pickUp"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.pickUp}
            className={checkInputHasError('pickUp') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="pickOff">
            Devolução <span className="isOrange">*</span>
          </label>
          <input
            id="pickOff"
            type="date"
            name="pickOff"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.pickOff}
            className={checkInputHasError('pickOff') ? 'error' : ''}
          />
        </S.InputGroup>
        <Button color="orange" text="Buscar" type="submit" />
      </S.FormGroup>
    </S.BookContainer>
  )
}

export default BookContent
