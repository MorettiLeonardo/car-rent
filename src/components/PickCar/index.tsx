import { useState } from 'react'
import CarBox from '../CarBox'
import { CAR_DATA } from '../CarData'
import {
  Button,
  Container,
  Infos,
  PickContainer,
  ButtonsContainer
} from './styles'

const PickCar = () => {
  const [currentCar, setCurrentCar] = useState(CAR_DATA[0].name)

  return (
    <Container className="container">
      <Infos>
        <h4>Modelos de Veículos</h4>
        <h3>Nossa frota de aluguel</h3>
        <p>
          Escolha entre uma variedade dos nossos veículos incríveis para alugar
          em sua próxima aventura ou viagem de negócios.
        </p>
      </Infos>
      <PickContainer>
        <ButtonsContainer>
          {CAR_DATA.map((car) => (
            <Button onClick={() => setCurrentCar(car.name)} key={car.id}>
              {car.name}
            </Button>
          ))}
        </ButtonsContainer>
        {currentCar === CAR_DATA[0].name && <CarBox carData={CAR_DATA[0]} />}
        {currentCar === CAR_DATA[1].name && <CarBox carData={CAR_DATA[1]} />}
        {currentCar === CAR_DATA[2].name && <CarBox carData={CAR_DATA[2]} />}
        {currentCar === CAR_DATA[3].name && <CarBox carData={CAR_DATA[3]} />}
        {currentCar === CAR_DATA[4].name && <CarBox carData={CAR_DATA[4]} />}
        {currentCar === CAR_DATA[5].name && <CarBox carData={CAR_DATA[5]} />}
      </PickContainer>
    </Container>
  )
}

export default PickCar
