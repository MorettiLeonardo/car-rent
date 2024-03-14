import BookContent from '../../components/BookContent'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { HomeContainer } from './styles'

const Home = () => (
  <>
    <HomeContainer>
      <Header />
      <Hero />
      <BookContent />
    </HomeContainer>
  </>
)

export default Home
