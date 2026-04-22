
import Home from "./Home"
import "./App.css"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./About"
import Contact from "./Contact"


function App() {
  const name = "Ashwan"
  const age = 12

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
     
      
  )
}

export default App
