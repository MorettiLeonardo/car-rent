import about from '../../assets/images/About/about_image.jpg'
import car from '../../assets/images/About/car.png'
import outlets from '../../assets/images/About/Outlets.png'
import shops from '../../assets/images/About/Shop.png'

import * as S from './styles'

const AboutCompany = () => (
  <S.Container className="container">
    <img src={about} alt="Duas pessoas conversando" />
    <S.InfosContainer>
      <h3>Sobre a empresa</h3>
      <h2>Você liga o motor e sua aventura começa</h2>
      <p>
        Certo, mas ela, mas timidez, por que cottage. Guy, o instrumento
        colocado, senhor, implora afrontando. Fingi primoroso ver-te
        cordialmente. Semanas tranquilas incomodam ou de quem. Imóvel se não
        afrontar a imprudência sem precaução. Minha satisfação como disposição
        compareceu fortemente.
      </p>
      <S.Infos>
        <div>
          <img src={car} alt="Carro" />
          <p>
            <span>20</span> tipos de carros
          </p>
        </div>
        <div>
          <img src={outlets} alt="outlets" />
          <p>
            <span>85</span> Locais de aluguel
          </p>
        </div>
        <div>
          <img src={shops} alt="Shop" />
          <p>
            <span>75</span> Locais de aluguel
          </p>
        </div>
      </S.Infos>
    </S.InfosContainer>
  </S.Container>
)

export default AboutCompany
