import Banner from '../../components/Banner'
import BookContent from '../../components/BookContent'
import ChooseUs from '../../components/ChooseUs'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import PickCar from '../../components/PickCar'
import PlanTrip from '../../components/PlanTrip'
import Testimonials from '../../components/Testimonials'
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
      <ChooseUs />
      <Testimonials />
    </HomeContainer>
  </>
)

export default Home
