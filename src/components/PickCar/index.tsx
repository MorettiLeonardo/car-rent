import { useState } from 'react'

import CarBox from '../CarBox'
import { CAR_DATA } from '../CarData'

import * as S from './styles'

const PickCar = () => {
  const [currentCar, setCurrentCar] = useState(CAR_DATA[0].name)

  return (
    <S.Container className="container">
      <S.Infos>
        <h4>Modelos de Veículos</h4>
        <h3>Nossa frota de aluguel</h3>
        <p>
          Escolha entre uma variedade dos nossos veículos incríveis para alugar
          em sua próxima aventura ou viagem de negócios.
        </p>
      </S.Infos>
      <S.CarInfos>
        <S.PickContainer>
          <S.ButtonsContainer>
            {CAR_DATA.map((car) => (
              <S.Button
                className={car.name === currentCar ? 'is-selected' : ''}
                onClick={() => setCurrentCar(car.name)}
                key={car.id}
              >
                {car.name}
              </S.Button>
            ))}
          </S.ButtonsContainer>
        </S.PickContainer>
        {CAR_DATA.map(
          (car) =>
            currentCar === car.name && <CarBox key={car.id} carData={car} />
        )}
      </S.CarInfos>
    </S.Container>
  )
}

export default PickCar
