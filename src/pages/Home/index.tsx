import Banner from '../../components/Banner'
import BookContent from '../../components/BookContent'
import ChooseUs from '../../components/ChooseUs'
import Faq from '../../components/Faq'
import Footer from '../../components/Footer'
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
      <Banner
        title="Economize com nosso aluguel de carros mais barato!"
        text="Principais Aeroportos. Fornecedores Locais. Suporte 24/7."
      />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </HomeContainer>
  </>
)

export default Home
