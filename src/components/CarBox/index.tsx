import { useState } from 'react'
import Button from '../Button'
import { RentPerDay, Container, CarInfo, CarImage, Loader } from './styles'
import { colors } from '../../styles'
import { ClipLoader } from 'react-spinners'

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
      <CarImage>
        {carLoad ? (
          <Loader className="is-loading">
            <ClipLoader color={colors.orange} />
          </Loader>
        ) : (
          <img
            style={{ display: carLoad ? 'none' : 'block' }}
            src={carData.img}
            alt={carData.name}
            onLoad={() => setCarLoad(false)}
          />
        )}
      </CarImage>
      <Container>
        <RentPerDay>
          <span>R$ {carData.price}</span> / alugel por dia
        </RentPerDay>
        <div>
          <CarInfo>
            <p>Modelo</p>
            <div></div>
            <p>{carData.model}</p>
          </CarInfo>
          <CarInfo>
            <p>Marca</p>
            <div></div>
            <p>{carData.mark}</p>
          </CarInfo>
          <CarInfo>
            <p>Ano</p>
            <div></div>
            <p>{carData.year}</p>
          </CarInfo>
          <CarInfo>
            <p>Portas</p>
            <div></div>
            <p>{carData.doors}</p>
          </CarInfo>
          <CarInfo>
            <p>AC</p>
            <div></div>
            <p>{carData.air}</p>
          </CarInfo>
          <CarInfo>
            <p>Transmissão</p>
            <div></div>
            <p>{carData.transmission}</p>
          </CarInfo>
          <CarInfo>
            <p>Combustível</p>
            <div></div>
            <p>{carData.fuel}</p>
          </CarInfo>
        </div>
        <Button color="orange" text="Reservar agora" />
      </Container>
    </>
  )
}
export default CarBox
