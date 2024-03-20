import Golf6 from '../../assets/images/Cars/golf6.jpg'
import AudiA1 from '../../assets/images/Cars/audia1.jpg'
import Toyota from '../../assets/images/Cars/toyotacamry.jpg'
import Bmw320 from '../../assets/images/Cars/bmw320.jpg'
import Benz from '../../assets/images/Cars/benz.jpg'
import Passat from '../../assets/images/Cars/passatcc.jpg'

import BoxGolf6 from '../../assets/images/VehicleModels/golf6-box.png'
import BoxAudiA1 from '../../assets/images/VehicleModels/audi-box.png'
import BoxToyota from '../../assets/images/VehicleModels/toyota-box.png'
import BoxBmw320 from '../../assets/images/VehicleModels/bmw-box.png'
import BoxBenz from '../../assets/images/VehicleModels/benz-box.png'
import BoxPassat from '../../assets/images/VehicleModels/passat-box.png'

export const CAR_DATA = [
  {
    id: 1,
    name: 'VW Golf 6',
    price: '185',
    img: Golf6,
    model: 'Golf 6',
    mark: 'Volkswagen',
    year: '2008',
    doors: '4/5',
    air: 'Sim',
    transmission: 'Manual',
    box: BoxGolf6,
    fuel: 'Diesel'
  },

  {
    id: 2,
    name: 'Audi A1 S-Line',
    price: '225',
    img: AudiA1,
    model: 'Audi',
    mark: 'A1',
    year: '2012',
    doors: '4/5',
    air: 'Sim',
    transmission: 'Manual',
    box: BoxAudiA1,
    fuel: 'Gasolina'
  },

  {
    id: 3,
    name: 'Toyota Camry',
    price: '150',
    img: Toyota,
    model: 'Camry',
    mark: 'Toyota',
    year: '2006',
    doors: '4/5',
    air: 'Sim',
    transmission: 'Automático',
    box: BoxToyota,
    fuel: 'Flex'
  },

  {
    id: 4,
    name: 'BMW 320 ModernLine',
    price: '175',
    img: Bmw320,
    model: '320',
    mark: 'BMW',
    year: '2012',
    doors: '4/5',
    air: 'Sim',
    transmission: 'Manual',
    box: BoxBmw320,
    fuel: 'Diesel'
  },

  {
    id: 5,
    name: 'Mercedes-Benz GLK',
    price: '250',
    img: Benz,
    model: 'Benz GLK',
    mark: 'Mercedes',
    year: '2006',
    doors: '4/5',
    air: 'Sim',
    transmission: 'Manual',
    box: BoxBenz,
    fuel: 'Diesel'
  },

  {
    id: 6,
    name: 'VW Passat CC',
    price: '125',
    img: Passat,
    model: 'Passat CC',
    mark: 'Volkswagen',
    year: '2008',
    doors: '4/5',
    air: 'Sim',
    transmission: 'Automático',
    box: BoxPassat,
    fuel: 'Gasolina'
  }
]
