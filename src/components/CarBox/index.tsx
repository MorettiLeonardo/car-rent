import Button from '../Button'
import { RentPerDay, Container, CarInfo } from './styles'

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
  data: Car
}

const CarBox = ({ data }: Props) => (
  <Container>
    <RentPerDay>
      <span>R$ {data.price}</span> / alugel por dia
    </RentPerDay>
    <div>
      <CarInfo>
        <p>Modelo</p>
        <div></div>
        <p>{data.model}</p>
      </CarInfo>
      <CarInfo>
        <p>Marca</p>
        <div></div>
        <p>{data.mark}</p>
      </CarInfo>
      <CarInfo>
        <p>Ano</p>
        <div></div>
        <p>{data.year}</p>
      </CarInfo>
      <CarInfo>
        <p>Portas</p>
        <div></div>
        <p>{data.doors}</p>
      </CarInfo>
      <CarInfo>
        <p>AC</p>
        <div></div>
        <p>{data.air}</p>
      </CarInfo>
      <CarInfo>
        <p>Transmissão</p>
        <div></div>
        <p>{data.transmission}</p>
      </CarInfo>
      <CarInfo>
        <p>Combustível</p>
        <div></div>
        <p>{data.fuel}</p>
      </CarInfo>
    </div>
    <Button color="orange" text="Reservar agora" />
  </Container>
)

export default CarBox
