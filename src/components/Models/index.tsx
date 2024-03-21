import Button from '../Button'

import audi from '../../assets/images/VehicleModels/audi-box.png'
import {
  Card,
  CardContainer,
  RentInfo,
  CarInfo,
  Border,
  CarInfoContainer,
  Container
} from './styles'
import { car } from '../../assets/svg/path'

const Models = () => (
  <Container className="container">
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
        <CarInfoContainer>
          <CarInfo>
            <p>
              <span>{car}</span> Audi
            </p>
            <p>
              <span>{car}</span>4/5
            </p>
          </CarInfo>
          <CarInfo>
            <p>
              Manual<span>{car}</span>
            </p>
            <p>
              Disel<span>{car}</span>
            </p>
          </CarInfo>
        </CarInfoContainer>
        <Border />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
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
        <CarInfoContainer>
          <CarInfo>
            <p>
              <span>{car}</span> Audi
            </p>
            <p>
              <span>{car}</span>4/5
            </p>
          </CarInfo>
          <CarInfo>
            <p>
              Manual<span>{car}</span>
            </p>
            <p>
              Disel<span>{car}</span>
            </p>
          </CarInfo>
        </CarInfoContainer>
        <Border />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
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
        <CarInfoContainer>
          <CarInfo>
            <p>
              <span>{car}</span> Audi
            </p>
            <p>
              <span>{car}</span>4/5
            </p>
          </CarInfo>
          <CarInfo>
            <p>
              Manual<span>{car}</span>
            </p>
            <p>
              Disel<span>{car}</span>
            </p>
          </CarInfo>
        </CarInfoContainer>
        <Border />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
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
        <CarInfoContainer>
          <CarInfo>
            <p>
              <span>{car}</span> Audi
            </p>
            <p>
              <span>{car}</span>4/5
            </p>
          </CarInfo>
          <CarInfo>
            <p>
              Manual<span>{car}</span>
            </p>
            <p>
              Disel<span>{car}</span>
            </p>
          </CarInfo>
        </CarInfoContainer>
        <Border />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
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
        <CarInfoContainer>
          <CarInfo>
            <p>
              <span>{car}</span> Audi
            </p>
            <p>
              <span>{car}</span>4/5
            </p>
          </CarInfo>
          <CarInfo>
            <p>
              Manual<span>{car}</span>
            </p>
            <p>
              Disel<span>{car}</span>
            </p>
          </CarInfo>
        </CarInfoContainer>
        <Border />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
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
        <CarInfoContainer>
          <CarInfo>
            <p>
              <span>{car}</span> Audi
            </p>
            <p>
              <span>{car}</span>4/5
            </p>
          </CarInfo>
          <CarInfo>
            <p>
              Manual<span>{car}</span>
            </p>
            <p>
              Disel<span>{car}</span>
            </p>
          </CarInfo>
        </CarInfoContainer>
        <Border />
        <Button color="orange" text="Alugar" />
      </CardContainer>
    </Card>
  </Container>
)

export default Models
