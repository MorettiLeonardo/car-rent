import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import FormContact from '../../components/FormContact'
import Header from '../../components/Header'

import { Overlay } from '../../styles'

const Contact = () => (
  <>
    <Overlay />
    <Header />
    <FormContact />
    <Banner
      title="Reserve um carro entrando em contato conosco"
      text="(123) 456-7869"
      isOrange
    />
    <Footer />
  </>
)

export default Contact
