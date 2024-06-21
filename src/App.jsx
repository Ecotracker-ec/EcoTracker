import { BrowserRouter, Link } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas} from './components'
import Calculator from "./components/Calculator"
import Home from './pages/Home'

const App = () => {
  return (
     <div>
        <Home/>
     </div>
  )
}

export default App
