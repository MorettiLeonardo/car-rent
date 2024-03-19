import car from '../../assets/images/PlanTrip/select_car.png'
import drive from '../../assets/images/PlanTrip/lets_drive.png'
import contact from '../../assets/images/PlanTrip/contact_operator.png'

import * as S from './styles'

const CardData = [
  {
    id: 1,
    img: car,
    title: 'Selecionar carro',
    description:
      'Nós oferecemos uma ampla gama de veículos para todas as suas necessidades de condução. Temos o carro perfeito para atender às suas necessidades.'
  },
  {
    id: 2,
    img: drive,
    title: 'Contatar o Operador',
    description:
      'Nossos operadores experientes e amigáveis estão sempre prontos para ajudar sempre que precisar com quaisquer dúvidas ou preocupações.'
  },
  {
    id: 3,
    img: contact,
    title: 'Vamos dirigir',
    description:
      'Esteja você pegando a estrada aberta, nós temos você coberto com nossa ampla variedade de carros com ótima qualidade para você.'
  }
]

const PlanTrip = () => (
  <S.Container className="container">
    <h3>Planeje sua viagem agora</h3>
    <h2>Aluguel de carro rápido e fácil</h2>
    <S.CardContainer>
      {CardData.map((card) => (
        <li key={card.id}>
          <S.Card>
            <img src={card.img} alt={card.title} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </S.Card>
        </li>
      ))}
    </S.CardContainer>
  </S.Container>
)

export default PlanTrip
