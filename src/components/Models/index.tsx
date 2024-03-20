import Button from '../Button'

import audi from '../../assets/images/VehicleModels/audi-box.png'
import { Card, CardContainer, RentInfo, CarInfo } from './styles'

const Models = () => (
  <section className="container">
    <Card>
      <img src={audi} alt="" />
      <CardContainer>
        <RentInfo>
          <h3>Audi</h3>
          <div>
            <h3>$45</h3>
            <p>por dia</p>
          </div>
        </RentInfo>
        <CarInfo>
          <p>Audi</p>
          <p>4/5</p>
          <p>Manual</p>
          <p>Disel</p>
        </CarInfo>
        <div />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
  </section>
)

export default Models
