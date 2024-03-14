import Button from '../Button'
import { CAR_DATA } from '../CarData'
import { BookContainer } from './styles'

const BookContent = () => (
  <BookContainer className="container">
    <h2>Alguar um carro</h2>
    <div>
      <div>
        <label htmlFor="carType">Selecione a marca do carro</label>
        <select>
          {CAR_DATA.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pickUp">Retirada</label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="pickUp">Devolução</label>
        <input type="date" />
      </div>
      <Button color="orange" text="Buscar" />
    </div>
  </BookContainer>
)

export default BookContent
