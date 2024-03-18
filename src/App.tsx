import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import RoutesConfig from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesConfig />
      </BrowserRouter>
    </>
  )
}

export default App
