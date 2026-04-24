
import Home from "./Home"
import "./App.css"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./About"
import Contact from "./Contact"
import Test from "./Test"
import UseState from "./UseState"
import LearningUseEffect from "./UseEffect"


function App() {
  // const name = "Ashwan"
  // const age = 12

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/test' element={<Test/>} />
      <Route  path='/useState' element={<UseState/>}/>
      <Route path="UseEffect" element={<LearningUseEffect/>}/>
    </Routes>
    </BrowserRouter>
     
      
  )
}

export default App
