import Button from '../Button'
import { CAR_DATA } from '../CarData'
import { BookContainer, Group, InputGroup } from './styles'

const BookContent = () => (
  <BookContainer className="container">
    <h2>Alguar um carro</h2>
    <Group>
      <InputGroup>
        <label htmlFor="carType">
          Selecione a marca do carro <span className="isOrange">*</span>
        </label>
        <select>
          {CAR_DATA.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </InputGroup>
      <InputGroup>
        <label htmlFor="pickUp">
          Retirada <span className="isOrange">*</span>
        </label>
        <input type="date" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="pickUp">
          Devolução <span className="isOrange">*</span>
        </label>
        <input type="date" />
      </InputGroup>
      <Button color="orange" text="Buscar" />
    </Group>
  </BookContainer>
)

export default BookContent
