import Banner from '../../components/Banner'
import BookContent from '../../components/BookContent'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import PickCar from '../../components/PickCar'
import PlanTrip from '../../components/PlanTrip'
import { HomeContainer } from './styles'

const Home = () => (
  <>
    <HomeContainer>
      <Header />
      <Hero />
      <BookContent />
      <PlanTrip />
      <PickCar />
      <Banner />
    </HomeContainer>
  </>
)

export default Home
