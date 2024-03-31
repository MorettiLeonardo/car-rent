import heroBg from '../../assets/images/hero-bg.png'
import mainCar from '../../assets/images/main-car.png'

import Button from '../Button'

import * as S from './styles'

const Hero = () => (
  <>
    <S.HeroBgImage src={heroBg} />
    <S.HeroContainer className="container">
      <S.HeroContent>
        <h4>Planeje sua viagem agora</h4>
        <h1>
          Economize <span className="isOrange">muito</span> com nosso aluguel de
          carros
        </h1>
        <p>
          Alugue o carro dos seus sonhos. Preços imbatíveis, milhas ilimitadas,
          opções de retirada flexíveis e muito mais.
        </p>
        <div>
          <Button padding="24px" color="orange" text="Reservar Viagem" />
          <Button color="black" text="Ver mais" />
        </div>
      </S.HeroContent>
      <S.MainCar src={mainCar} />
    </S.HeroContainer>
  </>
)

export default Hero
