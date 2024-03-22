import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import VehicleModels from './pages/VehicleModels'
import ClientsTestimonials from './pages/ClientsTestimonials'
import Team from './pages/Team'
import Contact from './pages/Contact'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/vehicle-models" element={<VehicleModels />} />
    <Route path="/testimonials" element={<ClientsTestimonials />} />
    <Route path="/team" element={<Team />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default RoutesConfig
