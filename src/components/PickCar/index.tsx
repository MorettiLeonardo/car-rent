import CarBox from '../CarBox'
import { CAR_DATA } from '../CarData'
import {
  Button,
  Container,
  Infos,
  PickContainer,
  ButtonsContainer,
  CarImage
} from './styles'

const PickCar = () => (
  <Container className="container">
    <Infos>
      <h4>Modelos de Veículos</h4>
      <h3>Nossa frota de aluguel</h3>
      <p>
        Escolha entre uma variedade dos nossos veículos incríveis para alugar em
        sua próxima aventura ou viagem de negócios.
      </p>
    </Infos>
    <PickContainer>
      <ButtonsContainer>
        {CAR_DATA.map((car) => (
          <Button key={car.name}>{car.name}</Button>
        ))}
      </ButtonsContainer>
      <CarImage>
        <img src={CAR_DATA[0].img} alt="" />
      </CarImage>
      <CarBox data={CAR_DATA[0]} />
    </PickContainer>
  </Container>
)

export default PickCar
