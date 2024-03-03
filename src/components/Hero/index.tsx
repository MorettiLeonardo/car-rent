import heroBg from '../../assets/images/hero-bg.png'
import mainCar from '../../assets/images/main-car.png'
import { DefaultParagraph } from '../../styles'
import Button from '../Button'

import { HeroBgImage, HeroContainer, HeroContent, MainCar } from './styles'

const Hero = () => (
  <>
    <HeroBgImage src={heroBg} />
    <HeroContainer className="container">
      <HeroContent>
        <h4>Planeje sua viagem agora</h4>
        <h1>
          Economize <span className="isOrange">muito</span> com nosso aluguel de
          carros
        </h1>
        <DefaultParagraph>
          Alugue o carro dos seus sonhos. Preços imbatíveis, milhas ilimitadas,
          opções de retirada flexíveis e muito mais.
        </DefaultParagraph>
        <div>
          <Button padding="24px" color="orange" text="Reservar Viagem" />
          <Button color="black" text="Ver mais" />
        </div>
      </HeroContent>
      <MainCar src={mainCar} />
    </HeroContainer>
  </>
)

export default Hero
