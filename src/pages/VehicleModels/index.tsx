import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Models from '../../components/Models'

import { Overlay } from '../../styles'

const VehicleModels = () => (
  <div>
    <Overlay />
    <Header />
    <Models />
    <Banner
      title="Reserve um carro entrando em contato conosco"
      text="(123) 456-7869"
      isOrange
    />
    <Footer />
  </div>
)

export default VehicleModels
