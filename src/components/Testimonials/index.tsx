import { path } from '../../assets/svg/path'
import harry from '../../assets/images/Testimonials/harry_potter.jpg'
import ron from '../../assets/images/Testimonials/ron.jpg'

import * as S from './styles'

const Testimonials = () => (
  <S.Container className="container">
    <h4>Avaliado por pessoas</h4>
    <h2>Depoimentos de Clientes</h2>
    <p>
      Descubra o impacto positivo que causamos em nossos clientes lendo seus
      depoimentos. Nossos clientes experimentaram nossos serviços e resultados e
      estão ansiosos para compartilhar suas experiências positivas com você.
    </p>
    <S.TestimonialsContainer>
      <S.Card>
        <p>
          Alugamos um carro neste site e tivemos uma experiência incrível! A
          reserva foi fácil e as tarifas de aluguel eram muito acessíveis.
        </p>
        <S.Profile>
          <S.ProfileContent>
            <img src={harry} alt="Harry Potter" />
            <div>
              <p>
                <b>Parry Hotter</b>
              </p>
              <p>Curitiba, PR</p>
            </div>
          </S.ProfileContent>
          <span className="isOrange">{path}</span>
        </S.Profile>
      </S.Card>
      <S.Card>
        <p>
          Alugamos um carro neste site e tivemos uma experiência incrível! A
          reserva foi fácil e as tarifas de aluguel eram muito acessíveis.
        </p>
        <S.Profile>
          <S.ProfileContent>
            <img src={ron} alt="" />
            <div>
              <p>
                <b>Ron Rizzly</b>
              </p>
              <p>São José, PR</p>
            </div>
          </S.ProfileContent>
          <span className="isOrange">{path}</span>
        </S.Profile>
      </S.Card>
    </S.TestimonialsContainer>
  </S.Container>
)

export default Testimonials
