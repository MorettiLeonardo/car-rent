import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import Person1 from '../../assets/images/Team/1.png'
import Person2 from '../../assets/images/Team/2.png'
import Person3 from '../../assets/images/Team/3.png'
import Person4 from '../../assets/images/Team/4.png'
import Person5 from '../../assets/images/Team/5.png'
import Person6 from '../../assets/images/Team/6.png'

import { Overlay } from '../../styles'
import { TeamCard, Container } from './styles'

const Team = () => {
  const teamPpl = [
    { img: Person1, name: 'Luke Miller', job: 'Salesman' },
    { img: Person2, name: 'Michael Diaz', job: 'Business Owner' },
    { img: Person3, name: 'Briana Ross', job: 'Photographer' },
    { img: Person4, name: 'Lauren Rivera', job: 'Car Detailist' },
    { img: Person5, name: 'Martin Rizz', job: 'Mechanic' },
    { img: Person6, name: 'Caitlyn Hunt', job: 'Menager' }
  ]

  return (
    <>
      <Overlay />
      <Header />
      <Container className="container">
        {teamPpl.map((ppl) => (
          <li key={ppl.name}>
            <TeamCard>
              <img src={ppl.img} alt={ppl.name} />
              <div>
                <h3>{ppl.name}</h3>
                <p>{ppl.job}</p>
              </div>
            </TeamCard>
          </li>
        ))}
      </Container>
      <Banner
        title="Reserve um carro entrando em contato conosco"
        text="(123) 456-7869"
        isOrange
      />
      <Footer />
    </>
  )
}

export default Team
