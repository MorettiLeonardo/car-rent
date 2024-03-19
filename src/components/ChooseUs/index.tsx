import chooseUsImg from '../../assets/images/ChooseUs/choose_us_car.png'
import car from '../../assets/images/ChooseUs/choose_car.png'
import coin from '../../assets/images/ChooseUs/choose_coin.png'
import coinHand from '../../assets/images/ChooseUs/choose_coin_hand.png'

import Button from '../Button'

import * as S from './styles'

const ChooseUs = () => (
  <S.Container className="container">
    <img src={chooseUsImg} alt="Escolha a gente" />
    <S.Infos>
      <S.WhyChooseUs>
        <h4>Por que escolher a gente</h4>
        <h2>As melhores ofertas e custo-benefício que você encontrará.</h2>
        <p>
          Descubra as melhores ofertas que você encontrará com nossas ofertas
          imbatíveis. Estamos dedicados a oferecer o melhor custo-benefício para
          o seu dinheiro, para que você possa desfrutar de serviços e produtos
          de alta qualidade sem gastar muito.
        </p>
        <Button color="orange" text="Saiba mais" />
      </S.WhyChooseUs>
      <S.CartContainer>
        <S.Card>
          <img src={car} alt="Carro" />
          <S.CartContent>
            <h4>Viagem de Carro pelo País</h4>
            <p>
              Eleve sua experiência de condução ao próximo nível com nossos
              veículos de primeira linha para suas aventuras de viagem pelo
              país.
            </p>
          </S.CartContent>
        </S.Card>
        <S.Card>
          <img src={coin} alt="Moeda" />
          <S.CartContent>
            <h4>Preços tudo incluído</h4>
            <p>
              Obtenha tudo o que você precisa em um preço conveniente e
              transparente com nossa política de preços tudo incluído.
            </p>
          </S.CartContent>
        </S.Card>
        <S.Card>
          <img src={coinHand} alt="Moeda em uma mão" />
          <S.CartContent>
            <h4>Sem taxas ocultas.</h4>
            <p>
              Tenha tranquilidade com nossa política de sem taxas ocultas.
              Acreditamos em preços transparentes e honestos.
            </p>
          </S.CartContent>
        </S.Card>
      </S.CartContainer>
    </S.Infos>
  </S.Container>
)

export default ChooseUs
