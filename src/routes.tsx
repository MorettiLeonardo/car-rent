import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VehicleModels from './pages/VehicleModels'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/vehicle-models" element={<VehicleModels />} />
  </Routes>
)

export default RoutesConfig
