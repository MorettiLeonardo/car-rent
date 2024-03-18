import AboutCompany from '../../components/AboutCompany'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PlanTrip from '../../components/PlanTrip'
import { Overlay } from '../../styles'

const About = () => (
  <>
    <Overlay />
    <Header />
    <AboutCompany />
    <PlanTrip />
    <Banner
      title="Reserve um carro entrando em contato conosco"
      text="(123) 456-7869"
      isOrange
    />
    <Footer />
  </>
)

export default About
