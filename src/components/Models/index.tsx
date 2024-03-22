import Button from '../Button'

import { CAR_DATA } from '../CarData'

import { carIcon } from '../../assets/svg/path'

import * as S from './styles'

const Models = () => (
  <S.Container className="container">
    {CAR_DATA.map((car) => (
      <S.Card key={car.id}>
        <img src={car.box} alt={car.name} />
        <S.CardContainer>
          <S.RentInfo>
            <h3>{car.mark}</h3>
            <div>
              <h3>R$ {car.price}</h3>
              <p>por dia</p>
            </div>
          </S.RentInfo>
          <S.CarInfoContainer>
            <S.CarInfo>
              <p>
                <span>{carIcon}</span> {car.model}
              </p>
              <p>
                <span>{carIcon}</span> {car.doors}
              </p>
            </S.CarInfo>
            <S.CarInfo>
              <p>
                {car.transmission}
                <span>{carIcon}</span>
              </p>
              <p>
                {car.fuel}
                <span>{carIcon}</span>
              </p>
            </S.CarInfo>
          </S.CarInfoContainer>
          <S.Border />
          <Button color="orange" text="Alugar" />
        </S.CardContainer>
      </S.Card>
    ))}
  </S.Container>
)

export default Models
