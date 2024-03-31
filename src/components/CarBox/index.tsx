import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

import Button from '../Button'

import { colors } from '../../styles'
import * as S from './styles'

type Car = {
  name: string
  price: string
  img: string
  model: string
  mark: string
  year: string
  doors: string
  air: string
  transmission: string
  fuel: string
}

type Props = {
  carData: Car
}

const CarBox = ({ carData }: Props) => {
  const [carLoad, setCarLoad] = useState(true)
  setTimeout(() => {
    setCarLoad(false)
  }, 100)

  return (
    <>
      <S.CarImage>
        {carLoad ? (
          <S.Loader>
            <ClipLoader color={colors.primary} />
          </S.Loader>
        ) : (
          <img
            style={{ display: carLoad ? 'none' : 'block' }}
            src={carData.img}
            alt={carData.name}
            onLoad={() => setCarLoad(false)}
          />
        )}
      </S.CarImage>
      <S.Container>
        <S.RentPerDay>
          <span>R$ {carData.price}</span> / alugel por dia
        </S.RentPerDay>
        <div>
          <S.CarInfo>
            <p>Modelo</p>
            <div></div>
            <p>{carData.model}</p>
          </S.CarInfo>
          <S.CarInfo>
            <p>Marca</p>
            <div></div>
            <p>{carData.mark}</p>
          </S.CarInfo>
          <S.CarInfo>
            <p>Ano</p>
            <div></div>
            <p>{carData.year}</p>
          </S.CarInfo>
          <S.CarInfo>
            <p>Portas</p>
            <div></div>
            <p>{carData.doors}</p>
          </S.CarInfo>
          <S.CarInfo>
            <p>AC</p>
            <div></div>
            <p>{carData.air}</p>
          </S.CarInfo>
          <S.CarInfo>
            <p>Transmissão</p>
            <div></div>
            <p>{carData.transmission}</p>
          </S.CarInfo>
          <S.CarInfo>
            <p>Combustível</p>
            <div></div>
            <p>{carData.fuel}</p>
          </S.CarInfo>
        </div>
        <Button color="orange" text="Reservar agora" />
      </S.Container>
    </>
  )
}
export default CarBox
