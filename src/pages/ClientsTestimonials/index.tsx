import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Testimonials from '../../components/Testimonials'

import { Overlay } from '../../styles'

const ClientsTestimonials = () => (
  <>
    <Overlay />
    <Header />
    <Testimonials />
    <Banner
      title="Reserve um carro entrando em contato conosco"
      text="(123) 456-7869"
      isOrange
    />
    <Footer />
  </>
)

export default ClientsTestimonials
