import BookContent from '../../components/BookContent'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import PlanTrip from '../../components/PlanTrip'
import { HomeContainer } from './styles'

const Home = () => (
  <>
    <HomeContainer>
      <Header />
      <Hero />
      <BookContent />
      <PlanTrip />
    </HomeContainer>
  </>
)

export default Home
