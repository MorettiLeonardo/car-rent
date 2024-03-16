import { path } from '../../assets/svg/path'
import harry from '../../assets/images/Testimonials/harry_potter.jpg'
import ron from '../../assets/images/Testimonials/ron.jpg'
import {
  Card,
  Container,
  TestimonialsContainer,
  Profile,
  ProfileContent
} from './styles'

const Testimonials = () => (
  <Container className="container">
    <h4>Avaliado por pessoas</h4>
    <h2>Depoimentos de Clientes</h2>
    <p>
      Descubra o impacto positivo que causamos em nossos clientes lendo seus
      depoimentos. Nossos clientes experimentaram nossos serviços e resultados e
      estão ansiosos para compartilhar suas experiências positivas com você.
    </p>
    <TestimonialsContainer>
      <Card>
        <p>
          Alugamos um carro neste site e tivemos uma experiência incrível! A
          reserva foi fácil e as tarifas de aluguel eram muito acessíveis.
        </p>
        <Profile>
          <ProfileContent>
            <img src={harry} alt="Harry Potter" />
            <div>
              <p>
                <b>Parry Hotter</b>
              </p>
              <p>Curitiba, PR</p>
            </div>
          </ProfileContent>
          <span className="isOrange">{path}</span>
        </Profile>
      </Card>
      <Card>
        <p>
          Alugamos um carro neste site e tivemos uma experiência incrível! A
          reserva foi fácil e as tarifas de aluguel eram muito acessíveis.
        </p>
        <Profile>
          <ProfileContent>
            <img src={ron} alt="" />
            <div>
              <p>
                <b>Ron Rizzly</b>
              </p>
              <p>São José, PR</p>
            </div>
          </ProfileContent>
          <span className="isOrange">{path}</span>
        </Profile>
      </Card>
    </TestimonialsContainer>
  </Container>
)

export default Testimonials
